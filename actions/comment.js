import axios from 'axios'
import config from '../app.config.js'

export async function getPostCommentsByPostId(id) {
	return await axios.get(config.API + 'comment/entries/' + id)	
}

export async function getCommentById(id) {
	return await axios.get(config.API + 'comment/entries/' + id)	
}

export function postComment(token, data) {
	return axios({
		url: config.API + 'comment/entries/add',
		method: 'POST',
		data: data,
		headers: {
			'authorization': token
		}
    })
}
