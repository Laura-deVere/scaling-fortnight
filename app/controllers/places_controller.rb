class PlacesController < ApplicationController

	def index
		@places = Place.all
	end

	def new
		@place = Place.new
	end

	def create
		@place = Place.new(place_params)
		if @place.save
		respond_to do |format|
      format.html { redirect_to root_path }
      format.js { render nothing: true }
    end 
  	end
	end

	private

	def place_params
		params.require(:place).permit(:location, :visited).merge(user: current_user)
	end
end