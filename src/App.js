import React, { useState } from "react";
import './App.css';
import Map from "./components/Map/Map.js";
import useCountries from "./hooks/useCountries";

function App() {

const [month, setMonth] = useState('JUN');
const [region, setRegion] = useState('EUROPE');
const [focusCountry, setFocusCountry] = useState('IT');
const { loading, results: countries } = useCountries(region, month);

const handleRegionChange = (region) => {
  setRegion(region)
};

const handleMonthChange = (month) => {
  setMonth(month)
};

const handleFocusCountryChange = (country) => {
  setFocusCountry(country)
};

  return (
    <div className="App">

      <button className="button" onClick={ () => handleRegionChange('EUROPE') }>Europe</button>
      <button className="button" onClick={ () => handleRegionChange('NORTH_AMERICA') }>North America</button>
      <button className="button" onClick={ () => handleRegionChange('SOUTH_AMERICA') }>South America</button>
      <button className="button" onClick={ () => handleRegionChange('ASIA') }>Asia</button>
      <button className="button" onClick={ () => handleRegionChange('AFRICA') }>Africa</button>

      <div className="card">
        {countries[focusCountry] && <h1>{countries[focusCountry].name} in {month}</h1>}
        {countries[focusCountry] && <p>{countries[focusCountry].summary}</p>}
        {countries[focusCountry] && <p>{countries[focusCountry].description}</p>}
      </div>

      <div className="legend">
         <ul>
           <li class="red">Scorching Hot</li>
           <li class="yellow">Warm</li>
           <li class="green">Pleasant</li>
           <li class="turquoise">Cool</li>
           <li class="blue">Freezing Cold</li>
         </ul>
      </div>

      <Map countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>

      <button className="button" onClick={ () => handleMonthChange('JAN') }>Jan</button>
      <button className="button" onClick={ () => handleMonthChange('FEB') }>Feb</button>
      <button className="button" onClick={ () => handleMonthChange('MAR') }>Mar</button>
      <button className="button" onClick={ () => handleMonthChange('APR') }>Apr</button>
      <button className="button" onClick={ () => handleMonthChange('MAY') }>May</button>
      <button className="button" onClick={ () => handleMonthChange('JUN') }>Jun</button>
      <button className="button" onClick={ () => handleMonthChange('JUL') }>Jul</button>
      <button className="button" onClick={ () => handleMonthChange('AUG') }>Aug</button>
      <button className="button" onClick={ () => handleMonthChange('SEP') }>Sep</button>
      <button className="button" onClick={ () => handleMonthChange('OCT') }>Oct</button>
      <button className="button" onClick={ () => handleMonthChange('NOV') }>Nov</button>
      <button className="button" onClick={ () => handleMonthChange('DEC') }>Dec</button>

    </div>
  );
}

export default App;
