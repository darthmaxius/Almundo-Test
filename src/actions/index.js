import { CLICK_STARS, DRAW_STARS } from '../action-types'

export function clickStars (stars) {
  return {
    type: CLICK_STARS,
    payload: {
    stars}
  }
}

export function drawResult () {
  return {
    type: DRAW_STARS,
    payload: {
    }
  }
}
