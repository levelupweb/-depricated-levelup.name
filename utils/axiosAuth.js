import axios from 'axios'
import config from '../app.config.js'

export function axiosAuth(token, options) {
	var authAxios = axios.create({
		baseURL: config.API,
		headers: {
			authorization: token
		}
	})

	return authAxios(options)
}

export function axiosNoAuth(options) {
	var noAuthAxios = axios.create({
		baseURL: config.API
	})

	return noAuthAxios(options)
}