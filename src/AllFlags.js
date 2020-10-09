import React from "react";
import "./AllFlags.css";
import Flag from "./Flag";

const AllFlags = ( { countries }) => {
    console.log("AllFlags: ", countries)

    return(
        <div id="all-flags-container">
            {
                countries.map( country =>  <Flag country={country} /> )
            }
        </div>
    )
};

export default AllFlags;