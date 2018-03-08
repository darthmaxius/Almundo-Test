import { RESULT_SUCCESS, RESULT_IS_LOADING, RESULT_FAILED } from '../action-types'

let initialState = true

const loading = (state = initialState, action) => {
  switch (action.type) {
    case RESULT_IS_LOADING:
      state = true
      return state
    case RESULT_SUCCESS:
      state = false
      return state
    case RESULT_FAILED:
      state = false
      return state
    default:
      return state
  }
}

export default loading
