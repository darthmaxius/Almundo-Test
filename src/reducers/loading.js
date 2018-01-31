import { RESULT_SUCCESS, RESULT_IS_LOADING } from '../action-types'

let initialState = true

function loading (state = initialState , action) {
  switch (action.type) {
    case RESULT_IS_LOADING:
      state = true
      return state
    case RESULT_SUCCESS:
      state = false
      return state
    default:
      return state
  }
}

export default loading
