export default (state = { lastUpdate: 0, light: false, seconds: 0 }, action) => {
  switch (action.type) {
    case 'TICK': 
    	return {
    		lastUpdate: action.ts, 
    		light: !!action.light,
    		seconds: action.seconds++
    	}
    default: return state
  }
}