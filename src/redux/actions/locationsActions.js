import { ActionTypes } from "../constants/action-types";

export const setLocations = (locations) => {
  return {
    type: ActionTypes.SET_LOCATIONS,
    payload: locations,
  };
};

export const selectedLocation = (location) => {
  return {
    type: ActionTypes.SELECTED_LOCATION,
    payload: location,
  };
};
export const removeSelectedLocation = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_LOCATION,
  };
};
