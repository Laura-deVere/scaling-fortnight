var PlaceList = React.createClass({
	handleUpdate(place) {
		this.props.handleUpdate(place);
	},

	handleDelete(id) {
		this.props.handleDelete(id);
	},

	render() {
		var places = this.props.places.map((place) => { 
			return ( 
				<li className="place" key={place.id}>
					<Place place={place}
						handleDelete={this.handleDelete.bind(this, place.id)} 
						handleUpdate={this.handleUpdate} />
				</li> 
			) 
		}); 
		return(
			<div className="places"> 
			<header>
				<h3>Saved Places</h3>
			</header>
				<ul> 
					{places} 
				</ul> 
			</div>
		)
	}
});