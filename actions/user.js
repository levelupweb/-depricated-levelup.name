import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'
import cookies from 'js-cookie'

// actions
import { handleWarn, handleError, handleSuccess } from './app.js'

// models
import * as MODEL from '../models/user.js'

export function authenticateUser(token) {
	return (dispatch) => {
		if(token) { 
			return MODEL.authenticateUser(token).then((res) => {
		    	dispatch(setUser(res.data))
		    	return res.data
		    })
		} else {
			dispatch({type: 'LOGIN_FAILURE'})
			return false
		}
	}
}

export function signIn(user) {
	return (dispatch) => {
	   return MODEL.signIn(user).then((res) => {
			if(res.data.success) {
				dispatch(setUser(res.data.user))
			} 
			return res
		}).then((res) => {
			if(res.data.token && res.data.success) {
				cookies.set(
					'x-access-token', 
					res.data.token, 
					{ expires: 7, path: '' }
				);
				dispatch(handleSuccess(
					'Привет, ' + res.data.user.userName, true
				));
				return {
					success: true,
					message: res.data.message,
					user: res.data.user
				}
			} else {
				return {
					success: false,
					message: res.data.message
				}
			}
		})
	}
}

export function signUp(user) {
	return (dispatch) => {
	   return MODEL.signUp(user).then((res) => {
			if(res.data.success) {
				return {
					success: true,
					message: res.data.message
				}
			} else {
				return {
					success: false,
					message: res.data.message,
					errors: res.data.errors
				}
			}
		})
	}
}


export function setUser(user) {
	if (user) {
		return {
			type: 'LOGIN_SUCCESS', 
			payload: user
		}
	} else {
		return {
			type: 'LOGIN_FAILURE'
		}
	}
	
}

export function getLogout() {
	return (dispatch) => {
		dispatch({
			type: 'LOGOUT'
		})
	}
}

export function getUsers() {
	return MODEL.getUsers()
}

export function getUser(id) {
	return MODEL.getUser(id)
}

export function updateUser(id, user) {
	return MODEL.updateUser(id, user)
}

export function removeUser(token, id) {
	return MODEL.removeUser(token, id)
}

export function createUser(token, user) {
	return MODEL.createUser(token, user)
}

export function getUserStats(id) {
   return MODEL.getUserStats(id)
}

// Faces Reducer
function setFaces(faces) {
	return (dispatch) => {
		dispatch({type: 'SET_FACES', payload: faces});
	}
}

export function setFace(face) {
	return (dispatch) => {
		return Promise.all([
			dispatch({type: 'SET_FACE', payload: face}),
			dispatch({type: 'SET_POST_FIELD', payload: {field: 'postAuthor', value: {
				authorID: face._id,
				authorType: face.type
			}}})
		])
	}
}

// DEPRICATED
export function setUserFaces(user) {
	return (dispatch) => {
	   return MODEL.getFaces(user._id).then((res) => {
	    	dispatch(setFaces(res.data.concat(user)))
	   })
	}
}

export function findUser(query) {   
	return MODEL.findUser(query)
}

// DEPRICATED
export function getUserSubscriptions(id) {
	return MODEL.getUserSubscriptions(id)
}

// DEPRICATED
export function addSocial(token, id, social) {
	return MODEL.addSocial(token, id, social)
}

// DEPRICATED
export function removeUserSocial(token, userid, data) {
	return axios({
		url: config.API + 'user/entries/' + userid + '/removesocial/',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
    })
}