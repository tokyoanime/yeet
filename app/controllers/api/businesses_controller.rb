class Api::BusinessesController < ApplicationController
  before_action :require_login, only: [:create, :update]

  def show
    @biz = Business.find_by(id: params[:id])
    render :show
  end

  def create
    @biz = Business.new(biz_params)

    if @biz.save
      render 'api/businesses/show'
    else
      render json: @biz.errors, status: 401
    end
  end

  def update
    @biz = Business.find_by(id: params[:id])

    if @biz.update_attributes(biz_params)
      render "api/businesses/show"
    else
      render json: @biz.errors.full_messages, status: 401
    end
  end

  private
  def biz_params
    params.require(:biz).permit(:biz_name, :biz_address, :biz_city, :biz_state, :biz_zipcode, :biz_lat, :biz_lng, :biz_phone, :biz_url, :biz_price_range, :biz_parking, :biz_delivery, :biz_takeout, :biz_reservations, :biz_first_cat, :biz_first_cat, :biz_second_cat, :biz_third_cat, :biz_mo_hrs, :biz_tu_hrs, :biz_we_hrs, :biz_th_hrs, :biz_fr_hrs, :biz_sa_hrs, :biz_su_hrs)
  end
end