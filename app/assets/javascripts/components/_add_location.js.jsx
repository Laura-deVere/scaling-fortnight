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
			<div className="search-result">
				<h4>{this.props.address}<span className="glyphicon glyphicon-map-marker visited" onClick={this.handleSave}></span></h4>
			</div>	
		)
	}
});