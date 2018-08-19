import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { postEvent } from '../actions'
import { Link } from "react-router-dom"

class EventsNew extends Component {
	render() {
		return (
			<React.Fragment>
				<div>Foooo!</div>
			</React.Fragment>
		)
	}
}

// const mapDispatchToProps = ({ postEvents })

// dispatchは以下でもよい
// const mapDispatchToProps = ({
// 	increment, decrement
// })

export default connect(null, null)(EventsNew)
