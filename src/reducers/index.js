import { combineReducers } from 'redux-immutable'
import results from './results'

const rootReducer = combineReducers({
  hotels: results
})

export default rootReducer
