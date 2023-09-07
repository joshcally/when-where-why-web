import React, { useState } from "react";
import './Home.css';
import SmallMap from "../map/SmallMap.js";
import Legend from "./Legend.js";
import WideMap from "../map/WideMap.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MediaQuery from 'react-responsive'
import { AutoTextSize } from 'auto-text-size'

import useCountries from "../../hooks/useCountries";

function Home() {

const [month, setMonth] = useState('AUG');
const [region, setRegion] = useState('EUROPE');
const [focusCountry, setFocusCountry] = useState('NOT_SET');
const { results: countries } = useCountries(region, month);

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
      <Header/>
      <Container>

        {/*
        <div className="region-button-group">
          <Button className={ region === 'EUROPE' ? "active" : "" } onClick={ () => handleRegionChange('EUROPE') }>Europe</Button>{' '}
          <Button className={ region === 'NORTH_AMERICA' ? "active" : "" } onClick={ () => handleRegionChange('NORTH_AMERICA') }>North America</Button>{' '}
          <Button className={ region === 'SOUTH_AMERICA' ? "active" : "" } onClick={ () => handleRegionChange('SOUTH_AMERICA') }>South America</Button>
        </div>
        */} 

        <Card className="country-summary">
          <Card.Body>
            {(focusCountry === 'NOT_SET') && <Card.Title>Trip Planning Starts Here</Card.Title>}
            {(focusCountry === 'NOT_SET') && <Card.Text className='card-text'>Select a country to get started</Card.Text>}
            {countries[focusCountry] && <Card.Title>{countries[focusCountry].name} in {getFullMonthName(month)}</Card.Title>}
            {countries[focusCountry] && <Card.Text className='card-text'><AutoTextSize mode='box'>{countries[focusCountry].description}</AutoTextSize></Card.Text>}
          </Card.Body>
        </Card>

        <MediaQuery maxWidth={799}>
          <Container className="legend-container">
            <Legend />
            <SmallMap countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>
          </Container>
        </MediaQuery>
        <MediaQuery minWidth={800}>
          <Legend />
          <WideMap countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>
        </MediaQuery>

        <MediaQuery maxWidth={799}>
          <ButtonGroup className="mb-2 month-buttons">
            <Button className={ month === 'JAN' ? "active" : "" } onClick={ () => handleMonthChange('JAN') }>Jan</Button>
            <Button className={ month === 'FEB' ? "active" : "" } onClick={ () => handleMonthChange('FEB') }>Feb</Button>
            <Button className={ month === 'MAR' ? "active" : "" } onClick={ () => handleMonthChange('MAR') }>Mar</Button>
            <Button className={ month === 'APR' ? "active" : "" } onClick={ () => handleMonthChange('APR') }>Apr</Button>
            <Button className={ month === 'MAY' ? "active" : "" } onClick={ () => handleMonthChange('MAY') }>May</Button>
            <Button className={ month === 'JUN' ? "active" : "" } onClick={ () => handleMonthChange('JUN') }>Jun</Button>
          </ButtonGroup>
          <span />
          <ButtonGroup className="mb-2">
            <Button className={ month === 'JUL' ? "active" : "" } onClick={ () => handleMonthChange('JUL') }>Jul</Button>
            <Button className={ month === 'AUG' ? "active" : "" } onClick={ () => handleMonthChange('AUG') }>Aug</Button>
            <Button className={ month === 'SEP' ? "active" : "" } onClick={ () => handleMonthChange('SEP') }>Sep</Button>
            <Button className={ month === 'OCT' ? "active" : "" } onClick={ () => handleMonthChange('OCT') }>Oct</Button>
            <Button className={ month === 'NOV' ? "active" : "" } onClick={ () => handleMonthChange('NOV') }>Nov</Button>
            <Button className={ month === 'DEC' ? "active" : "" } onClick={ () => handleMonthChange('DEC') }>Dec</Button>
          </ButtonGroup>
        </MediaQuery>
        <MediaQuery minWidth={800}>
          <ButtonGroup className="mb-2">
            <Button className={ month === 'JAN' ? "active" : "" } onClick={ () => handleMonthChange('JAN') }>Jan</Button>
            <Button className={ month === 'FEB' ? "active" : "" } onClick={ () => handleMonthChange('FEB') }>Feb</Button>
            <Button className={ month === 'MAR' ? "active" : "" } onClick={ () => handleMonthChange('MAR') }>Mar</Button>
            <Button className={ month === 'APR' ? "active" : "" } onClick={ () => handleMonthChange('APR') }>Apr</Button>
            <Button className={ month === 'MAY' ? "active" : "" } onClick={ () => handleMonthChange('MAY') }>May</Button>
            <Button className={ month === 'JUN' ? "active" : "" } onClick={ () => handleMonthChange('JUN') }>Jun</Button>
            <Button className={ month === 'JUL' ? "active" : "" } onClick={ () => handleMonthChange('JUL') }>Jul</Button>
            <Button className={ month === 'AUG' ? "active" : "" } onClick={ () => handleMonthChange('AUG') }>Aug</Button>
            <Button className={ month === 'SEP' ? "active" : "" } onClick={ () => handleMonthChange('SEP') }>Sep</Button>
            <Button className={ month === 'OCT' ? "active" : "" } onClick={ () => handleMonthChange('OCT') }>Oct</Button>
            <Button className={ month === 'NOV' ? "active" : "" } onClick={ () => handleMonthChange('NOV') }>Nov</Button>
            <Button className={ month === 'DEC' ? "active" : "" } onClick={ () => handleMonthChange('DEC') }>Dec</Button>
          </ButtonGroup>
         </MediaQuery>

      </Container>
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