import popArray from '../utils/popArray.js'


export default (state = {}, action) => {
   switch (action.type) {
   case 'CREATE_POSTS_INSTANCE': 
      return {
        ...state,
        [action.payload.hash]: {
          isFetching: false,
          options: action.payload.options,
          posts: []
        }
      }
   case 'FETCH_POSTS_START': 
    	return {
    		...state,
    		[action.payload.hash]: {
          isFetching: true,
          options: action.payload.options,
          posts: state[action.payload.hash].posts
        }
    	}
    case 'FETCH_POSTS_END': 
      return {
        ...state,
        [action.payload.hash]: {
          isFetching: false,
          isFull: action.payload.posts.length == 0,
          posts: [...state[action.payload.hash].posts, ...action.payload.posts]
        }
      }
   default: return state
  }
}