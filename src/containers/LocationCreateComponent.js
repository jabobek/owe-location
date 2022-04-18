import React from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useState } from "react";

const LocationCreateComponent = () => {
    const [name, setName] = useState("");
    const [coordX, setText1] = useState("");
    const [coordZ, setText2] = useState("");
    const [type, setType] = useState("restaurant");

    const onButtonClick = () => {
        const item = {
            name: name,
            coordX: coordX,
            coordZ: coordZ,
            type: type
        };
        addLocation(item);
    };


    const addLocation = async (value) => {
        axios.post(`${API_URL}/locations`, value).then(() => window.location.replace('/')).catch((error) => console.log(error));
    };


    return (
        <div className="ui grid container" style={{ paddingTop: '5rem' }}>
            <div className="ui form" style={{ width: '100%' }} >
                <div className="field">
                    <label>Název</label>
                    <div className="wide field">
                        <input type="text" name="name" placeholder="Název" onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label>Pozice</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="coordX" placeholder="N" onChange={(event) => setText1(event.target.value)} />
                        </div>
                        <div className="field">
                            <input type="text" name="coordZ" placeholder="W" onChange={(event) => setText2(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Kategorie</label>
                    <div className="ui radio checkbox">
                        <input type="radio" name="locationType" value="restaurant" onChange={(event) => setType(event.target.value)} checked={true} />
                        <label>Restaurace</label>
                    </div>
                    <div className="ui radio checkbox">
                        <input type="radio" name="locationType" value="pub" onChange={(event) => setType(event.target.value)} />
                        <label>Hospoda</label>
                    </div>
                    <div className="ui radio checkbox">
                        <input type="radio" name="locationType" value="sport" onChange={(event) => setType(event.target.value)} />
                        <label>Sport</label>
                    </div>
                    <div className="ui radio checkbox">
                        <input type="radio" name="locationType" value="culture" onChange={(event) => setType(event.target.value)} />
                        <label>Kultura</label>
                    </div>
                </div>
                <button className="ui button" onClick={(event) => onButtonClick(event)}>Přidat</button>
            </div>
        </div>
    );
};

export default LocationCreateComponent;
