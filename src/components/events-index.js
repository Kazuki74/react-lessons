import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents()
	}

	renderEvent() {
		return _.map(this.props.events, event => (
			<tr key={event.id}>
				<td>{event.id}</td>
				<td>{event.title}</td>
				<td>{event.body}</td>
			</tr>
		))
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{this.renderEvent()}
				</tbody>
			</table>
		)
	}
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

// dispatchは以下でもよい
// const mapDispatchToProps = ({
// 	increment, decrement
// })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
