var App = React.createClass({
	getInitialState(){
		return {
			myPlaces: [],
			currentLocation: 'New York, NY',
			mapCoordinates: {
				lat: 40.748817,
				lng: -73.985428
			}
		};
	},

	addLocationToPlaces(place) {
		this.setState({ myPlaces: place})
	},

	searchLocation(location){
		var self = this;
		GMaps.geocode({
			address: location,
			callback: function(results, status) {
				if (status !== 'OK') return;

				var latlng = results[0].geometry.location;

				self.setState({
					currentLocation: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});
	},

	render() {
		return (
			<div>
				<Search onSearch={this.searchLocation} />
				<AddLocation address={this.state.currentLocation} addLocation={this.addLocationToPlaces} />
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
			</div>
		)
	}
});