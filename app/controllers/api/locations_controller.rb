module Api
  class LocationsController < ApiController

    def index
      @locations = Location.all
      render json: @locations
    end

  end
end
