import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// Rules: 
// Models names: [action][instance] () {...}

export function createTag(token, tag) {
	return axiosAuth(token, {
		url: 'tag/entries/add',
		method: 'POST',
		data: tag
   })
}

export function getTag(id) {
	return axiosNoAuth({
		url: 'tag/entries/' + id,
		method: GET
	})
}

export function getTags(options) {
	return axiosNoAuth({
		url: 'tag/entries',
		method: 'GET',
		params: options
   })
}

export function getUserTags(userId, options) {
	return axiosNoAuth({
		url: 'tag/entries/' + userId + '/subscriptions',
		method: 'GET',
		params: options
   })
}

export function updateTag(token, id, tag) {
	return axiosAuth(token, {
		url: 'tag/entries/' + id + '/update',
		method: 'GET',
		data: tag
   })
}

export function removeTag(token, id) {
	return axiosAuth(token, {
		url: 'tag/entries/' + id + '/remove',
		method: 'GET'
   })
}

export function findTag(query) {   
   return axiosNoAuth({
      url: 'search/entries/tags',
      method: 'GET',
      params: { query: query }
   })
}
