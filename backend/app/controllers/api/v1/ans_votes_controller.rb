class Api::V1::AnsVotesController < ApplicationController
  before_action :find_ansvote, only: [:show, :update, :destroy]

  def index
    @ansvotes = AnsVote.all
    render json: @ansvotes.map(&:as_custom_json)
  end

  def show
    render json: @ansvote.as_custom_json
  end

  def create
    @ansvote = AnsVote.find_or_initialize_by(answer_id: params[:answer_id], user_id: params[:user_id], post_id: params[:post_id])
    @ansvote.assign_attributes(answer_params)

    if @ansvote.save
      @post = Post.find(params[:post_id])
      render json: @post.as_custom_json, status: :created
    else
      render json: @ansvote.errors, status: :unprocessable_entity
    end
  end

  def update
    if @ansvote.update(answer_params)
      render json: @ansvote.as_custom_json, status: :ok
    else
      render json: @ansvote.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @ansvote.destroy
    head :no_content
  end

  def vote
    # Implement vote logic here
  end

  private

  def find_ansvote
    @ansvote = AnsVote.find(params[:id])
    rescue ActiveRecord::RecordNotFound
    render json: { error: 'AnsVote not found' }, status: :not_found
  end

  def answer_params
    params.require(:ans_vote).permit(:post_id, :user_id, :answer_id, :value)
  end
end
