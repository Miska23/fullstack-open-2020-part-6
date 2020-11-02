import * as actionTypes from './actionTypes'

export const addVote = (id) => {
  return {
    type: actionTypes.ADD_VOTE,
    data: {
      id
    }
  }
}

export const createAnecdote = (data) => {
  return {
    type: actionTypes.CREATE_ANECDOTE,
    data
  }
}

export const initAnecdotes = (data) => {
  return {
    type: actionTypes.INIT_ANECDOTES,
    data
  }
}


