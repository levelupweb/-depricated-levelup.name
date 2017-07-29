var defaultState = {
  current: null,
  faces: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FACES':
      var faces = [];
      action.payload.map((item) => {
        var { description, image, _id, title, fullName } = item;
        faces.push({
          _id: _id,
          description: description,
          image: image,
          author: title ? 'blog' : 'user',
          title: title || fullName
        })
      })
      return {
        ...state,
        faces: [...faces]
      }
    case 'SET_FACE':
      return {
        ...state,
        current: action.payload
      }
    default: return state
  }
}