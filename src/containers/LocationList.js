import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "../redux/actions/locationsActions";
import LocationComponent from "./LocationComponent";
import { API_URL } from '../constants';
import useFetch from "../useFetch";

const LocationPage = () => {
  const dispatch = useDispatch();

  const { data, error } = useFetch(`${API_URL}/locations/`);
  dispatch(setLocations(data));
  const locations = useSelector((state) => state.allLocations.locations);

  useEffect(() => {
    dispatch(setLocations(locations));
  }, []);

  if (error) {
    console.log(error);
  }

  return (
    <div className="ui grid container" style={{ padding: '4rem' }}>
      <LocationComponent />
    </div>
  );
};

export default LocationPage;
