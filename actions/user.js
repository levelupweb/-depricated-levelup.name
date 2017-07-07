import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'
import cookies from 'js-cookie'

export function authenticateUser(token) {
	return (dispatch) => {
		if(token) { 
			axiosAuth(token, {
				url: 'user/auth',
				method: 'GET'
		    }).then((res) => {
		    	// Записываем пользователя в Store
		    	dispatch(setUser(res.data))
		    	// Возвращаем пользователя
		    	return res.data
		    })
		} else {
			// Записываем ошибку в Store
			dispatch({type: 'LOGIN_FAILURE'})
			return false
		}
	}
}

export function signIn(data) {
	return (dispatch) => {
	   return axiosNoAuth({
		   url: config.API + 'user/signin',
		   method: 'POST',
		   data: data
		}).then((res) => {
			if(res.data.success) {
				// Записываем пользователя
				dispatch(setUser(res.data.user))
			} 
			return res
		}).then((res) => {
			if(res.data.token && res.data.success) {
				// Записываем токен
				cookies.set(
					'x-access-token', 
					res.data.token, 
					{ expires: 7, path: '' }
				);
				// Возвращаем пользователя и сообщение
				return {
					success: true,
					message: res.data.message,
					user: res.data.user
				}
			} else {
				// Возвращаем ошибку
				return {
					success: false,
					message: res.data.message
				}
			}
		})
	}
}

export function signUp(data) {
	return (dispatch) => {
	   return axiosNoAuth({
		   url: config.API + 'user/signup',
		   method: 'POST',
		   data: data
		}).then((res) => {
			if(res.data.success) {
				return {
					success: true,
					message: res.data.message
				}
			} else {
				// Возвращаем ошибку
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
	return (dispatch) => {
		if (user) {
			dispatch({type: 'LOGIN_SUCCESS', payload: user})
		} else {
			dispatch({type: 'LOGIN_FAILURE'})
		}
	}
}

export function getLogout() {
	return (dispatch) => {
		dispatch({type: 'LOGOUT'})
	}
}

export function getAllUsers() {
	return axios.get(config.API + 'user/entries')	
}

export function getUserById(id) {
	return axios.get(config.API + 'user/entries/id/' + id)	
}

export function updateUserById(id, data) {
	return axios.post(config.API + 'user/entries/' + id + '/update', data)
}

export function removeUserById(id) {
	return axios.get(config.API + `user/entries/` + id + `/remove`)
}

export function subscribeToUser(token, id) {
	return axios({
		url: config.API + 'user/' + id + '/subscribe/author',
		method: 'GET',
		headers: {
			'authorization': token
		}
    })
}

export function getUserField(id, field) {
	return axios.get(config.API + `user/entries/` + id + `/field/` + field)
}

export function registerUser(data) {
	return axios({
		url: config.API + 'user/add',
		method: 'POST',
		data: data,
    })
}

export function getUserSubscriptions(userID) {
	return axios.get(config.API + 'user/entries/' + userID + '/getsubscriptions')	
}

export function addSocialToUser(token, id, data) {
	return axios({
		url: config.API + 'user/entries/' + id + '/addsocial',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
    })
}

export function getUserLikesCount(userID) {
	return axios.get(config.API + 'user/entries/' + userID + '/getlikecount')	
}

export function getUserPostsCount(userID) {
	return axios.get(config.API + 'user/entries/' + userID + '/getpostscount')	
}

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

export function uploadImage(token, userID, data) {
    return axiosAuth(token, {
		url: 'user/entries/' + userID + '/upload',
		method: 'POST',
		data: data
    })
}


export function getUserStats(userID) {
    return axiosNoAuth({
		url: 'user/entries/' + userID + '/getstats',
		method: 'GET'
    })
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

export function setUserFaces(user) {
	return (dispatch) => {
	   return axiosNoAuth({
			url: 'user/entries/' + user._id + '/getfaces',
			method: 'GET'
	   }).then((res) => {
	    	dispatch(setFaces(res.data.concat(user)))
	   })
	}
}

export function findUser(query) {   
    return axiosNoAuth({
      url: 'search/entries/users',
      method: 'GET',
      params: {
        query: query
      }
    })
}