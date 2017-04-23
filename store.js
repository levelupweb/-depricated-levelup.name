import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import * as actions from './actions'

export const initStore = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
}