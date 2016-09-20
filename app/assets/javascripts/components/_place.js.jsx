var Place = React.createClass({
	handleUpdate() {
		var id = this.props.place.id;
		var location = this.props.place.location;
		if(this.props.place.visited != true){
			var place = {id: id, location: location, visited: true};
		} else if (this.props.place.visited == true){
			var place = {id: id, location: location, visited: false};
		} else {
			var place = {id: id, location: location, visited: false};
		}
			this.props.handleUpdate(place);
	},

	render() {
		return (
			<div>
				<p>{this.props.place.location}                          
					<span onClick={this.handleUpdate} className="glyphicon glyphicon-star-empty visited"></span>
					<span onClick={this.props.handleDelete.bind(this.props.place.id)} className="glyphicon glyphicon-remove-circle visited"></span>
				</p>	
				<img src={`https://source.unsplash.com/200x200/?${this.props.place.location}`}/>
			</div>
		)
	}
});