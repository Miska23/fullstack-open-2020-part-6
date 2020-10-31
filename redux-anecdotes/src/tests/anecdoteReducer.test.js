import deepFreeze from 'deep-freeze'
import anecdoteReducer, { initialState } from '../store/reducers/anecdoteReducer'
import * as actionTypes from '../store/actions/actionTypes'

describe('anecdoteReducer', () => {


  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    deepFreeze(state)
    const newState = anecdoteReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('a vote is added', () => {

    const id = initialState[0].id

    const addVote = (id) => {
      return {
        type: actionTypes.ADD_VOTE,
        data: {
          id
        }
      }
    }

    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, addVote(id))
    expect(newState[0].votes).toEqual(initialState[0].votes + 1)
  })
})