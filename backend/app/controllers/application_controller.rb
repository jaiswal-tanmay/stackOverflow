class ApplicationController < ActionController::API
  include JwtHelper
  include Pundit

  def current_user
    @current_user ||= User.find_by(id: decoded_token["user_id"]) if decoded_token
  end

  def logged_in?
    !!current_user
  end

  private

  def authenticate_user
    render json: { error: "Unauthorized" }, status: :unauthorized unless logged_in?
  end

  def decoded_token
    token = request.headers['Authorization']&.split(' ')&.last
    JwtHelper.decode(token)
  end
end
