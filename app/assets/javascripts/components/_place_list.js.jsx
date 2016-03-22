var PlaceList = React.createClass({

	renderPlaces() {
		return (
			<ul>
				{this.props.places.map(function(place, index){
            return (
            	<Place key={index} {...place} />
            );
         })

				}
			</ul>
		)
	},

	render() {
		return (
			<div className="places">
				{this.renderPlaces()}
			</div>
		)
	}
});