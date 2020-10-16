import React from "react";
import "./SelectRegion.css";

const SelectRegion = ( { regions, handler }) => {
    return(
        <select id="select-region" onChange={handler}>
            { regions.map( region => <option key={region} value={region}>{region}</option>) }
        </select>
    );
};

export default SelectRegion;