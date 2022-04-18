import { ActionTypes } from "../constants/action-types";
const intialState = {
  locations: [],
};

export const locationsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LOCATIONS:
      return { ...state, locations: payload };
    default:
      return state;
  }
};

export const selectedLocationsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_LOCATION:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_LOCATION:
      return {};
    default:
      return state;
  }
};
