class LocationsController < ApplicationController

  def index
    @locations = Location.all
  end

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(location_params)
    @location.owner_id = current_user.id
    if @location.save
      redirect_to location_url(@location)
    else
      flash.now[:errors] = @location.errors.full_messages
      render :new
    end
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
      redirect_to location_url(@location)
    else
      flash.now[:errors] = @location.erorrs.full_messages
      render :edit
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    redirect_to locations_url
  end

  private
  def location_params
    params.require(:location).permit(:type, :price, :description, :coordinates, :max_occupancy, :water, :bathroom)
  end
end
