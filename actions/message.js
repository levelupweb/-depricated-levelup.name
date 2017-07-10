export function handleSuccess(description, isClosable) {
	return (dispatch) => {
		return dispatch(displayMessage(
			'Успех!', description, isClosable
		))
	}
}

export function handleWarn(description, isClosable) {
	return (dispatch) => {
		return dispatch(displayMessage(
			'Внимание!', description, isClosable
		))
	}
}

export function handleError(description, isClosable) {
	return (dispatch) => {
		return dispatch(displayMessage(
			'Ошибка!', description, isClosable
		))
	}
}

export function displayMessage(title, description, isClosable) {
	return (dispatch) => {
		dispatch(createMessage(title, description, isClosable))
		if(!isClosable) {
			return setTimeout(() => {
				dispatch(hideMessage())
			}, 5000) 
		}
	}
}

export function hideMessage() {
	return (dispatch) => {
		dispatch(unableMessage())
		return setTimeout(() => {
			dispatch(flushMessage())
		}, 1000)
	} 
}

export function createMessage(title, description, isClosable) {
	return {
		type: 'CREATE_MESSAGE',
		payload: {
			title, description, isClosable
		}
	}
}

export function flushMessage() {
	return {
		type: 'FLUSH_MESSAGE'
	}
}

export function unableMessage() {
	return {
		type: 'UNABLE_MESSAGE'
	}
}
