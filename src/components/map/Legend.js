import React from "react";
import './Legend.css';

function Legend() {

  return (
    <div className="legend">
       <ul>
         <li className="red">Scorching</li>
         <li className="yellow">Warm</li>
         <li className="green">Pleasant</li>
         <li className="turquoise">Cool</li>
         <li className="blue">Frigid</li>
       </ul>
    </div>
  );
}

export default Legend;