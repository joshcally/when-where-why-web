import './Map.css';
import Legend from "./Legend.js";
import Europe from './Europe.js'
import Container from 'react-bootstrap/Container';

function Map({ countries, onCountryClick }) {

  return (
    <div>
        <Container className="map-container">
          <Legend />
          <div className="map-wrapper">
            <Europe countries={countries} onCountryClick={onCountryClick}/>
          </div>
        </Container>
    </div>
  );
}

export default Map;