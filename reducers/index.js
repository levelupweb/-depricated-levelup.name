import header from './header';
import usersingle from './usersingle'
import user from './user'
import { combineReducers } from 'redux'

const reducers = {
	header,
	usersingle,
	user
}

export default combineReducers(reducers)

