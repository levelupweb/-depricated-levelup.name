import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function createComment(token, data) {
	return axiosAuth(token, {
		url: 'comment/entries/',
		method: 'POST',
		data: data
   })
}

export function removeComment(token, id) {
	return axiosAuth(token, {
		url: 'comment/entries/' + id,
		method: 'DELETE'
   })
}

export function updateComment(token, comment) {
	return axiosAuth(token, {
		url: 'comment/entries/' + comment._id,
		method: 'PUT',
		data: comment
  })
}
