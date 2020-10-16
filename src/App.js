import React, { useState, useEffect } from 'react';
import './App.css';
import Search from "./Search";
import SelectRegion from "./SelectRegion";
import AllFlags from "./AllFlags";
import CountryDetail from "./CountryDetail";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countriesSelected, setCountriesSelected] = useState([]);
  const [regionsList, setRegionsList] = useState( [] );
  const [countriesByRegion, setCountriesByRegion ] = useState([]);
  const [countryDetail, setCountryDetail ] = useState(null);
  const compare = (region1, region2) => {
    if(region1 === region2) return 0;
    if(region1 > region2) return 1;
    return -1;
  };

  useEffect( _ => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(allCountries => {
        setCountriesSelected(allCountries);
        setAllCountries(allCountries);

        let regions = []; //["Filter By Region"];
        allCountries.forEach(country => {
          if ((regions.includes(country.region) === false) && country.region.length > 0) {
            regions.push(country.region)
          }
        });

        regions.sort(compare);
        regions.unshift("Filter By Region");
        setRegionsList(regions);
      }); 
  }, []);

  const selectInputHandler = event => {
    let selectedRegion = event.target.options[event.target.selectedIndex].value;
    if (event.target.options[event.target.selectedIndex].index === 0){
      setCountriesByRegion([])
      setCountriesSelected(allCountries);
    } else {
      let regionCountries = allCountries.filter(country => country.region === selectedRegion)
      setCountriesByRegion(regionCountries);
      setCountriesSelected(regionCountries)
    }
  };

  const showDetail = event => {
    setCountryDetail( countriesSelected[event.currentTarget.id] );
  };

  const backButtonHandler = _ => { 
    setCountryDetail(null);
  };
  
  if (countryDetail){
    return (
      <div className="App">
        <CountryDetail country={countryDetail} updateCountry={setCountryDetail} clickHandler={backButtonHandler} />
      </div>
    );
  } else {
      if(allCountries.length){
        return (
          <div className="App">
            <div id="ui-filters">
              <Search setCountriesSelected={setCountriesSelected} 
                            allCountries={allCountries} 
                            countriesByRegion={countriesByRegion}
              />
              <SelectRegion regions={regionsList} handler={selectInputHandler} />
            </div>
            <AllFlags countries={countriesSelected} showDetail={showDetail} />
          </div>
        );
      }
      else {
        return null;
      }
    
  }
}

export default App;