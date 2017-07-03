var defaultState = {
  current: null,
  faces: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FACES':
      var faces = [];
      action.payload.map((item) => {
        if(item.blogTitle) { 
          faces.push({
            _id: item._id,
            description: item.blogDescription,
            image: item.blogImage,
            title: item.blogTitle,
            type: 'blog'
          })
        } else {
          faces.push({
            _id: item._id,
            description: item.userDescription,
            image: item.userImage,
            title: item.userName,
            type: 'user'
          })
        }
      })
      return {
        ...state,
        faces: faces
      }
    case 'SET_FACE':
      return {
        ...state,
        current: action.payload
      }
    default: return state
  }
}