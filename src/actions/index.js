import { CLICK_STARS, RESULT_SUCCESS, RESULT_IS_LOADING, UPDATE_RESULT, UPDATE_FILTERS } from '../action-types'
import { URL_API_HOTELS } from '../config'

export function drawStars() {
  return {
    type: DRAW_STARS,
    payload: {
    }
  }
}

export function resultIsLoading(bool) {
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

export function getResults() {
  return (dispatch) => {
    dispatch(resultIsLoading(true))

    fetch(URL_API_HOTELS)
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

export function updateResults(data) {
  return {
    type: UPDATE_RESULT,
    payload: {
      filters: data
    }
  }
}

export function updateFilters(data) {
  return {
    type: UPDATE_FILTERS,
    payload: {
      filters: data
    }
  }
}
