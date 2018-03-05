import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Map as map } from 'immutable'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index'

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer)
