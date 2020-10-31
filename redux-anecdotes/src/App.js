import React from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

  const dispatch = useDispatch()

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter dispatch={dispatch}/>
      <Notification />
      <AnecdoteList dispatch={dispatch}/>
      <AnecdoteForm dispatch={dispatch}/>
    </>
  )
}

export default App