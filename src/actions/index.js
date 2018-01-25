import { CLICK_STARS } from '../action-types'

export function clickStars (stars) {
  return {
    type: CLICK_STARS,
    payload: {
    stars}
  }
}
