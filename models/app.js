import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// Rules: 
// Models names: [action][instance] () {...}

export function updateImage(token, id, data) {
  return axiosAuth(token, {
    url: 'app/entries/' + id + '/upload',
    method: 'POST',
    data: data
  })
}

export function uploadImage(token, id, image) {
  return axiosAuth(token, {
    url: 'app/entries/' + id + '/upload',
    method: 'POST',
    data: image
  })
}

export function uploadUnsignedImage(token, image) {
  return axiosAuth(token, {
    url: 'app/entries/upload',
    method: 'POST',
    data: image
  })
}

export function getModule(slug) {
	return axiosNoAuth({
		url: 'module/entries/' + slug,
		method: 'GET'
	})	
}

export function makeSearch(query) {
	return axiosNoAuth({
      url: 'search/entries/',
      method: 'GET',
      params: {
        	query: query
      }
   })	
}

export function updateField(token, type, id, data) {
	return axiosAuth(token, {
		url: type + '/entries/' + id + '/field',
		method: 'PUT',
		data: data
  })
}

export function subscribeToEntry(token, entryType, entryId) {
  	return axiosAuth(token, {
      url: 'app/entries/' + entryId + '/subscribe/' + entryType,
      method: 'GET'
   })
}
