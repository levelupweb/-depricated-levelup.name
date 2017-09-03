import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'
import cookies from 'js-cookie'

// actions
import { handleWarn, handleError, handleSuccess } from './app.js'

// models
import * as MODEL from '../models/user.js'

export function signIn(user) {
	return (dispatch) => {
		const authData = {
			login: user.authLogin,
			password: user.authPassword
		}
	  return MODEL.signIn(authData).then((response) => {
			if(response.data.success) {
				dispatch(authenticateUserSuccess(response.data.user))
			} 
			return response
		}).then((response) => {
			const { token, success, message, errors, user } = response.data
			if(token && success) {
				const cookiesOptions = { 
					expires: 7,
					path: '' 
				}
				cookies.set('x-access-token', token, cookiesOptions);
				return {
					user,
					success: true,
					message: {
						title: 'Готово',
						message
					}
				}
			} else {
				return {
					success: false,
					message: {
						title: 'Ошибка',
						description: message
					}
				}
			}
		})
	}
}

export function signUp(user) {
	return (dispatch) => {
	   return MODEL.signUp(user).then((response) => {
	   	const { success, message, errors } = response.data
			if(success) {
				return {
					success: true,
					message: {
						title: 'Готово!',
						description: message
					}
				}
			} else {
				return {
					success: false,
					message: {
						title: 'Ошибка',
						description: message
					},
					errors: errors
				}
			}
		})
	}
}

export function authenticateUser(token) {
	return dispatch => {
		if(token) { 
			return MODEL.authenticateUser(token).then((response) => {
	    	dispatch(authenticateUserSuccess(response.data.user))
	    	return response.data.user
	    })
		} else {
			dispatch({type: 'LOGIN_FAILURE'})
			return Promise.resolve(false)
		}
	}
}

export function authenticateUserSuccess(user) {
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

export function getUserByToken(token) {
	return MODEL.getUserByToken(token)
}

export function getUserPosts(id, limit, skip) {
	return MODEL.getUserPosts(id, limit, skip)
}

export function getUserSubscriptions(id, limit, skip) {
	return MODEL.getUserSubscriptions(id, limit, skip)
}

export function getUserCampaigns(id, limit, skip) {
	return MODEL.getUserCampaigns(id, limit, skip)
}

export function updateUser(token, id, user) {
	return MODEL.updateUser(token, id, user)
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
	return {
		type: 'SET_FACES', 
		payload: faces
	}
}

export function setFace(face) {
	return (dispatch) => {
		const { _id, author } = face
		return Promise.all([
			dispatch({
				type: 'SET_FACE', 
				payload: face
			}),
			dispatch({
				type: 'SET_POST_FIELD', 
				payload: {
					field: 'author', 
					value: {
						[author]: _id,
					}
				}
			})
		])
	}
}

export function setUserFaces(user) {
	return (dispatch) => {
		const { _id } = user;
	  return MODEL.getFaces(_id).then((response) => {
	    dispatch(setFaces(
	    	[...response.data, user]
	    ))
	  })
	}
}

export function findUser(query) {   
	return MODEL.findUser(query)
}

// DEPRICATED
export function getSubscriptions(id, type) {
	return MODEL.getSubscriptions(id, type)
}

// DEPRICATED
export function addSocial(token, id, social) {
	return MODEL.addSocial(token, id, social)
}

// DEPRICATED
export function removeSocial(token, id, social) {
	return MODEL.removeSocial(token, id, social)
}