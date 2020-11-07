import React from 'react'
import { connect } from 'react-redux'
import * as filterActions from '../store/actions/filter'

const Filter = (props) => {

  const handleChange = (event) => {
    if (event.target.value.length === 0) {
      props.clearFilter()
    } else {
      props.setFilter(event.target.value)
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

const mapDispatchToProps = (dispatch) => {
  return {
    clearFilter: () => {
      dispatch(filterActions.clearFilter())
    },
    setFilter: (value) => {
      dispatch(filterActions.setFilter(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)