const defaultState = {
  title: '',
  description: '',
  isClosable: false,
  isActive: false,
  isHydrating: false
}

export default (state = { ...defaultState }, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE': 
      var { title, description, isClosable } = action.payload
    	return {
    		...state,
        isClosable,
        description,
    		title,
        isActive: true
    	}
    case 'CLEAR_MESSAGE': 
      return {
        ...state,
        ...defaultState
      }
    case 'HIDE_MESSAGE_START': 
      return {
        ...state,
        isHydrating: true,
        isActive: false
      }
    case 'HIDE_MESSAGE_END': 
      return {
        ...state,
        isHydrating: false,
        isActive: false
      }
    default: return state
  }
}