import { READ_EVENTS } from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENTS:
		// [
		// 	{"id":11,"title":"fuga","body":"hoge"},
		// 	{"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
		// ]
		// 上を下のようにしたい(Loadashでオブジェクト化)
		// console.log(_.mapKeys(action.response.data, 'id'))
		// [
		// 	1: {"id":11,"title":"fuga","body":"hoge"},
		// 	2: {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
		// ]
			return _.mapKeys(action.response.data, 'id')
		default:
			return events
	}
}