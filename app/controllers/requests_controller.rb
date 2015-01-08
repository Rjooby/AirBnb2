class RequestsController < ApplicationController
  before_action :require_signed_in!

  def index
    @location = Location.find(params[:location_id])
    @requests = @location.requests
  end

  def new
    @request = Request.new
  end

  def create
    location = Location.find(params[:location_id])
    request = location.requests.new(request_params)
    request.requester_id = current_user.id

    request.save
    flash[:errors] = request.errors.full_messages
    redirect_to location_url(location)
  end

  def approve
    current_rental_request.approve!
    redirect_to user_requests_url
  end

  def deny
    current_rental_request.deny!
    redirect_to user_requests_url
  end

  private
  def request_params
    params.require(:request).permit(:guests_num, :status, :start_date, :end_date)
  end

  def current_rental_request
    @rental_request ||= Request.includes(:location).find(params[:id])
  end

end
