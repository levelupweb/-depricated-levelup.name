import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'
import randomString from '../utils/randomString.js'

export function getPosts(page, options, token) {
	var params = options;
	if(!params.perPage) { params.perPage = 10 }
	params.skip = (page - 1) * params.perPage

	if(!params.personal) {
		if(!token) {
			return axiosNoAuth({
				url: 'post/entries',
				method: 'GET',
				params: params
		   })
		} else {
			return axiosAuth(token, {
				url: 'post/entries',
				method: 'GET',
				params: params
		   })
		}
	} else {
		return axiosAuth(token, {
			url: 'post/entries/personal',
			method: 'GET',
			params: params
	   })
	}
}

export function getPostsByUserId(id) {
	return axios.get(config.API + 'user/' + id + '/posts')	
}

export function getUsersWhoLikes(postID) {
	return axiosNoAuth({
		url: 'post/entries/' + postID + '/wholikes',
		method: 'GET'
    })
}

export function setLikeById(token, id) {
    return axiosAuth(token, {
		url: 'post/entries/' + id + '/like',
		method: 'GET'
    })
}

// Rename to addPost
export function postAdd(token, data) {
   return (dispatch) => {
   	return axiosAuth(token, {
			url: 'post/add',
			method: 'POST',
			data: data
	    })
   }
}

// Rename to updatePost
export function postUpdate(token, postID, postData) {
    return axiosAuth(token, {
		url: 'post/entries/' + postID + '/update',
		method: 'POST',
		data: postData
    })
}

export function setPostFaces(faces) {
	return (dispatch) => {
		dispatch({type: 'SET_NOTE_FACES', payload: faces});
	}
}

export function flushPost() {
	return (dispatch) => {
		dispatch({type: 'FLUSH_POST'})
	}
}

// PostState Reducer

export function setPostField(field, value) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'SET_POST_FIELD', payload: {field, value}})
			resolve()
		})
	}
}

export function setPost(post) {
	return (dispatch) => {
		dispatch({type: 'SET_POST', payload: post})
	}
}

export function prepareNewPost(user, type) {
	return (dispatch) => {
	   return Promise.all([
	   	dispatch(setPostField('postType', type)),
        	dispatch(setPostField('postStatus', 'draft'))
      ])
	}
}

export function createPost(token, post) {
	return (dispatch) => {
		if(post.postTitle == null) {
			post.postTitle = 'Безымянный';
		}
		axiosAuth(token, {
			url: 'post/add',
			method: 'POST',
			data: post
	   }).then((res) => {
	   	dispatch(setPost(res.data.post))
	   }).then(() => {
	   	dispatch(displayStatus('Сохранено в черновиках'))
	   })
	}
}

export function savePost(token, post, message) {
	var status = message ? message : 'Сохранено';
	return (dispatch) => {
		console.log(post)
		return axiosAuth(token, {
			url: 'post/entries/' + post._id + '/update',
			method: 'POST',
			data: post
	   }).then((res) => {
	   	if(res.data.success) {
	   		dispatch(setPost(post))
	   	} else {
	   		// Handle Error
	   		console.log(res.data)
	   	}
	   	return res.data
	   }).then(() => {
	   	dispatch(displayStatus(status))
	   })
	}
}

export function pushTag(tag) {
	return (dispatch) => {
		if(tag.length > 0) {
			dispatch({type: 'POST_PUSH_TAG', payload: tag})
		}
	}
}

export function pullTag(tag) {
	return (dispatch) => {
		dispatch({type: 'POST_PULL_TAG', payload: tag})
	}
}

// Status lifecycle 

export function displayStatus(value) {
	return async (dispatch) => {
		await dispatch(setStatus(value))
	   await setTimeout(() => {
        dispatch(setStatus(null))
      }, 3000)
	}
}

function setStatus(value) {
   return {
   	type: 'SET_POST_STATUS', 
   	payload: value
   }
}



// Добавить токен!!
export function removePostById(id) {
	return axiosNoAuth({
		url: 'post/entries/' + id + '/remove',
		method: 'GET'
    })
}


export function findPost(query) {   
    return axiosNoAuth({
      url: 'search/entries/posts',
      method: 'GET',
      params: {
        query: query
      }
    })
}