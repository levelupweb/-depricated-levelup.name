var defaultState = {
    postImage: null,
    postVideo: null,
    postLink: null,
    postContent: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'START_POST_EDITING': 
    	return {
    		...state,
    		...action.payload	
    }
    case 'UPDATE_POST_IMAGE':
      return {
        ...state,
        postImage: action.payload
      }
    case 'UPDATE_POST_CONTENT':
      return {
        ...state,
        postContent: action.payload
      }

    case 'UPDATE_POST_LINK':
      return {
        ...state,
        postLink: action.payload
      }
    case 'UPDATE_POST_VIDEO':
      return {
        ...state,
        postVideo: action.payload
      }
    case 'UPDATE_POST':
      return {
        ...state,
        ...action.payload
      }
    default: return state
  }
}