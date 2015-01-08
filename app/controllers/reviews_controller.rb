class ReviewsController < ApplicationController
  before_action :require_signed_in!

  def create
    location = Location.find(params[:location_id])
    review = location.reviews.new(review_params)
    review.reviewer_id = current_user.id

    review.save
    flash[:errors] = review.errors.full_messages
    redirect_to location_url(location)
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    redirect_to location_url(review.location_id)
  end

  private

  def review_params
    params.require(:review).permit(:body)
  end
end
