// actions
import { handleError, handleSuccess } from "./app";

// models
import * as MODEL from "../models/advertisement";

// Action Creators
export const createAdvertisement = (token, advertisement) => dispatch =>
  MODEL.createAdvertisement(token, advertisement).then(response => {
    if (response.data.success) {
      dispatch(
        handleSuccess(
          `Рекламное объявление ${advertisement.title} успешно создано`,
          true
        )
      );
    } else {
      dispatch(handleError(response.data.message, true));
    }
    return response;
  });


export const updateAdvertisement = (token, id, advertisement) =>
  MODEL.updateAdvertisement(token, id, advertisement);

export const removeAdvertisement = (token, advertisementId) =>
  MODEL.removeAdvertisement(token, advertisementId);

