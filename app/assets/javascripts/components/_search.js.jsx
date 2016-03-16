var Search = React.createClass({
	getInitialState() {
		return { value: ''};
	},

	handleChange() {
		this.setState({value: this.refs.search.value});
	},

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSearch(this.state.value);
		console.log(this.state.value)
	},

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input className="search-bar" ref="search" type="text" onChange={this.handleChange} />
				</form>
			</div>
		)
	}
});