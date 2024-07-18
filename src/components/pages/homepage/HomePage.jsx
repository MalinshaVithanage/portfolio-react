import React from "react";
import NavBar from "../Navbar";
import Image from "react-bootstrap/Image";
import MyPhoto1 from "../../../assets/images/my-photo-1.jpeg";
import { Button, Container, Row, Col } from "react-bootstrap";
import LinkedInLogo from "../../../assets/icons/social-media-icons/linkedin.svg";
import GithubLogo from "../../../assets/icons/social-media-icons/github.svg";
import StackOverFlowLogo from "../../../assets/icons/social-media-icons/stack-overflow.svg";
function HomePage() {
  return (
    <div>
      <NavBar />
      <section className="hero-section">
        <Container>
          <div class="hero-content">
            <div className="hero-content-title ">
              Hello, It's Me : &nbsp;{" "}
              <div className="hero-content-name">Malinsha Vithanage</div>
            </div>

            <div className="hero-content-description mt-2">
              Full-Stack Software Engineer | Third-year undergraduate |
              Volunteer{" "}
            </div>
            <div className="hero-content-button mt-4">
              <Button variant="success">Download My CV</Button>
              {"          "}
              <Button variant="outline-success">Hire Me</Button>{" "}
            </div>
            <div class="social-media-logo">
              <Row>
                <Col>
                  {" "}
                  <a href="https://www.linkedin.com/in/malinsha-vithanage/">
                    <Image src={LinkedInLogo}></Image>
                  </a>
                </Col>
                <Col>
                  <a href="https://stackoverflow.com/users/20555252/malinsha-vithanage">
                    <Image src={StackOverFlowLogo}></Image>
                  </a>
                </Col>
                <Col>
                  <a href="https://github.com/MalinshaVithanage">
                    <Image src={GithubLogo}></Image>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
          <div className="my-photo-container glowing">
            <Image src={MyPhoto1} roundedCircle className="my-photo " />
            <div className="word word1">ReactJS</div>
            <div className="word word2">Angular</div>
            <div className="word word3">Spring Boot</div>
            <div className="word word4">Java</div>
            <div className="word word5">JavaScript</div>
            <div className="word word6">TypeScript</div>
            <div className="word word7">ML</div>
            <div className="word word8">MySQL</div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
