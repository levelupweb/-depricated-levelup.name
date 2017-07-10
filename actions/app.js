import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// models
import * as MODEL from '../models/app.js'

// DANGER ZONE: 
// CORE APPLICATION ACTIONS
export function setQuery(builder, query) {
  return (dispatch) => {
    dispatch({
      type: 'SET_PAGE_QUERY', 
      payload: query
    });
    dispatch({
      type: 'SET_PAGE_BUILDER', 
      payload: builder
    })
	}
}

export function setPageData(data) {
  return (dispatch) => {
    dispatch({
      type: 'SET_PAGE_DATA', 
      payload: data
    });
	}
}

export function setPageSettings(data) {
  return (dispatch) => {
    dispatch({
      type: 'SET_PAGE_SETTINGS', 
      payload: data
    });
	}
}

export function setAccessError() {
  return (dispatch) => {
    dispatch({
      type: 'SET_APP_ACCESSABILITY', 
      payload: false
    });
	}
}

// COMMON ACTIONS
export function getModule(slug) {
  return MODEL.getModule(slug)
}

export function makeSearch(query) {   
  return MODEL.makeSearch(query)
}

export function updateField(token, type, id, data) {
  return MODEL.updateField(token, type, id, data)
}

export function subscribeToEntry(token, type, id) {
  return MODEL.subscribeToEntry(token, type, id)
}

// TODO: handle error, rewrite to actions
export function updateImage(token, entryType, entryID, image) {
    if (image) {
      var data = new FormData();
      data.append('image', image);
      data.append('type', entryType);
      data.append('id', entryID);

      return axiosAuth(token, {
        url: 'app/entries/' + entryID + '/upload',
        method: 'POST',
        data: data
      })
      .then((res) => {
        if(res.data.success) { 
            var path = config.storage + entryType+'s' + '/' + entryID + '/' + res.data.filename
            return { path, ...res.data }
        } else {
            return { errors: res.data.errors }
        }
      })
      .then((res) => {
        if(res.success) { 
            updateField(token, entryType, entryID, {
                field: entryType + 'Image',
                value: res.path
            })
            return res;
        } else {
            return {  errors: res.errors }
        }
      })
    } else {
        console.log('Не найдено изображение')
    }
}

// TODO: handle error, rewrite to actions
export function uploadImage(token, image) {
    if (image) {
      var data = new FormData();
      data.append('image', image);
      return axiosAuth(token, {
        url: 'app/entries/upload',
        method: 'POST',
        data: data
      })
      .then((res) => {
        if(res.data.success) { 
            var path = config.storage + 'temp' + '/' + res.data.filename
            return { path, ...res.data }
        } else {
            return { errors: res.data.errors }
        }
      })
    } else {
        console.log('Не найдено изображение')
    }
}

// MESSAGE SYSTEM:

export function handleSuccess(description, isClosable) {
  return (dispatch) => {
    return dispatch(displayMessage(
      'Успех!', description, isClosable
    ))
  }
}

export function handleWarn(description, isClosable) {
  return (dispatch) => {
    return dispatch(displayMessage(
      'Внимание!', description, isClosable
    ))
  }
}

export function handleError(description, isClosable) {
  return (dispatch) => {
    return dispatch(displayMessage(
      'Ошибка!', description, isClosable
    ))
  }
}

export function displayMessage(title, description, isClosable) {
  return (dispatch) => {
    dispatch(createMessage(title, description, isClosable))
    if(!isClosable) {
      return setTimeout(() => {
        dispatch(hideMessage())
      }, 5000) 
    }
  }
}

export function hideMessage() {
  return (dispatch) => {
    dispatch(unableMessage())
    return setTimeout(() => {
      dispatch(flushMessage())
    }, 1000)
  } 
}

export function createMessage(title, description, isClosable) {
  return {
    type: 'CREATE_MESSAGE',
    payload: {
      title, description, isClosable
    }
  }
}

export function flushMessage() {
  return {
    type: 'FLUSH_MESSAGE'
  }
}

export function unableMessage() {
  return {
    type: 'UNABLE_MESSAGE'
  }
}