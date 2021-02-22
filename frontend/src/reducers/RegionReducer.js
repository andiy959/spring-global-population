import { SET_REGION } from "../actions/type";
const initialState = {};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_REGION:
      return payload;

    default:
      return state;
  }
};
