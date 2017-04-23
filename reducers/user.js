const defaultState = {
	auth: false,
	user: null,
	error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
    	return {
    		...state,
    		auth: true,
    		user: action.payload,
    		error: null	
    	}

    case 'LOGIN_FAILURE': 
    	return {
    		...state,
    		auth: false,
    		user: null,
    		error: action.payload
    	}
    default: return state
  }
}