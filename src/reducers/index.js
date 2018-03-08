import { combineReducers } from 'redux-immutable'
import results from './results'
import filter from './filter'
import loading from './loading'
import filterSelected from './filterSelected'
import failed from './failed'

const rootReducer = combineReducers({
  hotels: results,
  filters: filter,
  loading: loading,
  filterSelected: filterSelected,
  failed: failed
})

export default rootReducer
