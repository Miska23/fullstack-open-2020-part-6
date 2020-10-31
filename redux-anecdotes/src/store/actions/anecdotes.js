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

