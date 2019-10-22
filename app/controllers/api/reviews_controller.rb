class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    review = Review.find_by_business_id(params[:business_id])
    biz = review.business
    @reviews = biz.reviews

    if @reviews
      render :index
    else
      render json: ["Invalid Review"], status: 404
    end
  end

  def show

  end

  def create
    @review = Review.new(review_params)

    if @review.save
      biz = @review.business
      @reviews = biz.reviews

      render :index
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update_attributes(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  private
  def review_params
    params.require(:review).permit(:review_body, :review_rating, :user_id, :business_id)
  end
end
