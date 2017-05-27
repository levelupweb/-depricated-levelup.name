import axios from 'axios'
import config from '../app.config.js'


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