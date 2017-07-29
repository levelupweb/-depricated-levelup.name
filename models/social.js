import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function getSocials(id) {
	return axiosAuth({
		url: 'social/entries/',
		method: 'GET',
		params: {
			findBy: 'owner',
			find: id
		}
  })
}

export function createSocial(token, social) {
	return axiosAuth(token, {
		url: 'social/entries/',
		method: 'POST',
		data: social
   })
}

export function removeSocial(token, id) {
	return axiosAuth(token, {
		url: 'social/entries/' + id,
		method: 'DELETE'
   })
}