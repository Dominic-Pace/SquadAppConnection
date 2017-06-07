import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Router from './router'


const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Store = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default Store;