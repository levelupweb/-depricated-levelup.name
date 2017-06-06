export default (state = { accessable: true, builder: null, query: null, pageData: null, pageSettings: null }, action) => {
  switch (action.type) {
    case 'SET_PAGE_QUERY': 
    	return {
    		...state,
    		query: action.payload	
    	}
    case 'SET_PAGE_BUILDER': 
    	return {
    		...state,
    		builder: action.payload	
    	}
    case 'SET_PAGE_DATA': 
    	return {
    		...state,
    		pageData: action.payload	
    	}
    case 'SET_PAGE_SETTINGS': 
        return {
            ...state,
            pageSettings: action.payload    
        }
    case 'SET_APP_ACCESSABILITY': 
        return {
            ...state,
            accessable: action.payload
        }
    default: return state
  }
}