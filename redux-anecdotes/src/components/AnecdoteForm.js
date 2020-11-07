import React from 'react'
import { connect } from 'react-redux'
import * as anecdoteActions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.dispatch(notificationActions.setNotification(`You added anecdote: "${content}"`, 5))
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

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: (content) => {
      dispatch(anecdoteActions.createAnecdote(content))
    }
  }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)