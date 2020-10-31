import * as actionTypes from '../actions/actionTypes'

export const initialState = {
  content: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_NOTIFICATION:
  {
    return { ...state, content: action.data.content }
  }
  case actionTypes.CLEAR_NOTIFICATION:
  {
    return { ...state, content: '' }
  }
  default:
    return state
  }
}

export default notificationReducer