import popArray from '../utils/popArray.js'

const defaultState = {
	post: {
    slug: null, 
    title: null,
    type: 'note',
    description: null,
    content: '',
    author: {
      blog: null,
      user: null
    },
    tags: [],
    image: null,
    status: 'published'
  }
}


export default (state = defaultState, action) => {
   switch (action.type) {
   case 'SET_POST_FIELD': 
    	return {
    		...state,
    		post: {
          ...state.post,
          [action.payload.field]: action.payload.value
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
    case 'POST_PUSH_TAG':
      return {
        ...state,
        post: {
          ...state.post,
          tags: state.post.postTags.concat([action.payload])
        }
      }
    case 'POST_PULL_TAG':
    var array = popArray(state.post.postTags, action.payload)
      return {
        ...state,
        post: {
          ...state.post,
          tags: array
        }
      }
    case 'FLUSH_POST':
      return {
        ...state,
        post: {
          ...state.post,
          content: '',
          image: null,
          video: null,
          link: null
        }
      }
   default: return state
  }
}