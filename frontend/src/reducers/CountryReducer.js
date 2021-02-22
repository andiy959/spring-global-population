import { SET_COUNTRY } from "../actions/type";
const initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_COUNTRY:
      return payload;

    default:
      return state;
  }
};
