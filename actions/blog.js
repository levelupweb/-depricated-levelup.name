import axios from 'axios'
import config from '../app.config.js'

// models
import * as MODEL from '../models/blog.js'

export function createBlog(token, blog) {
	return MODEL.createBlog(token, blog)
}

export function getBlogs() {
	return MODEL.getBlogs()
}

export function getUserBlog(id) {
	return MODEL.getUserBlog(id)
}

export function getBlogStats(id) {
	return MODEL.getBlogStats(id)
}

export function getBlog(id) {
	return MODEL.getBlog(id)
}

export function findBlog(query) {   
   return MODEL.findBlog(query)
}

export function getUserSubscriptions(id) {
	return MODEL.getUserSubscriptions(id)
}