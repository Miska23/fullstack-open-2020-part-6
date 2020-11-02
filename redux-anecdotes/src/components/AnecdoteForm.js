import React from 'react'
import * as actions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'
import AnecdoteService from '../services/anecdotes'

const AnecdoteForm = ({ dispatch }) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await AnecdoteService.createNew(content)
    console.log('Miska 1 / newAnecdote = ', newAnecdote)
    dispatch(actions.createAnecdote(newAnecdote))
    dispatch(notificationActions.setNotification(`You added anecdote: "${newAnecdote.content}"`))
    setTimeout(() => {
      dispatch(notificationActions.clearNotification())
    }, 5000)
  }

  return  (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote"/>
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm