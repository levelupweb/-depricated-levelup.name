import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function getPostCommentsByPostId(id) {
	return axios.get(config.API + 'comment/entries/' + id)	
}

export function getCommentById(id) {
	return axios.get(config.API + 'comment/entries/' + id)	
}

export function addComment(token, data) {
	return axiosAuth(token, {
		url: 'comment/entries/add',
		method: 'POST',
		data: data
    })
}
