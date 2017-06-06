import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import Router from './router'

const store = createStore(reducers);

const Store = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default Store;