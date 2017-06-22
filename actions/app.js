import axios from 'axios'
import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

export function setQuery(builder, query) {
    return (dispatch) => {
        dispatch({type: 'SET_PAGE_QUERY', payload: query});
        dispatch({type: 'SET_PAGE_BUILDER', payload: builder})
	}
}

export function setPageData(data) {
    return (dispatch) => {
        dispatch({type: 'SET_PAGE_DATA', payload: data});
	}
}

export function setPageSettings(data) {
    return (dispatch) => {
        dispatch({type: 'SET_PAGE_SETTINGS', payload: data});
	}
}

export function setAccessError() {
    return (dispatch) => {
        dispatch({type: 'SET_APP_ACCESSABILITY', payload: false});
	}
}

export function getModule(slug) {
	return axios.get(config.API + 'module/entries/' + slug)	
}

export function makeSearch(query) {   
    return axiosNoAuth({
      url: 'search/entries/',
      method: 'GET',
      params: {
        query: query
      }
    })
}

// Обновление любого поля любого типа записей
export function updateField(token, entryType, entryID, data) {
    return axiosAuth(token, {
        url: entryType + '/entries/' + entryID + '/updatefield',
        method: 'POST',
        data: data
    })
}

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


export function subscribeToEntry(token, entryType, entryId) {
  return axiosAuth(token, {
        url: 'app/entries/' + entryId + '/subscribe/' + entryType,
        method: 'GET'
    })
}

// Обновление любого поля любого типа записей
export function getPersonalFeed(token) {
    return axiosAuth(token, {
        url: 'post/entries/personal',
        method: 'GET'
    })
}