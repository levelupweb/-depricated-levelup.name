import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function createBlog(token, blog) {
	return axiosAuth(token, {
		url: 'blog/entries',
		method: 'POST',
		data: blog
   }).then((res) => {
   	console.log(res)
   	return res
   })
}

// TODO: params for request
export function getBlogs(options, skip) {
	return axiosNoAuth({
		url: 'blog/entries',
		params: {
			limit: options.perPage || 10,
			...options,
			skip,
		}
  })
}

export function getUserBlog(userID) {
	return axiosNoAuth({
		url: 'user/entries/' + userID + '/getblog',
		method: 'GET'
  })
}

export function getBlog(id) {
	return axiosNoAuth({
		url: 'blog/entries/id/' + id,
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

export function getBlogBySlug(id) {
	return axiosNoAuth({
		url: 'blog/entries/' + id + '/byid',
		method: 'GET'
   })
}

export function removeBlog(token, id) {
	return axiosAuth(token, {
		url: 'blog/entries/' + id,
		method: 'DELETE'
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