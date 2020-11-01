import * as actionTypes from '../actions/actionTypes'

const initialState = 'ALL'

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_FILTER:
  {
    return action.value
  }
  case actionTypes.CLEAR_FILTER:
  {
    return initialState
  }
  default:
    return state
  }
}

export default filterReducer