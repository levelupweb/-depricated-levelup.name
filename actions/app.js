import config from '../app.config.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'
import pageDataBuilder from '../utils/pageDataBuilder.js'

// models
import * as MODEL from '../models/app.js'

// Clear Actions
const SET_PAGE_DATA = 'SET_PAGE_DATA'
export const setPageData = pageData => ({
  type: SET_PAGE_DATA, 
  payload: pageData
})

const SET_PAGE_SETTINGS = 'SET_PAGE_SETTINGS'
export const setPageProperties = pageProperties => ({
  type: SET_PAGE_SETTINGS, 
  payload: pageProperties
})

const SET_ACCESS_STATUS = 'SET_ACCESS_STATUS'
export const setAccessStatus = status => ({
  type: SET_ACCESS_STATUS, 
  payload: status
})

const CACHE_DATA = 'CACHE_DATA'
export const cacheData = (key, value) => ({
  type: CACHE_DATA, 
  payload: { key, value }
})


const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const createMessage = (title, description, isClosable) => ({
  type: CREATE_MESSAGE, 
  payload: { title, description, isClosable }
})

const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const clearMessage = () => ({
  type: CLEAR_MESSAGE
})

const HIDE_MESSAGE_START = 'HIDE_MESSAGE_START'
export const hideMessageStart = () => ({
  type: HIDE_MESSAGE_START
})

const HIDE_MESSAGE_END = 'HIDE_MESSAGE_END'
export const hideMessageEnd = () => ({
  type: HIDE_MESSAGE_END
})

// Action Creators
export function settingUpPageData(pageBuilder, query) {
  return dispatch => {
    return pageDataBuilder(pageBuilder, query).then((data) => {
      dispatch(setPageData(data))
      return data
    })
  }
}

export function settingUpPageProperties(slug) {
  return dispatch => {
    return MODEL.getModule(slug).then((response) => {
      dispatch(setPageProperties(response.data))
      return response.data
    })
  }
}

// return errors or run callback with filepath
export function updateImage(token, type, id, image, callback) {
  return dispatch => {
    let form = new FormData();
    if (image && form) {
      form.append('image', image);
      form.append('type', type);
      form.append('id', id);

      return MODEL.updateImage(token, id, form)
      .then((response) => {
        const { success, filepath } = response.data;
        if(success) { 
          MODEL.updateField(token, type, id, {
            field: 'image',
            value: filepath
          }).then((response) => {
            const { success, errors } = response.data
            if(success) {
              dispatch(handleSuccess('Изображение обновлено!', true))
              return callback(filepath)
            } else {
              return dispatch(handleError(errors, 'Ошибка при обновлении данных', true))
            }
          })
        } else {
          return dispatch(handleError(errors, 'Ошибка при загрузке', true))
        }
      })
    } else {
      return dispatch(handleError(null, 'Не найдено изображение', true))
    }
  }
}

// return errors or run callback with filepath
export function uploadUnsignedImage(token, image, callback) {
  return dispatch => {
    if (image && token) {
      let form = new FormData();
      form.append('image', image);
      return MODEL.uploadUnsignedImage(token, form)
      .then((response) => {
        if(response.data.success) { 
          const { errors, filepath } = response.data
          dispatch(handleSuccess(
            'Изображение успешно загружено!'
          ))
          return callback(filepath)
        } else {
          dispatch(handleError(
            errors, 'Ошибка при загрузке изображения'
          ))
        }
      })
    } else {
      dispatch(handleError(
        errors, 'Изображение не найдено'
      ))
    }
  }
}

export function handleSuccess(description, isClosable) {
  return dispatch => {
    dispatch(displayMessage(
      'Успех!', description, isClosable
    ))
  }
}

export function handleWarn(description, isClosable) {
  return dispatch => {
    dispatch(displayMessage(
      'Внимание!', description, isClosable
    ))
  }
}

export function handleError(description, isClosable) {
  return dispatch => {
    dispatch(displayMessage(
      'Ошибка!', description, isClosable
    ))
  }
}

export function displayMessage(title, description, isClosable) {
  return dispatch => {
    dispatch(createMessage(title, description, isClosable))
    if(!isClosable) {
      return setTimeout(() => {
        dispatch(hideMessage())
      }, 5000)
    }
  }
}

export function hideMessage() {
  return dispatch => {
    dispatch(hideMessageStart())
    return Promise.resolve(setTimeout(() => {
      dispatch(clearMessage())
    }, 1000))
    .then(() => {
      dispatch(hideMessageEnd())
    })
  } 
}
