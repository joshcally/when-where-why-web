import React, { useState } from "react";
import './Home.css';
import SmallMap from "../map/SmallMap.js";
import WideMap from "../map/WideMap.js";
import useCountries from "../../hooks/useCountries";
import MediaQuery from 'react-responsive'

function Home() {

const [month, setMonth] = useState('JUN');
const [region, setRegion] = useState('EUROPE');
const [focusCountry, setFocusCountry] = useState('NOT_SET');
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

      <button className={`button ${region === 'EUROPE' ? "button-pressed" : ""}`} onClick={ () => handleRegionChange('EUROPE') }>Europe</button>
      <button className={`button ${region === 'NORTH_AMERICA' ? "button-pressed" : ""}`} onClick={ () => handleRegionChange('NORTH_AMERICA') }>North America</button>
      <button className={`button ${region === 'SOUTH_AMERICA' ? "button-pressed" : ""}`} onClick={ () => handleRegionChange('SOUTH_AMERICA') }>South America</button>

      <div className="card">
        {(focusCountry === 'NOT_SET') && <div className="card-title">Select a region</div>}
        {countries[focusCountry] && <div className="card-title">{countries[focusCountry].name} in {getFullMonthName(month)}</div>}
        {countries[focusCountry] && <p>{countries[focusCountry].description}</p>}
      </div>

      <MediaQuery minWidth={800}>
        <div className="legend">
           <ul>
             <li className="red">Scorching Hot</li>
             <li className="yellow">Warm</li>
             <li className="green">Pleasant</li>
             <li className="turquoise">Cool</li>
             <li className="blue">Freezing Cold</li>
           </ul>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={799}>
        <SmallMap countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <WideMap countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>
      </MediaQuery>

      <button className={`button ${month === 'JAN' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('JAN') }>Jan</button>
      <button className={`button ${month === 'FEB' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('FEB') }>Feb</button>
      <button className={`button ${month === 'MAR' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('MAR') }>Mar</button>
      <button className={`button ${month === 'APR' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('APR') }>Apr</button>
      <button className={`button ${month === 'MAY' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('MAY') }>May</button>
      <button className={`button ${month === 'JUN' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('JUN') }>Jun</button>
      <button className={`button ${month === 'JUL' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('JUL') }>Jul</button>
      <button className={`button ${month === 'AUG' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('AUG') }>Aug</button>
      <button className={`button ${month === 'SEP' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('SEP') }>Sep</button>
      <button className={`button ${month === 'OCT' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('OCT') }>Oct</button>
      <button className={`button ${month === 'NOV' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('NOV') }>Nov</button>
      <button className={`button ${month === 'DEC' ? "button-pressed" : ""}`} onClick={ () => handleMonthChange('DEC') }>Dec</button>

    </div>
  );
}

function getFullMonthName(abbreviation) {
  switch (abbreviation) {
    case 'JAN' :
      return 'January'
    case 'FEB' :
      return 'February'
    case 'MAR' :
      return 'March'
    case 'APR' :
      return 'April'
    case 'MAY' :
      return 'May'
    case 'JUN' :
      return 'June'
    case 'JUL' :
      return 'July'
    case 'AUG' :
      return 'August'
    case 'SEP' :
      return 'September'
    case 'OCT' :
      return 'October'
    case 'NOV' :
      return 'November'
    case 'DEC' :
      return 'December'
    default:
      return 'no-data'
  }
}

export default Home;