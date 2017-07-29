import config from '../app.config.js'
import cookies from 'js-cookie'

// actions
import { handleWarn, handleError, handleSuccess } from './app.js'

// models
import * as MODEL from '../models/social.js'

// Common actions
export function createSocial(token, social) {   
  return (dispatch) => {
  	return MODEL.createSocial(token, social).then((response) => {
  		if(response.data.success) {
  			dispatch(handleSuccess('Ссылка на ' + social.title + ' успешно добавлена', true))
  		} else {
  			dispatch(handleError(response.data.message, true))
  		}
  		return response.data
  	})
  }
}

export function getSocials(id) {   
	return (dispatch) => {
  	return MODEL.createSocial(id)
  }
}

export function removeSocial(token, id) {   
	return (dispatch) => {
   	return MODEL.removeSocial(token, id)
  }
}
