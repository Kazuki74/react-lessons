import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })

// 下記のように書けば追加もできる
// export default combineReducers({ foo, bar, baz })