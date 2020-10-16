import React from "react";
import "./AllFlags.css";
import Flag from "./Flag";

const AllFlags = ({ countries, showDetail }) => {

    return(
        <div id="all-flags-container">
            {
                countries.map((country, index) => <Flag key={`${country.name}-${index}`} id={index} country={country} handler={showDetail} /> )
            }
        </div>
    )
};

export default AllFlags;