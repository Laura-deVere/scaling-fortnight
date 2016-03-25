var Place = React.createClass({
	handleUpdate() {
		var id = this.props.place.id;
		if(this.props.place.visited != true){
			var place = {id: id, visited: true};
		} else if (this.props.place.visited == true){
			var place = {id: id, visited: false};
		} else {
			var place = {id: id, visited: false};
		}
			this.props.handleUpdate(place);
	},

	render() {
		return (
			<div>
				<p>{this.props.place.location}                          
					<span onClick={this.handleUpdate} className="glyphicon glyphicon-star-empty visited"></span>
				</p>	
				<span onClick={this.props.handleDelete.bind(this.props.place.id)} className="glyphicon glyphicon-remove-circle visited"></span>
			</div>
		)
	}
});