import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function startPostEditing(post) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'START_POST_EDITING', payload: post});
			resolve()
		})
	}
}

export function updatePostContent(value) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'UPDATE_POST_CONTENT', payload: value});
			resolve()
		})
	}
}

export function updatePostImage(url) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'UPDATE_POST_IMAGE', payload: url});
			resolve()
		})
	}
}

export function updatePostLink(link) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'UPDATE_POST_LINK', payload: link});
			resolve()
		})
	}
}

export function updatePostVideo(url) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'UPDATE_POST_VIDEO', payload: url});
			resolve()
		})
	}
}

export function updatePost(id, post, token) {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({type: 'UPDATE_POST', payload: post});
			resolve()
		}).then(() => {
			return axiosAuth(token, {
				url: 'post/entries/' + id +'/update',
				method: 'POST',
				data: post
		    })
		})
	}
}
