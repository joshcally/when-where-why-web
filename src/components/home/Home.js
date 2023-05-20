import React, { useState } from "react";
import './Home.css';
import SmallMap from "../map/SmallMap.js";
import WideMap from "../map/WideMap.js";
import Footer from "./Footer.js"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
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
      <Container className="p-3">

      <h1>WHEN WHERE WHY</h1>
      <h3>Travel Planning</h3>

        <Button className={ region === 'EUROPE' ? "active" : "" } onClick={ () => handleRegionChange('EUROPE') }>Europe</Button>
        <Button className={ region === 'NORTH_AMERICA' ? "active" : "" } onClick={ () => handleRegionChange('NORTH_AMERICA') }>North America</Button>
        <Button className={ region === 'SOUTH_AMERICA' ? "active" : "" } onClick={ () => handleRegionChange('SOUTH_AMERICA') }>South America</Button>

        <Card>
          <Card.Body className="card-body">

            {(focusCountry === 'NOT_SET') && <Card.Title className="card-title">Select a country</Card.Title>}
            {countries[focusCountry] && <Card.Title className="card-title">{countries[focusCountry].name} in {getFullMonthName(month)}</Card.Title>}
            {countries[focusCountry] && <Card.Text className="card-text">{countries[focusCountry].description}</Card.Text>}
          </Card.Body>
        </Card>

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
          <Container className="p-3 legend-container">
            <div className="legend-mobile">
              <ul>
                <li className="red">Scorching</li>
                <li className="yellow">Warm</li>
                <li className="green">Pleasant</li>
                <li className="turquoise">Cool</li>
                <li className="blue">Frigid</li>
              </ul>
            </div>
            <SmallMap countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>
          </Container>
        </MediaQuery>
        <MediaQuery minWidth={800}>
          <WideMap countries={countries} region={region} onCountryHover={handleFocusCountryChange}/>
        </MediaQuery>

        <MediaQuery maxWidth={799}>
          <ButtonGroup className="mb-2">
            <Button className={ month === 'JAN' ? "active" : "" } onClick={ () => handleMonthChange('JAN') }>Jan</Button>
            <Button className={ month === 'FEB' ? "active" : "" } onClick={ () => handleMonthChange('FEB') }>Feb</Button>
            <Button className={ month === 'MAR' ? "active" : "" } onClick={ () => handleMonthChange('MAR') }>Mar</Button>
            <Button className={ month === 'APR' ? "active" : "" } onClick={ () => handleMonthChange('APR') }>Apr</Button>
            <Button className={ month === 'MAY' ? "active" : "" } onClick={ () => handleMonthChange('MAY') }>May</Button>
            <Button className={ month === 'JUN' ? "active" : "" } onClick={ () => handleMonthChange('JUN') }>Jun</Button>
          </ButtonGroup>
          <sp/>
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
      <Footer/>
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