import { DRAW_STARS } from '../action-types'

const initialState = [0, 3, 4, 5]

const filter = (state = initialState , action) => {
  switch (action.type) {
    case DRAW_STARS:
      return initialState
      break
    default:
      return state
  }
}

export default filter
