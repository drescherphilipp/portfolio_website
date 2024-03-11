import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from 'react-simple-typewriter'
import headerImg from "../../assets/img/header-img.svg";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const toRotate = ["programming", "cooking", "game development"];

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    {/* <span className="tagline">Welcome to my Portfolio</span> */}
                    <h1>{`Hi! I'm Philipp and I do quite a bit of:`}<br />
                      <span className="typewriter">
                        <div className="typewriterContainer">
                        <Typewriter
                          words={toRotate}
                          loop={false}
                          cursor
                          cursorStyle='_'
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                        </div>
     
                      </span>
                    </h1>
                    <p>
                      I'm currently studying game development and visual computing at the Technical University of Graz.
                      This field interests me in particular, because of the diverse range of skills it involves.
                      In addition to the technical aspect of game development, sound design fascinates me a lot.

                      Explore my website to see my work and feel free to reach out if you have any questions.
                    </p>
                    <HashLink to='#connect' style={{ textDecoration: 'none' }}>
                      <button>Contact <ArrowRightCircle size={25} /></button>
                    </HashLink>

                  </div>}
              </TrackVisibility>
            </Col>
            {/* <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Router>
  )
}
