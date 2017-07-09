import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'
import randomString from '../utils/randomString.js'
import hash from 'object-hash'

// models
import * as MODEL from '../models/post.js'

// Common actions
export function findPost(query) {   
   return MODEL.findPost(query)
}

// TODO: rewrite name -> getUserPosts
export function getPostsByUserId(id) {
	return MODEL.getUserPosts(id)
}

// TODO: rewrite name -> setLike
export function setLikeById(token, id) {
   return MODEL.setLike(token, id)
}

// TODO: rewrite name -> updatePost
export function postUpdate(token, id, post) {
   return MODEL.updatePost(token, id, post)
}

// TODO: rewrite
export function getPosts(page, options, token) {
	var params = options;
	if(!params.perPage) { params.perPage = 10 }
	params.skip = (page - 1) * params.perPage

	if(!params.personal) {
		return axiosNoAuth({
			url: 'post/entries',
			method: 'GET',
			params: params
	   })
	} else {
		return axiosAuth(token, {
			url: 'post/entries/personal',
			method: 'GET',
			params: params
	   })
	}
}

export function setPostField(field, value) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({
				type: 'SET_POST_FIELD', 
				payload: { field, value }
			})
			resolve()
		})
	}
}

export function setPost(post) {
	return (dispatch) => {
		dispatch({
			type: 'SET_POST', 
			payload: post
		})
	}
}

export function prepareNewPost(user, type) {
	return (dispatch) => {
	   return Promise.all([
	   	dispatch(setPostField('postType', type)),
        	dispatch(setPostField('postStatus', 'draft'))
      ])
	}
}

// TODO: return data
export function createPost(token, defaultPost) {
	return (dispatch) => {
		var post = {
			...defaultPost,
			postTitle: defaultPost.postTitle || 'Безымянный' 
		}
		return MODEL.addPost(token, post).then((res) => {
	   	dispatch(setPost(res.data.post))
	   	return res.data.post._id
	   }).then((id) => {
	   	dispatch(displayStatus('Сохранено в черновиках'))
	   	return id
	   })
	}
}

// TODO: return data / dispatch setPost from post to res.data.post
export function savePost(token, post, message) {
	return (dispatch) => {
		console.log(post)
		return MODEL.updatePost(token, post._id, post).then((res) => {
	   	if(res.data.success) {
	   		dispatch(setPost(post))
	   	} else {
	   		console.warn('Ошибка при обновлении поста', res.data)
	   	}
	   	return res.data
	   }).then(() => {
	   	dispatch(displayStatus(message || 'Сохранено'))
	   })
	}
}

export function pushTag(tag) {
	return (dispatch) => {
		if(tag.length > 0) {
			dispatch({
				type: 'POST_PUSH_TAG', 
				payload: tag
			})
		}
	}
}

export function pullTag(tag) {
	return (dispatch) => {
		dispatch({
			type: 'POST_PULL_TAG', 
			payload: tag
		})
	}
}

export function displayStatus(value) {
	return async (dispatch) => {
		await dispatch(setStatus(value))
	   await setTimeout(() => {
        dispatch(setStatus(null))
      }, 3000)
	}
}

function setStatus(value) {
   return {
   	type: 'SET_POST_STATUS', 
   	payload: value
   }
}

// PostsStorage Actions
export function fetchPosts(key, defaultOptions, skip) {
	const options = {
		...defaultOptions,
		perPage: defaultOptions.perPage || 10
	}
	return (dispatch, getState) => {
		var state = getState()
		if (state.postsStorage[key]) {
			if (!state.postsStorage[key].isHydrating && !state.postsStorage[key].isFull) {
				dispatch(fetchPostsStart(key, options))
				return MODEL.fetchPosts(options, skip).then((res) => {
			   	dispatch(fetchPostsEnd(key, res.data))
			   })
			}
		} else {
			console.warn('Инстанция не найдена')
		}
	}
}

export function createPostsInstance(key, options) {
	return {
		type: 'CREATE_POSTS_INSTANCE',
		payload: {
			key, 
			options
		}
	}
}

export function pushPost(token, key, post) {
	var postFinal = {
		...post,
		postStatus: 'published'
	}
	return (dispatch) => {
		dispatch(pushPostStart(key))
		return MODEL.addPost(token, postFinal).then((response) => {
			if(response.data.success) {
				dispatch(pushPostEnd(key, response.data.post))
				return {
					success: true,
					message: 'Пост успешно добавлен'
				}
			} else {
				return {
					success: false,
					message: 'Ошибка при публикации нового поста..'
				}
				console.warn('Ошибка при публикации нового поста..')
			}
			return response;
		})
	}
}

function pushPostStart(key) {
	return {
		type: 'PUSH_POST_START',
		payload: {
			key
		}
	}
}

function pushPostEnd(key, post) {
	return {
		type: 'PUSH_POST_END',
		payload: {
			key, post
		}
	}
}

// add remove model to dispatch
export function removePost(token, key, id) {
	return (dispatch) => {
		dispatch(removePostStart(key, id))
		return MODEL.removePost(token, id).then((res) => {
			if(res.data.success) {
				dispatch(removePostEnd(key, id))
				return {
					success: true,
					message: 'Пост успешно удалён'
				}
			} else {
				return {
					success: false,
					message: 'Ошибка при удалении'
				}
			}
		})
	}
}

function removePostStart(id) {
	return { 
		type: 'REMOVE_POST_START',
		payload: {
			isRemoving: true,
			id: id
		}
	}
}

function removePostEnd(key, id) {
	return { 
		type: 'REMOVE_POST_END',
		payload: {
			key, id
		}
	}
}

function fetchPostsStart(key, options) {
	return {
		type: 'FETCH_POSTS_START',
		payload: {
			key, options
		}
	}
}

function fetchPostsEnd(key, posts) {
	return {
		type: 'FETCH_POSTS_END',
		payload: {
			key, posts
		}
	}
}
