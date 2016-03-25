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
		$.getJSON('places.json', (response) => { this.setState({ places: response }) });
	},

	addLocationToPlaces(place) {
		var newState = this.state.places.concat(place);
		this.setState({ places: newState })
	},

	handleDelete(id) {
		$.ajax({
			url: `/places/${id}`,
			type: 'DELETE',
			success:() => {
				this.removePlace(id);
			}
		});
	},

	handleUpdate(place) {
		$.ajax({
			url: `/places/${place.id}`,
			type: 'PUT',
			data: { place: place },
			success: () => {
				this.updatePlaces(place);
				console.log(place);
			}
		})
	},

	updatePlaces(place) {
		var places = this.state.places.filter((i) => {
			return i.id != place.id
		});

		places.push(place);
		this.setState({ places: places });
	},

	removePlace(id) {
		var newPlaceList = this.state.places.filter((i) => {
			return i.id != id;
		});
		this.setState({ places: newPlaceList });
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
				<PlaceList places={this.state.places} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
			</div>
		)
	}
});