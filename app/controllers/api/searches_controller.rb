class Api::SearchesController < ApplicationController

  def index

    @search_results = Location.near(params[:query], 100)
    puts @search_results

  end

end
