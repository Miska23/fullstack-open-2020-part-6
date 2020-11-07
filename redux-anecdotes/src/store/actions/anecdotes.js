import * as actionTypes from './actionTypes'
import anecdoteService from '../../services/anecdotes'

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: actionTypes.INIT_ANECDOTES,
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: actionTypes.CREATE_ANECDOTE,
      data: anecdote
    })
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.addVote(anecdote)
    dispatch({
      type: actionTypes.ADD_VOTE,
      data: {
        id: updatedAnecdote.id
      }
    })
  }
}



