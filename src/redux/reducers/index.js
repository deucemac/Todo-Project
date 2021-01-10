import { combineReducers } from 'redux'
import cellPhoneReducer from './cellphones'
import todos from './todos'

export default combineReducers({
  todos, cellPhoneReducer
})