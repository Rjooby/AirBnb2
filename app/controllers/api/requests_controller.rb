class Api::RequestsController < Api::ApiController

  def index
    @requests = Request.where(location_id: params[:location_id])
    puts @requests
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
    # puts @request.update(request_params)
      if params[:status] == "APPROVED"
        @request.approve!
        render json: @request
      elsif params[:status] == "DENIED"
        @request.deny!
        render json: @request
      end
    # puts @request.status
  end

  private

  def request_params
    params.permit(:guests_num, :start_date, :end_date, :status, :location_id)
  end

end
