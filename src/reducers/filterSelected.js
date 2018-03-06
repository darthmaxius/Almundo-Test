import { UPDATE_FILTERS } from '../action-types/index'

let initialState = {
  stars: [],
  name: ``
}

const filterSelected = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return action.payload.filters
      break
    default:
      return state
  }
}

export default filterSelected
