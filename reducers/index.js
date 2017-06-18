import header from './header';
import usersingle from './usersingle'
import user from './user'
import app from './app'
import postState from './post'
import editingPost from './editingPost'
import { combineReducers } from 'redux'

const reducers = {
	app,
	header,
	usersingle,
	user,
	postState,
	editingPost
}

export default combineReducers(reducers)

