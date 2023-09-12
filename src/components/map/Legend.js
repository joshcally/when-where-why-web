import React from "react";
import './Legend.css';
import MediaQuery from 'react-responsive'

function Legend() {

  return (
    <div>

      <MediaQuery minWidth={800}>
        <div className="legend">
           <ul>
             <li className="red">Scorching</li>
             <li className="yellow">Warm</li>
             <li className="green">Pleasant</li>
             <li className="turquoise">Cool</li>
             <li className="blue">Frigid</li>
           </ul>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={799}>
        <div className="legend-mobile">
          <ul>
            <li className="red">Scorching</li>
            <li className="yellow">Warm</li>
            <li className="green">Pleasant</li>
            <li className="turquoise">Cool</li>
            <li className="blue">Frigid</li>
          </ul>
        </div>
      </MediaQuery>

    </div>
  );
}

export default Legend;