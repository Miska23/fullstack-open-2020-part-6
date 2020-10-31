import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import anecdoteReducer from './store/reducers/anecdoteReducer'
import notificationReducer from './store/reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

store.subscribe(() => console.log('Miska:', store.getState()))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)