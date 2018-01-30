import { CLICK_STARS, DRAW_STARS } from '../action-types'

export function clickStars (stars) {
  return {
    type: CLICK_STARS,
    payload: {
    stars}
  }
}

export function drawStars () {
  return {
    type: DRAW_STARS,
    payload: {
    }
  }
}

export function drawResults () {
  return (dispatch) => {
    fetch('//localhost:3000')
      .then(r => r.json())
      .then(data => dispatch(data))
      .catch(e => console.error('Something went wrong'))
  }
}
