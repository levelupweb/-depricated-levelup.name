import config from '../app.config.js'
import cookies from 'js-cookie'

// actions
import { handleWarn, handleError, handleSuccess } from './app.js'

// models
import * as MODEL from '../models/campaign.js'

// Common actions
export function createCampaign(token, campaign) {   
  return (dispatch) => {
  	return MODEL.createCampaign(token, campaign).then((response) => {
  		if(response.data.success) {
  			dispatch(handleSuccess('Кампания ' + campaign.title + ' успешно создана', true))
  		} else {
  			dispatch(handleError(response.data.message, true))
  		}
  		return response.data
  	})
  }
}

export function updateCampaign(token, id, campaign) {
  return (dispatch) => {
    return MODEL.updateCampaign(token, id, campaign)
  }
}

export function getCampaigns(userId) {   
	return (dispatch) => {
  	return MODEL.getCampaigns(userId)
  }
}

export function findOffers(campaignId) {   
  return MODEL.findOffers(campaignId)
}

export function removeCampaign(token, campaignId) {   
	return (dispatch) => {
   	return MODEL.removeCampaign(token, campaignId)
  }
}
