import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function createBlog(token, data) {
	return axiosAuth(token, {
		url: 'blog/entries/add',
		method: 'POST',
		data: data
    })
}

export function getAllBlogs(token) {
	return axiosAuth(token, {
		url: 'blog/entries',
		method: 'POST',
		data: {
			skip: 0,
			perPage: 1000
		}
    })
}