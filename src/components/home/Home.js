import React, { useState } from "react";
import './Home.css';
import Summary from "./Summary.js";
import Map from "../map/Map.js";
import Header from "./Header.js";
import getFullMonthName from "./MonthMapper.js";
import MonthButtonGroup from "./MonthButtonGroup.js";
import Container from 'react-bootstrap/Container';

import useCountries from "../../hooks/useCountries";

function Home() {

const [month, setMonth] = useState('AUG');
const [region] = useState('EUROPE');
const [focusCountry, setFocusCountry] = useState('NOT_SET');
const { results: countries } = useCountries(region, month);

  return (
    <div className="app">
      <Header/>
      <Container>
        <Summary
          isCountrySelected={focusCountry !== 'NOT_SET'}
          countryName={countries[focusCountry] ? countries[focusCountry].name : ''}
          month={getFullMonthName(month)}
          summary={countries[focusCountry] ? countries[focusCountry].description : ''}
        />
        <Map
          countries={countries}
          onCountryClick={setFocusCountry}
        />
        <MonthButtonGroup
          month={month}
          onMonthChange={setMonth}
        />
      </Container>
    </div>
  );
}

export default Home;