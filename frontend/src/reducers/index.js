import { combineReducers } from "redux";
import country from "./CountryReducer";
import city from "./CityReducer";
import region from "./RegionReducer";

const rootReducer = combineReducers({
  city,
  country,
  region,
});

export default rootReducer;
