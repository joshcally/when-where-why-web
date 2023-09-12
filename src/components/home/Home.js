import React, { useState } from "react";
import './Home.css';
import Header from "./Header.js";
import Map from "../map/Map.js";
import MonthButtonGroup from "./MonthButtonGroup.js";
import Summary from "./Summary.js";
import getFullMonthName from "./MonthMapper.js";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useCountries from "../../hooks/useCountries";

function Home() {

const [month, setMonth] = useState('AUG');
const [focusCountry, setFocusCountry] = useState('NOT_SET');
const { results: countries } = useCountries(month);

  return (
    <div className="app">
      <Header/>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Summary
              isCountrySelected={focusCountry !== 'NOT_SET'}
              countryName={countries[focusCountry] ? countries[focusCountry].name : ''}
              month={getFullMonthName(month)}
              summary={countries[focusCountry] ? countries[focusCountry].description : ''}
            />
          </Col>
        </Row>
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