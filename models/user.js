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

export function getUserByToken(token) {
	return axiosAuth(token, {
		url: 'user/me',
		method: 'GET'
	})
}


export function updateUser(token, id, user) {
	return axiosAuth(token, {
		url: 'user/entries/' + id + '/update',
		method: 'POST',
		data: user
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

export function getSubscriptions(id, type) {
	return axiosNoAuth({
		url: 'user/entries/' + id + '/subscriptions/' + type,
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

export function getUserPosts(id, limit, skip) {   
  return axiosNoAuth({
    url: 'user/entries/' + id + '/getposts',
    method: 'GET',
    params: {
      limit,
      skip
    }
  })
}

export function getUserSubscriptions(id, limit, skip) {   
  return axiosNoAuth({
    url: 'user/entries/' + id + '/getsubscriptions',
    method: 'GET',
    params: {
      limit,
      skip
    }
  })
}

export function getUserCampaigns(id, limit, skip) {   
  return axiosNoAuth({
    url: 'user/entries/' + id + '/getcampaigns',
    method: 'GET',
    params: {
      limit,
      skip
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
		url: 'user/entries/' + id + '/removesocial/',
		method: 'POST',
		data: social
	})
}



