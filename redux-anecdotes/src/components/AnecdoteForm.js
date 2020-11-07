import React from 'react'
import * as actions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'

const AnecdoteForm = ({ dispatch }) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(actions.createAnecdote(content))
    dispatch(notificationActions.setNotification(`You added anecdote: "${content}"`, 5))
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