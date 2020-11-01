import React from 'react'
import { useSelector } from 'react-redux'
import * as actions from '../store/actions/anecdotes'
import * as notificationActions from '../store/actions/notification'
import Anecdote from './Anecdote'

const AnecdoteList = ({ dispatch }) => {

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