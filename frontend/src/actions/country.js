import { SET_COUNTRY } from "./type";

export const setCountry = (country) => (dispatch) => {
  dispatch({ type: SET_COUNTRY, payload: country });
};
