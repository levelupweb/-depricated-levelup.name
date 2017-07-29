import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function createCampaign(token, campaign) {
	return axiosAuth(token, {
		url: 'campaign/entries/',
		method: 'POST',
		data: campaign
   })
}

export function removeCampaign(token, campaignId) {
	return axiosAuth(token, {
		url: 'campaign/entries/' + campaignId,
		method: 'DELETE'
   })
}

export function updateCampaign(token, id, campaign) {
	return axiosAuth(token, {
		url: 'campaign/entries/' + id,
		method: 'PUT',
		data: campaign
  })
}

export function findOffers(campaignId) {
	return axiosNoAuth({
		url: 'campaign/entries/' + campaignId + '/offers',
		method: 'GET'
  })
}