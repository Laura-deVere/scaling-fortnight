var Place = React.createClass({
	render() {
		return (
			<div>
				<p>{this.props.place.location}                          
					<span className="glyphicon glyphicon-star-empty visited"></span>
				</p>	
				<span onClick={this.props.handleDelete.bind(this.props.place.id)}className="glyphicon glyphicon-remove-circle visited"></span>
			</div>
		)
	}
});