import React from 'react'
import { useSelector } from 'react-redux'
import * as actions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'
import Anecdote from './Anecdote'

const AnecdoteList = ({ dispatch }) => {

  const sortByVotes = (anecdotesInState) => {
    return anecdotesInState.sort((a, b) => b.votes - a.votes)
  }

  const anecdotes = useSelector(state => sortByVotes(state.anecdotes))

  const vote = (anecdote) => {
    dispatch(actions.addVote(anecdote.id))
    dispatch(notificationActions.setNotification(`You voted: "${anecdote.content}"`))
    setTimeout(() => {
      dispatch(notificationActions.clearNotification())
    }, 5000)

  }

  return (
    <div>
      {anecdotes.map(anecdote => <Anecdote anecdote={anecdote} vote={vote} key={anecdote.id}/>)}
    </div>
  )
}

export default AnecdoteList