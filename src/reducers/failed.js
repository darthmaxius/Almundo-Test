import { RESULT_FAILED } from '../action-types'

let initialState = false

const loading = (state = initialState, action) => {
  switch (action.type) {
    case RESULT_FAILED:
      state = true
      return state
    default:
      return state
  }
}

export default loading
