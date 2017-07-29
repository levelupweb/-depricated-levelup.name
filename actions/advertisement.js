import config from '../app.config.js'
import cookies from 'js-cookie'

// actions
import { handleWarn, handleError, handleSuccess } from './app.js'

// models
import * as MODEL from '../models/advertisement.js'

// Action Creators
export function createAdvertisement(token, advertisement) {   
  return (dispatch) => {
  	return MODEL.createAdvertisement(token, advertisement).then((response) => {
  		if(response.data.success) {
  			dispatch(handleSuccess('Рекламное объявление ' + advertisement.title + ' успешно создано', true))
  		} else {
  			dispatch(handleError(response.data.message, true))
  		}
  		return response
  	})
  }
}

export function updateAdvertisement(token, id, advertisement) {
  return (dispatch) => {
    return MODEL.updateAdvertisement(token, id, advertisement)
  }
}

export function removeAdvertisement(token, advertisementId) {   
	return (dispatch) => {
   	return MODEL.removeAdvertisement(token, advertisementId)
  }
}
