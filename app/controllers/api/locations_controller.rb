class Api::LocationsController < Api::ApiController

  def index
    @locations = Location.all
    render json: @locations
  end

  def show
    @location = Location.find(params[:id])
    render :show
  end

  def create
    @location = Location.new(location_params)
    @location.owner_id = current_user.id
    if @location.save
      render json: @location
    else
      render json: @location.full_messages, status: 422
    end
  end

  private
  def location_params
    params.require(:location).permit(:name, :camptype, :price, :description, :coordinates, :max_occupancy, :water, :bathroom)
  end
end
