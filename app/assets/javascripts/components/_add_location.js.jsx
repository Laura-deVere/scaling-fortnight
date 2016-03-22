var AddLocation = React.createClass({
		handleSave() {
			var location = this.props.address;
		$.ajax({
			url: '/places',
			type: 'POST',
			dataType: "JSON",
			data: {place:{location: location}},
			success:(place) => {
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