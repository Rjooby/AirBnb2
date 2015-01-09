class Api::LocationsController < Api::ApiController

  def index
    @locations = Location.all
    render json: @locations
  end

  def new
    @location = Location.new
    render json: @location
  end

  def show
    @location = Location.find(params[:id])
    render json: @location
  end

  def create
    @location = Location.new(location_params)
    @location.owner_id = current_user.id
    if @location.save
      render json: @location
    else
      render json: @location.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    @location = Location.find(params[:id])
    @location.water = (params[:water] == "1" ? true : false )
    @location.bathroom = (params[:bathroom] == "1" ? true : false)
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render json: @location
  end

  private
  def location_params
    params.require(:location).permit(:name, :camptype, :price, :description, :coordinates, :max_occupancy, :water, :bathroom)
  end
end
