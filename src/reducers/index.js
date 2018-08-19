import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })

// 下記のように書けば追加もできる
// export default combineReducers({ foo, bar, baz })

