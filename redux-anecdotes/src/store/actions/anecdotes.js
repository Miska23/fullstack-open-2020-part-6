import * as actionTypes from './actionTypes'

export const addVote = (id) => {
  return {
    type: actionTypes.ADD_VOTE,
    data: {
      id
    }
  }
}

export const createAnecdote = (content) => {
  return {
    type: actionTypes.CREATE_ANECDOTE,
    data: {
      content
    }
  }
}

export const setFilter = (value) => {
  return {
    type: actionTypes.SET_FILTER,
    data: {
      value
    }
  }
}
export const clearFilter = () => {
  return {
    type: actionTypes.CLEAR_FILTER,
  }
}

