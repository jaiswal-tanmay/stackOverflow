class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, except: [:create]
  before_action :authorize_admin, except: [:create]

  def index
    users = User.all
    render json: users
  end

  def show
    user = find_user
    render json: user
  rescue ActiveRecord::RecordNotFound
    render json: { error: "User not found" }, status: :not_found
  end

  def manage_users
    users_except_current = User.where.not(id: current_user.id)
    render json: users_except_current
  rescue ActiveRecord::RecordNotFound
    render json: { error: "no users found" }, status: :not_found
  end

  def create
    user = User.new(user_params)
    if user.save
      payload = { user_id: user.id, username: user.username, role: user.role }
      token = JwtHelper.encode(payload)
      render json: { token: token }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = find_user
    authorize user

    if user.update(user_params) && user.id != params[:id]
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    user = find_user
    authorize user

    user.transaction do
      begin
        delete_associated_records(user)
        user.destroy
        render json: { message: "Account deleted successfully", users: User.all }, status: :ok
      rescue => e
        Rails.logger.error("Error deleting user: #{e.message}")
        render json: { error: "Failed to delete account and associated records" }, status: :unprocessable_entity
        raise ActiveRecord::Rollback
      end
    end
  end


  private

  def find_user
    User.find(params[:id])
  end

  def delete_associated_records(user)
    user.posts.destroy_all
    user.answers.destroy_all
    user.post_votes.destroy_all
    user.ans_votes.destroy_all
  end

  def authorize_admin
    render json: { error: 'Unauthorized' }, status: :forbidden unless current_user.admin?
  end

  def user_params
    params.require(:user).permit(:username, :role, :password)
  end
end
