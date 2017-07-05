import axios from 'axios'
import config from '../app.config.js'
import cookies from 'js-cookie'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export async function getTagById(tagID) {
	return await axios.get(config.API + 'tag/entries/' + tagID)	
}

export async function getUserTags(userID) {
	return await axios.get(config.API + 'tag/entries/' + userID + '/byuser')	
}

export function getTags(options) {
	return axiosNoAuth({
		url: 'tag/entries',
		method: 'GET',
		params: options
    })
}

export async function getTagSubscribers(tagID) {
	return await axios.get(config.API + 'tag/entries/' + tagID + '/getsubscribers')	
}

export async function subscribeToTag(token, id) {
	await console.log(token, id)
	return await axios({
		url: config.API + 'tag/' + id + '/subscribe',
		method: 'GET',
		headers: {
			'authorization': token
		}
    })
}

export async function addTag(data) {
	return axios({
		url: config.API + 'tag/entries/add',
		method: 'POST',
		data: data,
    })
}

export async function updateTagById(id, data) {
	return await axios.post(config.API + 'tag/entries/' + id + '/update', data)
}

export async function removeTagById(id) {
	return await axios.get(config.API + 'tag/entries/' + id + '/remove')
}



export function findTag(query) {   
    return axiosNoAuth({
      url: 'search/entries/tags',
      method: 'GET',
      params: {
        query: query
      }
    })
}