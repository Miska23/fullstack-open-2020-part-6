import React from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {

  const dispatch = useDispatch()

  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteList dispatch={dispatch}/>
      <AnecdoteForm dispatch={dispatch}/>
    </>
  )
}

export default App