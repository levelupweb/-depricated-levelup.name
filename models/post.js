import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// Rules: 
// Models names: [action][instance] () {...}

export function removePost(token, id) {
	return axiosAuth(token, {
		url: 'post/entries/' + id + '/remove',
		method: 'GET'
   })
}

export function addPost(token, data) {
	return axiosAuth(token, {
		url: 'post/add',
		method: 'POST',
		data: data
   })
}

export function fetchPosts(options, skip) {
	return axiosNoAuth({
		url: 'post/entries',
		method: 'GET',
		params: {
			skip: skip,
			limit: options.perPage,
			...options
		}
   })
}

export function findPost(query) {
	return axiosNoAuth({
      url: 'search/entries/posts',
      method: 'GET',
      params: {
        query: query
      }
   })
}

export function getUserPosts(id) {
	return axiosNoAuth({
      url: 'user/' + id + '/posts',
      method: 'GET'
   })
}

export function setLike(token, id) {
    return axiosAuth(token, {
		url: 'post/entries/' + id + '/like',
		method: 'GET'
    })
}

export function updatePost(token, id, post) {
   return axiosAuth(token, {
		url: 'post/entries/' + id + '/update',
		method: 'POST',
		data: post
   })
}