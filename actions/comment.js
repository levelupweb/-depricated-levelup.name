import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function getPostComments(id) {
	return axios.get(config.API + 'comment/entries/' + id)	
}

export function getCommentById(id) {
	return axios.get(config.API + 'comment/entries/' + id)	
}

export function removeComment(token, id) {
	return axiosAuth(token, {
		url: 'comment/entries/' + id + '/remove',
		method: 'GET'
    })
}

export function updateComment(token, comment) {
	return axiosAuth(token, {
		url: 'comment/entries/' + comment._id + '/update',
		method: 'POST',
		data: comment
    })
}

export function addComment(token, data) {
	return axiosAuth(token, {
		url: 'comment/entries/add',
		method: 'POST',
		data: data
    })
}
