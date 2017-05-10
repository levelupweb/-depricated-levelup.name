import axios from 'axios'
import config from '../app.config.js'

export function setUser(token) {
    return (dispatch) => {
        axios({
	      url: config.API + 'user/auth',
	      method: 'GET',
	      headers: {
	        'authorization': token
	      }
	    }).then((res) => {
	    	if(token == 0) { 
	    		dispatch({type: 'LOGIN_FAILURE'})
	    	} else {
	    		if (res.data) {
	    			dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
	    		} else {
	    			dispatch({type: 'LOGIN_FAILURE'})
	    		}
	    	}
	    }) 
	}
}

export function getLogout() {
	return (dispatch) => {
		dispatch({type: 'LOGOUT'})
	}
}
