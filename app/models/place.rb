class Place < ActiveRecord::Base
	belongs_to :user
	geocoded_by :location
	after_validation :geocode #automagically gets the lat/lon
end
