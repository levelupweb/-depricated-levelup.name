import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function getAdvertisement(skip, limit) {
	return axiosNoAuth({
		url: 'advertisement/entries/',
		method: 'GET',
		params: {
			skip,
			limit
		}
  })
}

export function createAdvertisement(token, advertisement) {
	return axiosAuth(token, {
		url: 'advertisement/entries/',
		method: 'POST',
		data: advertisement
  })
}

export function removeAdvertisement(token, advertisementId) {
	return axiosAuth(token, {
		url: 'advertisement/entries/' + advertisementId,
		method: 'DELETE'
  })
}

export function updateAdvertisement(token, id, advertisement) {
	return axiosAuth(token, {
		url: 'advertisement/entries/' + id,
		method: 'PUT',
		data: advertisement
  })
}

