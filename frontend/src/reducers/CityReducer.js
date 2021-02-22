import { SET_CITY } from "../actions/type";
const initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_CITY:
      return payload;

    default:
      return state;
  }
};
