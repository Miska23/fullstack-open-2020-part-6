import React from 'react'
import { useSelector } from 'react-redux'
import * as actions from '../store/actions/anecdotes'
import Anecdote from './Anecdote'

const AnecdoteList = ({ dispatch }) => {

  const sortByVotes = (anecdotesInState) => {
    return anecdotesInState.sort((a, b) => b.votes - a.votes)
  }

  const anecdotes = useSelector(state => sortByVotes(state))

  const vote = (id) => {
    dispatch(actions.addVote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote => <Anecdote anecdote={anecdote} vote={vote} key={anecdote.id}/>)}
    </div>
  )
}

export default AnecdoteList