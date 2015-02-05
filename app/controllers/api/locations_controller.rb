class Api::LocationsController < Api::ApiController

  def index
    if (params[:query])
      @locations = Location.near(params[:query], 1000)
      render :index
    else
      @locations = Location.all
      render :index
    end
  end

  def show
    @location = Location.find(params[:id])
    render :show
  end

  def create
    @location = Location.new(location_params)
    @location.owner_id = current_user.id
    puts @location.attributes
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy if @location
    render json: {}
  end

  def update
    @location = Location.find(params[:id])
    @location.update(location_params)
    render :show
  end

  private
  def location_params
    params.require(:location).permit(:name, :photo, :photo_url, :camptype, :price, :description, :coordinates, :max_occupancy, :water, :bathroom)
  end
end
