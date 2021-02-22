import { SET_REGION } from "./type";

export const setRegion = (region) => (dispatch) => {
  dispatch({ type: SET_REGION, payload: region });
};
