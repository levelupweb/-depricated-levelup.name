export default (state = {toggle: true}, action) => {
  switch (action.type) {
    case 'CHANGE_TAB': 
    	return {
    		...state,
    		toggle: !state.toggle	
    	}
    default: return state
  }
}