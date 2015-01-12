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
    @request = Request.new(request_params)
    @request.requester_id = current_user.id
    if @request.save
      render json: @request
    else
      render json: @request.errors.full_messages, status: 422
    end
  end

  def update
    @request = Request.find(params[:id])
  end

  private

  def request_params
    params.require(:request).permit(:guests_num, :start_date, :end_date, :location_id)
  end

end
