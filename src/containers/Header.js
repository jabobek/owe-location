import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui fixed menu">
            <h1>Lokace</h1>
            <Link to={`/create`}>
                <button className="ui icon button">
                    <i className="add icon"></i>
                </button>
            </Link>
        </div>
    );
};

export default Header;
