class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_user, except: :create

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      payload = { user_id: user.id, username: user.username, role: user.role }
      token = JwtHelper.encode(payload)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end


  def destroy
    # clear the token from client side
    head :no_content
  end
end
