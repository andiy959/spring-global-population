import { SET_CITY } from "./type";

export const setCity = (city) => (dispatch) => {
  dispatch({ type: SET_CITY, payload: city });
};
