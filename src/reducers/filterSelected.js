import { UPDATE_RESULT } from '../action-types/index'

let initialState = {
  stars: []
}

const filterSelected = (state = initialState , action) => {
  switch (action.type) {
    case UPDATE_RESULT:
      return action.payload.filters
      break
    default:
      return state
  }
}

export default filterSelected
