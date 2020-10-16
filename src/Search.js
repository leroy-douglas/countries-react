import React, { useState } from "react";
import "./Search.css";

const Search = ({ setCountriesSelected, allCountries, countriesByRegion }) => {
const [ inputValue, setInputValue ] = useState("");
        const searchBoxHandler = event => {
        //console.log("searchBoxHandler: ", countriesSelected, inputValue);
        let countries = countriesByRegion.length ? countriesByRegion : allCountries;
        let currentInput = event.target.value.toLowerCase();
        let selectedCountries = countries.filter(country => {
            let lcName = country.name.toLowerCase();
            let lcCapital = country.capital.toLowerCase();
            return (lcName.includes(currentInput) || lcCapital.includes(currentInput))
        });

        setInputValue(currentInput);
        setCountriesSelected(selectedCountries);
    };
   
    return(
        <div id="search">
            <input type="text" placeholder="Search for a country..." onChange={searchBoxHandler} value={inputValue} />
        </div>
    );
};

export default Search;