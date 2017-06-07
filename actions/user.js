import axios from 'axios'
import config from '../app.config.js'

// Old Version
/* export function setUser(token) {
    return (dispatch) => {
        axios({
	      url: config.API + 'user/auth',
	      method: 'GET',
	      headers: {
	        'authorization': token
	      }
	    }).then((res) => {
	    	if(token == 0) { 
	    		dispatch({type: 'LOGIN_FAILURE'})
	    	} else {
	    		if (res.data) {
	    			dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
	    		} else {
	    			dispatch({type: 'LOGIN_FAILURE'})
	    		}
	    	}
	    }) 
	}
} */

export function getUserByToken(token) {
	return (dispatch) => {
		if(token) { 
			axios({
				url: config.API + 'user/auth',
				method: 'GET',
				headers: {
					'authorization': token
				}
		    }).then((res) => {

		    	dispatch(setUser(res.data))
		    	return res.data
		    })
		} else {
			dispatch({type: 'LOGIN_FAILURE'})
			return false
		}
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

export async function getAllUsers() {
	return await axios.get(config.API + 'user/entries')	
}

export async function getUserById(id) {
	return await axios.get(config.API + 'user/entries/id/' + id)	
}

export async function updateUserById(id, data) {
	return await axios.post(config.API + 'user/entries/' + id + '/update', data)
}

export async function removeUserById(id) {
	return await axios.get(config.API + `user/entries/` + id + `/remove`)
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

export async function getUserField(id, field) {
	return await axios.get(config.API + `user/entries/` + id + `/field/` + field)
}

export async function registerUser(data) {
	return axios({
		url: config.API + 'user/add',
		method: 'POST',
		data: data,
    })
}

export async function getUserSubscriptions(userID) {
	return await axios.get(config.API + 'user/entries/' + userID + '/getsubscriptions')	
}

export async function addSocialToUser(token, id, data) {
	return axios({
		url: config.API + 'user/entries/' + id + '/addsocial',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
    })
}

export async function getUserLikesCount(userID) {
	return await axios.get(config.API + 'user/entries/' + userID + '/getlikecount')	
}

export async function getUserPostsCount(userID) {
	return await axios.get(config.API + 'user/entries/' + userID + '/getpostscount')	
}

export async function removeUserSocial(token, userid, data) {
	return axios({
		url: config.API + 'user/entries/' + userid + '/removesocial/',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
    })
}