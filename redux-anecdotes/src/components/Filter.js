import React from 'react'
import * as actions from '../store/actions/anecdotes'

const Filter = ({ dispatch }) => {

  const handleChange = (event) => {
    if (event.target.value.length === 0) {
      dispatch(actions.clearFilter())
    } else {
      dispatch(actions.setFilter(event.target.value))
    }
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter