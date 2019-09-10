class Api::UsersController < ApplicationController
  before_action :require_login, only: [:show, :update]

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render "/users/#{@user.id}"
    else
      render json: ["Invalid User"]
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/login"
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(user_params)
      render "/users/#{@user.id}"
    else
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
