import pageDataBuilder from "../utils/pageDataBuilder";

// models
import * as MODEL from "../models/app";

// Clear Actions
const SET_PAGE_DATA = "SET_PAGE_DATA";
export const setPageData = pageData => ({
  type: SET_PAGE_DATA,
  payload: pageData
});

const SET_PAGE_SETTINGS = "SET_PAGE_SETTINGS";
export const setPageProperties = pageProperties => ({
  type: SET_PAGE_SETTINGS,
  payload: pageProperties
});

const SET_ACCESS_STATUS = "SET_ACCESS_STATUS";
export const setAccessStatus = status => ({
  type: SET_ACCESS_STATUS,
  payload: status
});

const CACHE_DATA = "CACHE_DATA";
export const cacheData = (key, value) => ({
  type: CACHE_DATA,
  payload: { key, value }
});

const CREATE_MESSAGE = "CREATE_MESSAGE";
export const createMessage = (title, description, isClosable) => ({
  type: CREATE_MESSAGE,
  payload: { title, description, isClosable }
});

const CLEAR_MESSAGE = "CLEAR_MESSAGE";
export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});

const HIDE_MESSAGE_START = "HIDE_MESSAGE_START";
export const hideMessageStart = () => ({
  type: HIDE_MESSAGE_START
});

const HIDE_MESSAGE_END = "HIDE_MESSAGE_END";
export const hideMessageEnd = () => ({
  type: HIDE_MESSAGE_END
});

// Action Creators
export const settingUpPageData = (pageBuilder, query) => dispatch =>
  pageDataBuilder(pageBuilder, query).then(data => {
    dispatch(setPageData(data));
    return data;
  });

export const settingUpPageProperties = slug => dispatch =>
  MODEL.getModule(slug).then(response => {
    dispatch(setPageProperties(response.data));
    return response.data;
  });

// return errors or run callback with filepath
export const updateImage = (token, type, id, image, callback) => dispatch => {
  const form = new FormData();
  if (image && form) {
    form.append("image", image);
    form.append("type", type);
    form.append("id", id);
    return MODEL.updateImage(token, id, form).then(updatedImageResponse => {
      const { success, filepath } = updatedImageResponse.data;
      if (success) {
        MODEL.updateField(token, type, id, {
          field: "image",
          value: filepath
        }).then(updatedFieldResponse => {
          const { success, errors } = updatedFieldResponse.data;
          if (success) {
            dispatch(handleSuccess("Изображение обновлено!", true));
            return callback(filepath);
          } else {
            return dispatch(
              handleError(errors, "Ошибка при обновлении данных", true)
            );
          }
        });
      } else {
        return dispatch(handleError([], "Ошибка при загрузке", true));
      }
      return false;
    });
  } else {
    return dispatch(handleError(null, "Не найдено изображение", true));
  }
};

// return errors or run callback with filepath
export const uploadUnsignedImage = (token, image, callback) => dispatch => {
  if (image && token) {
    const form = new FormData();
    form.append("image", image);
    return MODEL.uploadUnsignedImage(token, form).then(response => {
      if (response.data.success) {
        const { filepath } = response.data;
        dispatch(handleSuccess("Изображение успешно загружено!"));
        return callback(filepath);
      } else {
        return dispatch(handleError([], "Ошибка при загрузке изображения"));
      }
    });
  } else {
    return dispatch(handleError([], "Изображение не найдено"));
  }
};

export const handleSuccess = (description, isClosable = false) => dispatch =>
  dispatch(displayMessage("Успех!", description, isClosable));

export const handleWarn = (description, isClosable = false) => dispatch =>
  dispatch(displayMessage("Внимание!", description, isClosable));

export const handleError = (description, isClosable = false) => dispatch =>
  dispatch(displayMessage("Ошибка!", description, isClosable));

export const displayMessage = (title, description, isClosable = false) => dispatch => {
  dispatch(createMessage(title, description, isClosable));
  if (!isClosable) {
    return setTimeout(() => {
      dispatch(hideMessage());
    }, 5000);
  } else {
    return false;
  }
};


export const hideMessage = () => dispatch => {
  dispatch(hideMessageStart());
  return Promise.resolve(
    setTimeout(() => {
      dispatch(clearMessage());
    }, 1000)
  ).then(() => {
    dispatch(hideMessageEnd());
  });
};
