import { CLICK_STARS, RESULT_SUCCESS, RESULT_IS_LOADING } from '../action-types'

const initialState = []
let originalData = []

const results = (state = initialState , action) => {
  switch (action.type) {
    case CLICK_STARS:
      return originalData.filter((item) => {
        if (!action.payload.stars) return true

        return item.stars == action.payload.stars
      })
      break
    case RESULT_SUCCESS:
      originalData = action.payload.data
      return action.payload.data
      break
    case RESULT_IS_LOADING:
      return state
      break
    default:
      return state
  }
}

export default results
