import React, { useEffect, dispatch } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectedLocation,
  removeSelectedLocation,
} from "../redux/actions/locationsActions";
import { API_URL, GOOGLE_MAPS_KEY } from "../constants";
import useFetch from "../useFetch";


const LocationDetailComponent = () => {
  const { locationId } = useParams();
  const dispatch = useDispatch();

  const { data: location, error } = useFetch(`${API_URL}/locations/${locationId}`);
  dispatch(selectedLocation(location));

  useEffect(() => {
    return () => {
      dispatch(removeSelectedLocation());
    };
  }, [locationId]);

  if (error) {
    console.log(error);
  }

  return (
    <div className="ui grid container">
      <div className="ui card" style={{ width: '100%', margin: '3rem' }}>
        <div className="content">
          <a className="header">{location?.name}</a>
          <a className="label">{location?.coordX}N </a>
          <a className="label">{location?.coordZ}W </a>
          <a className="label"> – {location?.type}</a>
          <div className="meta">
            <span className="label">ID: {location?.id}</span>
          </div>
          <div>
            <iframe
              width="600"
              height="450"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={"https://www.google.com/maps/embed/v1/place?key=" + GOOGLE_MAPS_KEY + "&q=" + location?.coordX + "N " + location?.coordZ + "W"}>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailComponent;
