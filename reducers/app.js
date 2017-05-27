export default (state = { builder: null, query: null, pageData: null }, action) => {
  switch (action.type) {
    case 'SET_QUERY': 
    	return {
    		...state,
    		query: action.payload	
    	}
    case 'SET_BUILDER': 
    	return {
    		...state,
    		builder: action.payload	
    	}
    case 'SET_DATA': 
    	return {
    		...state,
    		pageData: action.payload	
    	}
    default: return state
  }
}