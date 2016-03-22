class PlacesController < ApplicationController
	before_action :authenticate_user!, only: [:new, :create]
	def index
		@user = current_user
		if current_user
  		@places = @user.places
  	else
  		@places = Place.last(12)
  	end
		respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: @places }
      format.js { render nothing: true }
	  end 
	end

	def new
		@place = Place.new
	end

	def create
		@place = Place.new(place_params)
		# @place.save
		# @places = current_user.places
		# if request.xhr?
		# 	render :json => @places
		# else
		# 	redirect_to root_path
		# end
		if @place.save
			respond_to do |format|
	      format.html { redirect_to root_path }
	      format.json { render json: @place }
	      format.js { render nothing: true }
	    end 
  	end
	end

	private

	def place_params
		params.require(:place).permit(:location, :visited).merge(user: current_user)
	end
end