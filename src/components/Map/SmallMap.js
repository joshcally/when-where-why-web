import './SmallMap.css';
import Africa from './Africa.js'
import Asia from './Asia.js'
import SmallEurope from './SmallEurope.js'
import NorthAmerica from './NorthAmerica.js'
import SouthAmerica from './SouthAmerica.js'

function SmallMap({ countries, region, onCountryHover }) {

  return (
    <div className="map-wrapper">
      {(region === 'AFRICA') && <Africa countries={countries}/>}
      {(region === 'ASIA') && <Asia countries={countries}/>}
      {(region === 'EUROPE') && <SmallEurope countries={countries} onCountryHover={onCountryHover}/>}
      {(region === 'NORTH_AMERICA') && <NorthAmerica countries={countries} onCountryHover={onCountryHover}/>}
      {(region === 'SOUTH_AMERICA') && <SouthAmerica countries={countries} onCountryHover={onCountryHover}/>}
    </div>
  );
}

export default SmallMap;