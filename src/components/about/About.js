import React from "react";
import './About.css';

function About() {

  return (
    <div className="about">
      <h1>About</h1>
      <h2>Where I&#39;ve Been</h2>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1cQIlMMNqd7HwvoRXwDTkrnvAs5l-Z91t&ehbc=2E312F" width="640" height="480" />
      <br/>
      <h2>Projects</h2>
      <a className="bees-keys-icon" href="https://apps.apple.com/us/app/bees-keys-first-piano-lesson/id1608004053?itscg=30200&amp;itsct=apps_box_appicon">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e0/11/99/e01199a0-8283-aa01-47a3-5cc1654d6c48/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/540x540bb.jpg" alt="Bees Keys - First Piano Lesson" />
      </a>
      <br/>
      <a className="bees-keys-link" href="https://apps.apple.com/us/app/bees-keys-first-piano-lesson/id1608004053?itsct=apps_box_badge&amp;itscg=30200">
        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1644883200" alt="Download on the App Store"/>
      </a>
    </div>
  );
}

export default About;