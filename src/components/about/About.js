import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import profile from '../../josh.jpg';
import intervalJump from '../../interval-jump.png';
import whenWhereWhy from '../../when-where-why.png';
import pdf from '../../documents/resume.pdf';

function About() {
  useEffect(() => {
          AOS.init();
        }, [])
  return (
    <div className="about">
      <div class="backgrounds overlay">
    	  <div class="background" data-aos="fade-in" data-aos-duration="1500"></div>
      </div>
      <header class="hero">
        <div class="hero-center">
          <h1 class="hero-logo" data-aos="zoom-in">nice to meet you.</h1> <h1 data-aos="zoom-in">I&#39;m Josh Callahan</h1>
        </div>
      </header>

      <Container className="p-3">
      <Row className="justify-content-md-center">
        <h1 class="hero-logo" data-aos="fade-down">about</h1>
      </Row>

      <Row className="justify-content-md-center">
        <div className="custom-card" data-aos="fade-up">
          <img class="hero-image-left" src={profile} />
          <div className="custom-card-content">
            <div className="description">I&#39;m a full stack software engineer with 5 years of experience developing distributed systems & APIs in the travel industry.</div>
            <a href = {pdf} target = "_blank">View Resume</a>
          </div>
        </div>
      </Row>


      <Row className="justify-content-md-center">
        <h1 class="hero-logo" data-aos="fade-down">projects</h1>
      </Row>

      <Row>
        <div className="custom-card" data-aos="fade-right">
          <a className="bees-keys-icon" href="https://apps.apple.com/us/app/bees-keys-first-piano-lesson/id1608004053?itscg=30200&amp;itsct=apps_box_appicon">
            <img rounded width="100%" class="hero-image-left" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e0/11/99/e01199a0-8283-aa01-47a3-5cc1654d6c48/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/540x540bb.jpg" alt="Bees Keys - First Piano Lesson" />
          </a>
          <div className="custom-card-content">
            <h3>Bees Keys</h3>
            <div className="description">Bees Keys is a simple and fun iOS app that helps beginner piano students associate key names with their location on the piano. Parents and music teachers can use it as a perfect supplement to a student&#39;s very first piano lesson.</div>
            <a className="bees-keys-link" href="https://apps.apple.com/us/app/bees-keys-first-piano-lesson/id1608004053?itsct=apps_box_badge&amp;itscg=30200">
              <img className="hero-image" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1644883200" alt="Download on the App Store"/>
            </a>
          </div>
        </div>
      </Row>

      <Row>
        <div className="custom-card" data-aos="fade-left">
          <div className="custom-card-content">
            <h3>Interval Jump (Coming Soon!)</h3>
            <div className="description">Interval Jump can speed up your music reading ability by giving you practice recognizing the intervals between notes with a fun game.</div>
          </div>
          <img data-aos="fade-left" className="hero-image-right" src={intervalJump} rounded/>
        </div>
      </Row>

      <Row>
        <div className="custom-card" data-aos="fade-right">
          <img class="hero-image-left" src={whenWhereWhy}/>
          <div className="custom-card-content">
            <h3>When Where Why</h3>
            <div className="description">When Where Why is a data visualization tool that offers at-a-glance travel destination information to help research the ideal season to visit. Trip planning starts here - Give it a try!</div>
          </div>
        </div>
      </Row>

      <Row className="justify-content-md-center">
        <h1 class="hero-logo" data-aos="fade-down">where i&#39;ve been</h1>
      </Row>

      <Row className="justify-content-md-center">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1cQIlMMNqd7HwvoRXwDTkrnvAs5l-Z91t&ehbc=2E312F" width="640" height="480" />
      </Row>

      </Container>
    </div>
  );
}

export default About;