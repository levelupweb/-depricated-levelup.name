import currentUser from './currentUser.js'
import app from './app.js'
import postState from './postState.js'
import userFaces from './userFaces.js'
import postsStorage from './postsStorage.js'
import message from './message.js'
import { combineReducers } from 'redux'

const reducers = {
	app,
	currentUser,
	postState,
	userFaces,
	postsStorage,
	message
}

export default combineReducers(reducers)

