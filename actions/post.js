import axios from 'axios'
import config from '../app.config.js'


export async function getPostsByUserId(id) {
	return await axios.get(config.API + 'user/' + id + '/posts')	
}