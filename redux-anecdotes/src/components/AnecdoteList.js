import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as actions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'
import Anecdote from './Anecdote'

const AnecdoteList = ({ dispatch }) => {

  useEffect(() => {
    dispatch(actions.initAnecdotes())
  }, [dispatch])

  const sortByVotes = (anecdotesInState) => {
    return anecdotesInState.sort((a, b) => b.votes - a.votes)
  }

  const anecdotes = useSelector(state => {
    if (state.filter === 'ALL') {
      return sortByVotes(state.anecdotes)
    } else {
      //* palautetaan taulukko siten että käydään läpi jokaisen olion content-kentässä oleva string siten että
      //* etsitään stringistä indeksiä jossa on filterin arvona oleva string. Jos mitään ei löydy, palautetaan -1,
      //* mutta tämän varalta etsinnän tulosta verrataan kyseiseen lukuun, jolloin uuteen taulukkoon ei tule mitään
      //* jos missään content-kentässä ei ole osumia (?)
      const filtered = state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(state.filter.toLowerCase())>-1)
      return sortByVotes(filtered)
    }

  })

  const vote = (anecdote) => {
    dispatch(actions.addVote(anecdote))
    dispatch(notificationActions.setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes.map(anecdote => <Anecdote anecdote={anecdote} vote={vote} key={anecdote.id}/>)}
    </div>
  )
}

export default AnecdoteList