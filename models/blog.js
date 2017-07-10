import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function createBlog(token, data) {
	return axiosAuth(token, {
		url: 'blog/entries/add',
		method: 'POST',
		data: data
    })
}

// TODO: params for request
export function getBlogs() {
	return axiosNoAuth({
		url: 'blog/entries',
		method: 'POST'
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

// TODO: remove to user model/action
export function getUserSubscriptions(blogID) {
	return axiosNoAuth({
		url: 'blog/entries/' + blogID + '/getsubscriptions',
		method: 'GET'
    })
}

export function getBlog(id) {
	return axiosNoAuth({
		url: 'blog/entries/' + id + '/byid',
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