import React from "react";
import "./Summary.css";
import Card from 'react-bootstrap/Card';
import { AutoTextSize } from 'auto-text-size';

function Summary({isCountrySelected, countryName, month, summary}) {

  return (
      <Card className="country-summary">
        <Card.Body>
          {!isCountrySelected && <Card.Title>Trip Planning Starts Here</Card.Title>}
          {!isCountrySelected && <Card.Text>Select a country to get started</Card.Text>}
          {isCountrySelected && <Card.Title>{countryName} in {month}</Card.Title>}
          {isCountrySelected && <Card.Text><AutoTextSize as='span' mode='box' maxFontSizePx='28'>{(summary) === '' ? 'No data available' : summary}</AutoTextSize></Card.Text>}
        </Card.Body>
      </Card>
    );
}

export default Summary;