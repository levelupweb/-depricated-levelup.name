import axios from 'axios'
import config from '../app.config.js'

export default function(token, options) {
	var authAxios = axios.create({
		baseURL: config.API,
		headers: {
			authorization: token
		}
	})

	return authAxios(options)
}