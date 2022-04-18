import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LocationComponent = () => {
  const locations = useSelector((state) => state.allLocations.locations);
  if(!locations){
    return;
  }
  const renderList = locations.map((location) => {
    const { id, name, coordX, coordZ, type } = location;
    return (
      <div className="eight wide column" key={id}>
        <Link to={`/locations/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta">{type}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default LocationComponent;
