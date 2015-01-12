class Api::ReviewsController < Api::ApiController
  before_action :require_signed_in!

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy if @review
    render json: {}
  end

  private

  def review_params
    params.require(:review).permit(:body, :location_id, :id)
  end

end
