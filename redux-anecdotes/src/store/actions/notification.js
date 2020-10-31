import * as actionTypes from './actionTypes'

export const setNotification = (content) => {
  return {
    type: actionTypes.SET_NOTIFICATION,
    data: {
      content,
    }
  }
}

export const clearNotification = () => {
  return {
    type: actionTypes.CLEAR_NOTIFICATION,
  }
}