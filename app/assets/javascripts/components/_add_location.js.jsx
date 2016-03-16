var AddLocation = React.createClass({
	handleSave() {
		$.ajax({
			url: '/places',
			method: 'POST',
			data: { place: {location: this.props.address}
			},
			success: (place) => {
				this.props.addLocationToPlaces(place);
			}
		})
	},

	render() {
		return (
			<div>
				<h3>{this.props.address}</h3>
				<button onClick={this.handleSave}>Save</button>
			</div>	
		)
	}
});