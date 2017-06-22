import currentUser from './currentUser'
import app from './app'
import postState from './post'
import editingPost from './editingPost'
import { combineReducers } from 'redux'

const reducers = {
	app,
	currentUser,
	postState,
	editingPost
}

export default combineReducers(reducers)

