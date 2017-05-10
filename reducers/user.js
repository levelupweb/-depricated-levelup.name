const defaultState = {
	isLogged: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
    	return {
    		...state,
    		isLogged: true,
    		profile: action.payload
    	}

    case 'LOGIN_FAILURE': 
    	return {
    		...state,
    		isLogged: false,
    		profile: null
    	}

    case 'LOGOUT':
        return {
            ...state,
            isLogged: false,
            profile: null,
            lol: '123'
        }

    default: return state
  }
}