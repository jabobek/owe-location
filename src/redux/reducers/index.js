import { combineReducers } from "redux";
import { locationsReducer, selectedLocationsReducer } from "./locationsReducer";
const reducers = combineReducers({
  allLocations: locationsReducer,
  location: selectedLocationsReducer,
});
export default reducers;
