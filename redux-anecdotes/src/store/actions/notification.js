import * as actionTypes from './actionTypes'

export const setNotification = (content, delay) => {
  return async dispatch => {
    let timer
    if (timer) {
      clearInterval(timer)
    }

    dispatch({
      type: actionTypes.SET_NOTIFICATION,
      data: {
        content,
      }
    })
    timer = setTimeout(() => {
      dispatch({
        type: actionTypes.SET_NOTIFICATION,
        data: {
          content: null,
        }
      })
    }, delay * 1000)

  }
}
