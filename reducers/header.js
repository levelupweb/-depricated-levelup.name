export default (state = { search: false }, action) => {
  switch (action.type) {
    case 'SEARCH_SWITCH': 
    	return {
    		...state,
    		search: !state.search	
    	}
    default: return state
  }
}