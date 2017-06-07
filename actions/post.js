import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import axiosAuth from '../utils/axiosAuth.js'

export function getPosts(token, options) {
	return axiosAuth(token, {
		url: 'post/entries',
		method: 'POST',
		data: options
    })
}

export async function getPostsByUserId(id) {
	return await axios.get(config.API + 'user/' + id + '/posts')	
}

export async function setLikeById(token, id) {
	return await axios({
		url: config.API + 'post/entries/' + id + '/like',
		method: 'GET',
		headers: {
			'authorization': token
		}
    })
}