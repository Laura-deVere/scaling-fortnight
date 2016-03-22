var Place = React.createClass({
	render() {
		return (
			<li className="place">
				<p>{this.props.location}</p>
				<span className="glyphicon glyphicon-star-empty"></span>
			</li>
		)
	}
});