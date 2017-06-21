var defaultState = {
   errors: [],
   faces: null,
   placeholder: 'О чем бы вы хотели сейчас рассказать?',
   post: {
      postAuthor: {
         authorType: null,
         authorID: null
      },
      postImage: null,
      postVideo: null,
      postLink: null,
      postContent: '',
   },
   postFace: {
      faceImage: null,
      faceTitle: null
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_POST_FACE': 
    	return {
    		...state,
    		postFace: {
            faceImage: action.payload.image,
            faceTitle: action.payload.title  
         } 	
    	}
   case 'SET_POST_AUTHOR':
      return {
         ...state,
         post: {
            ...state.post,
            postAuthor: {
               authorType: action.payload.type,
               authorID: action.payload.id
            }
         }
      }
    case 'SET_POST':
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload
        }
      }
    case 'SET_POST_FACES':
      return {
        ...state,
        faces: action.payload
      }

    case 'FLUSH_POST':
      return {
        ...state,
        post: {
          ...state.post,
          postImage: null,
          postVideo: null,
          postLink: null,
          postContent: '',
          postType: 'note'
        }
      }
    default: return state
  }
}