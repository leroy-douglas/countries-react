import React from "react";
import "./Flag.css";

const Flag = ({ id, country, handler } ) => {
    return(
        <div className="flag-container" id={id} onClick={handler}>
            <img src={country.flag} alt={`Flag for ${country.name}`} />
            <div className="country-flag-details">
                <p className="country-name" >{country.name}</p>
                <p className="country-population">
                    <span className="label">Population: </span>
                    <span>{Number(country.population).toLocaleString()}</span>
                </p>
                <p className="country-region">
                    <span className="label">Region: </span>
                    <span>{country.region}</span>
                </p>
                <p className="country-capital">
                    <span className="label">Capital: </span>
                    <span>{country.capital}</span>
                </p>
            </div>
        </div>
    );
};

export default Flag;