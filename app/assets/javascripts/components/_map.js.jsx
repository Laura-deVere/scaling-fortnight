var Map = React.createClass({

	componentDidMount(){

		// Only componentDidMount is called when the component is first added to
		// the page. This is why we are calling the following method manually. 
		// This makes sure that our map initialization code is run the first time.

		this.componentDidUpdate();
	},

	componentDidUpdate(){

		if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){

			// The map has already been initialized at this address.
			// Return from this method so that we don't reinitialize it
			// (and cause it to flicker).

			return;
		}

		this.lastLat = this.props.lat;
		this.lastLng = this.props.lng

		var map = new GMaps({
			div: '#map',
			lat: this.props.lat,
			lng: this.props.lng,
			scrollwheel: false
		});

		// Adding a marker to the location we are showing
		
		map.addMarker({
			lat: this.props.lat,
			lng: this.props.lng
		});
	},

	render(){

		return (
			<div className="map-holder">
				<div id="map"></div>
			</div>
		);
	}

});