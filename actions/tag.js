import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'

// models
import * as MODEL from '../models/tag.js'

export function createTag(tag) {
	return MODEL.createTag(tag)
}

export function getTag(id) {
	return MODEL.getTag(id)	
}

export function getTags(options) {
	return MODEL.getTags(options)
}

export function updateTag(token, id, tag) {
	return MODEL.updateTag(token, id, tag)
}

export function removeTag(token, id) {
	return MODEL.removeTag(token, id)
}

export function findTag(query) {   
   return MODEL.findTag(query)
}


// DEPRICATED
export async function getTagSubscribers(tagID) {
	return await axios.get(config.API + 'tag/entries/' + tagID + '/getsubscribers')	
}

// DEPRICATED
export function getUserTags(userID) {
	return axios.get(config.API + 'tag/entries/' + userID + '/byuser')	
}