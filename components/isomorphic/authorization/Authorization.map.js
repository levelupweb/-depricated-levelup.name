import { 
	AUTHORIZATION 
} from './Authorization.consts.js';

import {
	INFOBOX_WARNING,
	INFOBOX_DEFAULT,
	INFOBOX_SUCCESS
} from '../infoBox/InfoBox.consts.js';

export const defaultState = {
	view: AUTHORIZATION,
	temporaryUser: {},
	authData: {},
	infoBox: {
		isActive: false,
		message: {},
		errors: []
	}
}

export const handleTemporaryUserField = (state, fieldName, value) => ({
	...state, 
	temporaryUser: {
		...state.temporaryUser,
		[fieldName]: value
	}
})


export const handleAuthData = (state, fieldName, value) => ({
	...state, 
	authData: {
		...state.authData,
		[fieldName]: value
	}
})

export const handleInfoBoxError = (state, message, errors = []) => ({
	...state,
	infoBox: {
		...state.infoBox,
		isActive: true,
		type: 'warning',
		message,
		errors
	}
})

export const handleInfoBoxSuccess = (state, message) => ({
	...state,
	infoBox: {
		...state.infoBox,
		isActive: true,
		message
	}
})

export const handleView = (state, view) => ({
	...state,
	view
})