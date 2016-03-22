class PageController < ApplicationController
  def index
  	@user = current_user
  	if current_user
  		@places = @user.places
  	else
  		@places = Place.last(5)
  	end
  end
end
