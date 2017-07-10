import axios from 'axios'
import config from '../app.config.js'

// models
import * as MODEL from '../models/comment.js'

export function createComment(token, comment) {
	return MODEL.createComment(token, comment)
}

export function getComment(id) {
	return MODEL.getComment(id)
}

export function removeComment(token, id) {
	return MODEL.removeComment(token, id)
}

export function updateComment(token, comment) {
	return MODEL.updateComment(token, comment)
}
