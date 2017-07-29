const defaultState = { 
  accessable: true, 
  pageData: {},
  pageSettings: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
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
    case 'SET_ACCESS_STATUS': 
      return {
        ...state,
        accessable: action.payload
      }
    default: return state
  }
}