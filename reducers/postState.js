import popArray from '../utils/popArray.js'

const defaultState = {
	post: {
    slug: null, 
    postTitle: null,
    postType: 'post',
    postDescription: null,
    postContent: '',
    postAuthor: {
      authorID: null,
      authorType: null
    },
    postTags: [],
    postImage: null,
    postStatus: null
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
          postTags: state.post.postTags.concat([action.payload])
        }
      }
    case 'POST_PULL_TAG':
    var array = popArray(state.post.postTags, action.payload)
      return {
        ...state,
        post: {
          ...state.post,
          postTags: array
        }
      }
    case 'FLUSH_POST':
      return {
        ...state,
        post: {
          ...state.post,
          postContent: '',
          postImage: null,
          postVideo: null,
          postLink: null
        }
      }
   default: return state
  }
}