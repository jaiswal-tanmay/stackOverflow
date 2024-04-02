class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    if params[:search].present?
      @posts = Post.where("title LIKE ?", "%#{params[:search]}%")
    else
      @posts = Post.all
    end

    render json: @posts.map(&:as_custom_json)
  end

  def show
    authorize @post
    render json: @post.as_custom_json
  end

  def create
    @post = Post.new(post_params)
    authorize @post

    if @post.save
      render json: @post.as_custom_json, status: :created
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    authorize @post

    if @post.update(post_params)
      render json: @post.as_custom_json
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @post

    @post.transaction do
      delete_associated_records(@post)
      @post.destroy
      render json: { message: "Post deleted successfully" }, status: :ok
    rescue => e
      Rails.logger.error("Error deleting post: #{e.message}")
      render json: { error: "Failed to delete post and associated records" }, status: :unprocessable_entity
      raise ActiveRecord::Rollback
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def delete_associated_records(post)
    post.ans_votes.destroy_all
    post.answers.destroy_all
    post.post_votes.destroy_all
  end

  def post_params
    params.require(:post).permit(:title, :description, :outcome, :tags, :user_id, :search)
  end
end
