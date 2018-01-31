import { combineReducers } from 'redux-immutable'
import results from './results'
import filter from './filter'
import loading from './loading'

const rootReducer = combineReducers({
  hotels: results,
  filters: filter,
  loading: loading
})

export default rootReducer
