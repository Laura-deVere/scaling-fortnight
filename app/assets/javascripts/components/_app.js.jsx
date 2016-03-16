var App = React.createClass({
	getInitialState(){
		return {
			currentLocation: 'New York, NY',
			mapCoordinates: {
				lat: 40.748817,
				lng: -73.985428
			}
		};
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
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
			</div>
		)
	}
});