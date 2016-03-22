var App = React.createClass({
	getInitialState(){
		return {
			places: [],
			currentLocation: 'New York, NY',
			mapCoordinates: {
				lat: 40.748817,
				lng: -73.985428
			}
		};
	},

	componentDidMount() {
		$.getJSON('places.json', (response) => { this.setState({ places: response }), console.log(response)});
	},

	addLocationToPlaces(place) {
		var newState = this.state.places.concat(place);
		this.setState({ places: newState })
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
			<div className="container">
				<Search onSearch={this.searchLocation} />
				<AddLocation address={this.state.currentLocation} addLocationToPlaces={this.addLocationToPlaces} />
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
				<PlaceList places={this.state.places} />
			</div>
		)
	}
});