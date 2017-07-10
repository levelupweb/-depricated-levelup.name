import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// Rules: 
// Models names: [action][instance] () {...}

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

export function updateField(token, entryType, entryID, data) {
	return axiosAuth(token, {
		url: entryType + '/entries/' + entryID + '/updatefield',
		method: 'POST',
		data: data
   })
}

export function subscribeToEntry(token, entryType, entryId) {
  	return axiosAuth(token, {
      url: 'app/entries/' + entryId + '/subscribe/' + entryType,
      method: 'GET'
   })
}
