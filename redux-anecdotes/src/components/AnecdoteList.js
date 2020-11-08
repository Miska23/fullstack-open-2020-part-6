import React from 'react'
import { connect } from 'react-redux'
import * as anecdoteActions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'
import Anecdote from './Anecdote'

const AnecdoteList = (props) => {

  const sortByVotes = (anecdotesInState) => {
    return anecdotesInState.sort((a, b) => b.votes - a.votes)
  }

  const anecdotes = () => {
    if (props.filter === 'ALL') {
      return sortByVotes(props.anecdotes)
    } else {
      const filtered = props.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(props.filter.toLowerCase())>-1)
      return sortByVotes(filtered)
    }
  }

  const vote = (anecdote) => {
    props.dispatch(anecdoteActions.addVote(anecdote))
    props.dispatch(notificationActions.setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes().map(anecdote => <Anecdote anecdote={anecdote} vote={vote} key={anecdote.id}/>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addVote: (id) => {
      dispatch(anecdoteActions.addVote(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)