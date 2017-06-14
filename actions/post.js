import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function getPosts(token, options) {
	return axiosAuth(token, {
		url: 'post/entries',
		method: 'POST',
		data: options
    })
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

