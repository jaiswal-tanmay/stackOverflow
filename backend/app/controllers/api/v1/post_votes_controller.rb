class Api::V1::PostVotesController < ApplicationController
  before_action :authenticate_user
  # before_action :find_postvote, only: [:show, :update, :destroy]

  def index
    @postVotes = PostVote.all
    render json: @postVotes.map(&:as_custom_json)
  end

  def show
    render json: @postVote.as_custom_json
  end

  def create
    @postVote = PostVote.find_or_initialize_by(user_id: params[:user_id], post_id: params[:post_id])
    @postVote.assign_attributes(post_params)

    if @postVote.save
      @post = Post.find(params[:post_id])
      render json: @post.as_custom_json, status: :created
    else
      render json: @postVote.errors, status: :unprocessable_entity
    end
  end

  def update
    if @postVote.update(post_params)
      render json: @postVote.as_custom_json, status: :ok
    else
      render json: @postVote.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @postVote.destroy
    head :no_content
  end

  private

  def find_postvote
    @postVote = PostVote.find(params[:id])
    rescue ActiveRecord::RecordNotFound
    render json: { error: 'PostVote not found' }, status: :not_found
  end

  def post_params
    params.require(:post_vote).permit(:post_id, :user_id, :value)
  end
end
