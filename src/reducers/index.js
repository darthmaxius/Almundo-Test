import { combineReducers } from 'redux-immutable'
import results from './results'
import filter from './filter'
import loading from './loading'
import filterSelected from './filterSelected'

const rootReducer = combineReducers({
  hotels: results,
  filters: filter,
  loading: loading,
  filterSelected: filterSelected
})

export default rootReducer
