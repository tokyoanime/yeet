class Api::SessionsController < ApplicationController
  before_action: require_login, only: [:destroy]

  def new
    render "/signin"
  end

  def create
    @user = User.find_user(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "/"
    else
      render json: ["Incorrect username or password"]
    end
  end

  def destroy
    logout
    render "/signin"
  end

end
