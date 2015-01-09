class Api::RequestsController < Api::ApiController

  def index
    @requests = Request.all
    render json: @requests
  end

  def show
    @request = Request.find(params[:id])
    render json: @request
  end

  def create
    location = Location.find(params[:location_id])
    request = location.requests.new(request_params)
    request.requester_id = current_user.id

    request.save
    flash[:errors] = request.errors.full_messages
    redirect_to user_url(current_user)
  end
  
end
