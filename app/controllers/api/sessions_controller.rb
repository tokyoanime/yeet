class Api::SessionsController < ApplicationController
  before_action :require_login, only: [:destroy]

  def create
    @user = User.find_user(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Incorrect username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: []
    else
      render json: ["Sign in first!!"], status: 404
    end
  end

end
