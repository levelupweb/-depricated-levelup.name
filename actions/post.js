import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function getPosts(token, options) {
	if(typeof token == 'string') {
		return axiosAuth(token, {
			url: 'post/entries',
			method: 'POST',
			data: arguments[1]
	    })
	} else {
		return axiosNoAuth({
			url: 'post/entries',
			method: 'POST',
			data: arguments[0]
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


export function postAdd(token, data) {
    return axiosAuth(token, {
		url: 'post/add',
		method: 'POST',
		data: data
    })
}

export function changePostFace(type, item) {
	return (dispatch) => {
		var payload = {};
		if(type == 'user') { payload['image'] = item.userImage; payload['title'] = item.userName
		} else { payload['image'] = item.blogImage; payload['title'] = item.blogTitle }
		dispatch({type: 'SET_POST_FACE', payload: payload})
		dispatch({type: 'SET_POST_AUTHOR', payload: {type: type, id: item._id}})
	}
}

export function setPostAuthor(type, id) {
	return (dispatch) => {
		dispatch({type: 'SET_POST_AUTHOR', payload: {type: type, id: item._id}})
	}
}

export function savePostLocally(post) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'SET_POST', payload: post});
			resolve()
		})
	}
}

export function setPostFaces(faces) {
	return (dispatch) => {
		dispatch({type: 'SET_POST_FACES', payload: faces});
	}
}

export function flushPost() {
	return (dispatch) => {
		dispatch({type: 'FLUSH_POST'})
	}
}

// Добавить токен!!
export function removePostById(id) {
	return axiosNoAuth({
		url: 'post/entries/' + id + '/remove',
		method: 'GET'
    })
}
