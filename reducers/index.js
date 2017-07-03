import currentUser from './currentUser.js'
import app from './app.js'
import postState from './postState.js'
import userFaces from './userFaces.js'
import { combineReducers } from 'redux'

const reducers = {
	app,
	currentUser,
	postState,
	userFaces	
}

export default combineReducers(reducers)

