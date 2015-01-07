class RequestsController < ApplicationController

  def create
    location = Location.find(params[:location_id])
    request = location.comments.new(comment_params)
    request.requester_id = current_user.id

    request.save
    flash[:errors] = request.errors.full_messages
    redirect_to location_url(location)
  end

  def destroy
    request = Request.find(params[:id])
    request.destroy
    redirect_to link_url(comment.link_id)
  end

  private
  def request_params
    params.require(:request).permit(:guests_num, :status, :start_date, :end_date)
  end
end
