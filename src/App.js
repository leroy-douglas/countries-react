import React from 'react';
import allCountries from "./allCountries";
import './App.css';
import AllFlags from "./AllFlags";

function App() {
  console.log(allCountries);
  return (
    <div className="App">
      <AllFlags countries={allCountries} />
    </div>
  );
}

export default App;
