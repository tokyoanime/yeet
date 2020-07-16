class Api::FavoritesController < ApplicationController
  before_action :require_login, only: [:create, :update]
  def index
  end

  def show
    fav = Favorite.find_by(business_id: params[:id], user_id: current_user.id)

    if fav
      render json: {fav: true}
    else
      render json: {fav: false}
    end
  end

  def create
    @fav = Favorite.new(fav_params)
    @fav.user_id = current_user.id

    if @fav.save
      render json: ['success']
    else
      render json: @fav.errors.full_messages, status: 401
    end
  end

  def update
  end

  private
  def fav_params
    params.require(:fav).permit(:business_id, :fav)
  end
end
