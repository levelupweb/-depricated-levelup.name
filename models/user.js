import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function authenticateUser(token) {
	return axiosAuth(token, {
		url: 'user/auth',
		method: 'GET'
   })
}

export function signIn(user) {
	return axiosNoAuth({
	   url: 'user/signin',
	   method: 'POST',
	   data: user
	})
}

export function signUp(user) {
	return axiosNoAuth({
	   url: 'user/signup',
	   method: 'POST',
	   data: user
	})
}

export function getUsers() {
	return axiosNoAuth({
		url: 'user/entries',
		method: 'GET'
	})
}

export function getUser(id) {
	return axiosNoAuth({
		url: 'user/entries/id/' + id,
		method: 'GET'
	})
}

export function updateUser(token, id, post) {
	return axiosAuth(token, {
		url: 'user/entries' + id + '/update',
		method: 'POST',
		data: post
	})
}

export function removeUser(token, id) {
	return axiosAuth(token, {
		url: 'user/entries' + id + '/remove',
		method: 'GET'
	})
}

export function createUser(token, user) {
	return axiosAuth(token, {
		url: 'user/add',
		method: 'POST',
		data: user
	})
}

export function getUserSubscriptions(id) {
	return axiosNoAuth({
		url: 'user/entries/' + id + '/getsubscriptions',
		method: 'GET'
	})
}

export function getUserStats(id) {
   return axiosNoAuth({
		url: 'user/entries/' + id + '/getstats',
		method: 'GET'
   })
}

export function findUser(query) {   
    return axiosNoAuth({
      url: 'search/entries/users',
      method: 'GET',
      params: {
        query: query
      }
    })
}

// DEPRICATED
export function getFaces(id) {
   return axiosNoAuth({
		url: 'user/entries/' + id + '/getfaces',
		method: 'GET'
   })
}

// DEPRICATED
export function addSocial(token, id, social) {
	return axiosAuth(token, {
		url: 'user/entries/' + id + '/addsocial',
		method: 'POST',
		data: social
	})
}

// DEPRICATED
export function removeSocial(token, id, social) {
	return axiosAuth(token, {
		url: 'user/entries/' + userid + '/removesocial/',
		method: 'POST',
		data: social
	})
}



