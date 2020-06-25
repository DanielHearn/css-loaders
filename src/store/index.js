import { createStore } from 'redux'
import mobileReducer from './reducers/mobileReducer'

export const store = createStore(mobileReducer)