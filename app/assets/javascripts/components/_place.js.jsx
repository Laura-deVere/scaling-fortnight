var Place = React.createClass({
	render() {
		return (
			<li className="place">
				<p>{this.props.location}                          
					<span className="glyphicon glyphicon-star-empty visited"></span>
				</p>	
			</li>
		)
	}
});