const defaultState = {
    title: '',
    description: '',
    closable: false,
    isActive: false
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
    case 'UNABLE_MESSAGE': 
        return {
            ...state,
            isActive: false
        }
    case 'FLUSH_MESSAGE': 
        return {
            ...state,
            ...defaultState
        }
    default: return state
  }
}