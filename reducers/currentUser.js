const defaultState = {
	isLogged: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
    	return {
    		...state,
    		isLogged: true,
    		...action.payload
    	}

    case 'LOGIN_FAILURE': 
    	return {
    		...state,
    		isLogged: false
    	}

    case 'LOGOUT':
        return {
            ...state,
            isLogged: false
        }

    default: return state
  }
}