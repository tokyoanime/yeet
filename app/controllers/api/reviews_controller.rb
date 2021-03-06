class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    review = Review.find_by_business_id(params[:business_id])

    if review
      biz = review.business
      @reviews = biz.reviews
      render :index
    else
      render json: ["No Review Available"]
    end
  end

  def show
    @review = Review.find_by_id(params[:id])

    if @review
        render :show
    else
      render json: ["No review found"], status: 404
    end
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
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    if review.destroy
      biz = review.business
      @reviews = biz.reviews
      render :index
    else
      render json: review.errors.full_messages, status: 401
    end
  end

  private
  def review_params
    params.require(:review).permit(:review_body, :review_rating, :user_id, :business_id)
  end
end
