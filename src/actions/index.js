import { CLICK_STARS, RESULT_SUCCESS, RESULT_IS_LOADING } from '../action-types'

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

export function resultIsLoading (bool) {
  return {
    type: RESULT_IS_LOADING,
    isLoading: bool
  }
}

const resultSuccess = (data) => {
  return {
    type: RESULT_SUCCESS,
    payload: {
      data: data
    }
  }
}

export function getResults () {
  return (dispatch) => {
    dispatch(resultIsLoading(true))

    fetch('//localhost:3000')
      .then(r => {
        if (!r.ok) {
          throw Error(r.statusText)
        }

        dispatch(resultIsLoading(false))

        return r
      })
      .then(r => r.json())
      .then(data => {
        return dispatch(resultSuccess(data))
      })
      .catch(e => console.error('Something went wrong'))
  }
}
