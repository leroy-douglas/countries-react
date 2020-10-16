import React from "react";
import allCountries from "./allCountries";
import "./Flag.css";
import "./CountryDetail.css";

const countryCodeMap = _ => {
    let codes = new Map();
    allCountries.forEach( country => codes.set(country.alpha3Code, country.name) )
    return codes;
};

const CountryDetail = ({ country, updateCountry, clickHandler } ) => {
    const newCountryDetail = event => {
        let country = allCountries.find(country => country.name === event.currentTarget.id)
        updateCountry(country);
    };

    const codeMap = countryCodeMap();
    
    return(
        <div id="country-detail">
            <button id="back-button" onClick={clickHandler}>Back</button>
            <div className="flag-container" >
                <img src={country.flag} alt={`Flag for ${country.name}`} />
                <div className="country-flag-details">
                    <p className="country-native-name">
                        <span className="label">Native Name: </span>
                        <span>{country.nativeName}</span>
                    </p>
                   
                    <p className="country-population">
                        <span className="label">Population: </span>
                        <span>{Number(country.population).toLocaleString()}</span>
                    </p>

                    <p className="country-region">
                        <span className="label">Region: </span>
                        <span>{country.region}</span>
                    </p>

                    <p className="country-subregion">
                        <span className="label">Sub Region: </span>
                        <span>{country.subregion}</span>
                    </p>

                    <p className="country-capital">
                        <span className="label">Capital: </span>
                        <span>{country.capital}</span>
                    </p>

                    <p className="country-top-level-domain">
                        <span className="label">Top Level Domain: </span>
                        <span>{country.topLevelDomain}</span>
                    </p>

                    <p className="country-currencies">
                        <span className="label">Currencies: </span>
                        {country.currencies.map(currency => <span key={currency.name}>{currency.name} </span> ) }
                    </p>

                    <p className="country-languages">
                        <span className="label">Languages:<br /></span>
                        {country.languages.map(language => <span key={language.nativeName}>{language.nativeName}    </span>)}
                    </p>

                    {
                        country.borders.length  ? 
                            <div className="country-borders">
                                <span className="label">Border Countries: </span>
                                <div id="border-button-group">
                                    {country.borders.map((border, index) => <button key={`${border}-${index}`} onClick={newCountryDetail} id={codeMap.get(border)}>{codeMap.get(border)}</button> ) }
                                </div>
                            </div>
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;