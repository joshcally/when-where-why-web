import './Map.css';
import Legend from "./Legend.js";
import EuropeMobile from './EuropeMobile.js'
import EuropeDesktop from './EuropeDesktop.js'
import MediaQuery from 'react-responsive';
import Container from 'react-bootstrap/Container';

function Map({ countries, onCountryClick }) {

  return (
    <div>
      <MediaQuery maxWidth={799}>
        <Container className="map-container">
          <Legend />
          <div className="map-wrapper">
            <EuropeMobile countries={countries} onCountryClick={onCountryClick}/>
          </div>
        </Container>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <Legend />
        <div className="map-wrapper">
          <EuropeDesktop countries={countries} onCountryClick={onCountryClick}/>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Map;