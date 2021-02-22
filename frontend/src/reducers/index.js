import { combineReducers } from "redux";
import country from "./CountryReducer";
import city from "./CityReducer";

const rootReducer = combineReducers({
  city,
  country,
});

export default rootReducer;
