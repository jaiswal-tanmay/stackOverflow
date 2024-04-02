class Api::V1::AnswersController < ApplicationController
  before_action :authenticate_user 

  def index
    @answers = Answer.all
    render json: @answers.map(&:as_custom_json)
  end

  def show
    @answer = Answer.find(params[:id])
    render json: @answer.as_custom_json
  end

  def create
    # answer = current_user.answers.build(answer_params) # Assuming you have a current_user method
    @answer = Answer.new(answer_params)
    if @answer.save
      @postAnswers = Answer.where(post_id: params[:post_id]).all
      render json: @postAnswers.map(&:as_custom_json), status: :created
    else
      render json: { errors: @answer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    # @answer = current_user.answers.find(params[:id])
    @answer = Answer.find(params[:id])
    if @answer.update(answer_params)
      render json: @answer.as_custom_json
    else
      render json: { errors: @answer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    # answer = current_user.answers.find(params[:id])
    answer = Answer.find(params[:id])

    if answer.ans_votes.any?
      answer.ans_votes.destroy_all
    end

    if answer.destroy
      render json: { message: 'Answer deleted successfully' }, status: :ok
    else
      render json: { error: 'Failed to delete answer' }, status: :unprocessable_entity
    end
  end

  def vote
    # Implement vote logic here
  end

  private

  def answer_params
    params.require(:answer).permit(:desc, :post_id, :user_id)
  end
end
