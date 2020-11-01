import * as actionTypes from './actionTypes'

export const setFilter = (value) => {
  return {
    type: actionTypes.SET_FILTER,
    value
  }
}
export const clearFilter = () => {
  return {
    type: actionTypes.CLEAR_FILTER,
  }
}