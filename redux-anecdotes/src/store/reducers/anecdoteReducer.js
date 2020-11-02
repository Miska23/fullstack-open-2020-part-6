import * as actionTypes from '../actions/actionTypes'


const asObject = (data) => {
  return {
    content: data.content,
    id: data.id,
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
  case actionTypes.INIT_ANECDOTES:
  {
    return action.data
  }
  case actionTypes.ADD_VOTE:
  {
    const anecdoteToChange = state.find(anecdote => anecdote.id === action.data.id)
    const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
    return state
      .map(anecdote => anecdote.id !== action.data.id ? anecdote : changedAnecdote)
  }
  case actionTypes.CREATE_ANECDOTE:
  {
    return state
      .concat(asObject(action.data))
  }
  default:
    return state
  }
}

export default anecdoteReducer