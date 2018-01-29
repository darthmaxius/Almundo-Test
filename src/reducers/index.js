import { combineReducers } from 'redux-immutable'
import results from './results'
import filter from './filter'

const rootReducer = combineReducers({
  hotels: results,
  filters: filter
})

export default rootReducer
