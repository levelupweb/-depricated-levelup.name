import popArray from '../utils/popArray.js'


export default (state = {}, action) => {
   switch (action.type) {
   case 'CREATE_POSTS_INSTANCE': 
      return {
        ...state,
        [action.payload.key]: {
          isHydrating: false,
          options: action.payload.options,
          posts: []
        }
      }
   case 'FETCH_POSTS_START': 
    	return {
    		...state,
    		[action.payload.key]: {
          ...state[action.payload.key],
          isHydrating: true,
          options: action.payload.options,
          posts: state[action.payload.key].posts
        }
    	}
    case 'FETCH_POSTS_END': 
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          isHydrating: false,
          isFull: action.payload.posts.length == 0,
          posts: [...state[action.payload.key].posts, ...action.payload.posts]
        }
      }
    case 'PUSH_POST_START': 
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          isHydrating: true,
        }
      }
    case 'PUSH_POST_END': 
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          isHydrating: false,
          posts: [action.payload.post, ...state[action.payload.key].posts]
        }
      }
    case 'REMOVE_POST_START': 
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          isHydrating: true
        }
      }
    case 'REMOVE_POST_END': 
      var index = state[action.payload.key].posts.findIndex((i) => { 
        return i._id == action.payload.id
      })
      var array = state[action.payload.key].posts.splice()
      var posts = array.slice(index, 1);
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          isHydrating: false,
          posts: posts
        }
      }
   default: return state
  }
}