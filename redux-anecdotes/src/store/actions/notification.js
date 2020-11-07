import * as actionTypes from './actionTypes'

export const setNotification = (content, delay) => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_NOTIFICATION,
      data: {
        content,
      }
    })
    setTimeout(() => {
      dispatch({
        type: actionTypes.SET_NOTIFICATION,
        data: {
          content: null,
        }
      })
    }, delay * 1000)
  }
}
