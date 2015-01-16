class LocationsController < ApplicationController
  before_action :require_signed_in!, only: [:new, :create, :edit, :update, :destroy]
  attr_accessor :latitude, :longitude
  def index
    @locations = Location.all
  end

  def new
    @location = Location.new
  end

  def show
    @location = Location.find(params[:id])
  end

  def create
    @location = Location.new(location_params)
    @location.owner_id = current_user.id
    # @location.water = (params[:water] == "1" ? true : false )
    # @location.bathroom = (params[:bathroom] == "1" ? true : false)
    if @location.save
      redirect_to "#/locations/" + @location.id
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
      flash.now[:errors] = @location.errors.full_messages
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
    params.require(:location).permit(:name,:photo_url, :camptype, :price, :description, :coordinates, :max_occupancy, :water, :bathroom)
  end
end
