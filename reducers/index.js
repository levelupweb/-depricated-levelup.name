import header from './header';
import usersingle from './usersingle'
import user from './user'
import app from './app'
import { combineReducers } from 'redux'

const reducers = {
	app,
	header,
	usersingle,
	user
}

export default combineReducers(reducers)

