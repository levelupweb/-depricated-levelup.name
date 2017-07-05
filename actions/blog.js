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

export function getUserBlog(userID) {
	return axiosNoAuth({
		url: 'user/entries/' + userID + '/getblog',
		method: 'GET'
    })
}

export function getBlogStats(blogID) {
	return axiosNoAuth({
		url: 'blog/entries/' + blogID + '/getstats',
		method: 'GET'
    })
}

export function getUserSubscriptions(blogID) {
	return axiosNoAuth({
		url: 'blog/entries/' + blogID + '/getsubscriptions',
		method: 'GET'
    })
}

export function getBlogById(blogID) {
	return axiosNoAuth({
		url: 'blog/entries/' + blogID + '/byid',
		method: 'GET'
    })
}

export function findBlog(query) {   
    return axiosNoAuth({
      url: 'search/entries/blogs',
      method: 'GET',
      params: {
        query: query
      }
    })
}