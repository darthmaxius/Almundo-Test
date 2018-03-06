import { RESULT_SUCCESS, RESULT_IS_LOADING, UPDATE_RESULT } from '../action-types'

const initialState = []
let originalData

const results = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULT:
      let filteredResults = []

      filteredResults = originalData.filter((item) => {
        let finded = false

        if (!action.payload.filters.stars.length) {
          finded = true
        } else {
          action.payload.filters.stars.forEach((stars, key) => {
            if (!finded && stars == item.stars) finded = true
          })
        }

        if (finded && (action.payload.filters.name == "" || item.name.toLowerCase().indexOf(action.payload.filters.name.toLowerCase()) > -1)) {
          finded = true
        } else {
          finded = false
        }

        return finded
      })



      return filteredResults
      break

    case RESULT_SUCCESS:
      originalData = action.payload.data
      return originalData
      break

    default:
      return state
  }
}

export default results
