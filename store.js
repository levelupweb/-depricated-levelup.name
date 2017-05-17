import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import promise from 'redux-promise'

export const initStore = (initialState) => {
  return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware)))
}