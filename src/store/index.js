// @flow

import { createStore } from 'redux'
import screenReducer from './reducers/screenReducer'

export const store = createStore(
  screenReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)