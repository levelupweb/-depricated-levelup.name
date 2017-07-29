import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// Rules: 
// Models names: [action][instance] () {...}

export function createPost(token, post) {
	return axiosAuth(token, {
		url: 'post/entries',
		method: 'POST',
		data: post
   })
}

export function removePost(token, id) {
	return axiosAuth(token, {
		url: 'post/entries/' + id + '/remove',
		method: 'GET'
   })
}


export function getRandomAdv(id) {
	return axiosNoAuth({
		url: 'post/entries/' + id + '/adv',
		method: 'GET'
   })
}

export function fetchPosts(options, skip) {
	return axiosNoAuth({
		url: 'post/entries',
		method: 'GET',
		params: {
			skip: skip,
			limit: options.perPage || 10,
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