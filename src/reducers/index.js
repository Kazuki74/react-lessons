import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })

// 下記のように書けば追加もできる
// export default combineReducers({ foo, bar, baz })

