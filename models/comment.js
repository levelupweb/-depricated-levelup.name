import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function createComment(token, data) {
	return axiosAuth(token, {
		url: 'comment/entries/add',
		method: 'POST',
		data: data
   })
}

export function getComment(id) {
	return axiosNoAuth({
		url: 'comment/entries/' + id,
		method: 'GET'
   })
}

export function removeComment(token, id) {
	return axiosAuth(token, {
		url: 'comment/entries/' + id + '/remove',
		method: 'GET'
   })
}

export function updateComment(token, comment) {
	return axiosAuth(token, {
		url: 'comment/entries/' + comment._id + '/update',
		method: 'POST',
		data: comment
    })
}
