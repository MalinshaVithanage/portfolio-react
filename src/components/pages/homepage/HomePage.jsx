import React from "react";
import NavBar from "../Navbar";
import Image from "react-bootstrap/Image";
import MyPhoto1 from "../../../assets/images/my-photo-1.jpeg";
import { Button, Container} from "react-bootstrap";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { IconContext } from "react-icons";
import About from "../About"
import Projects from "../projects/Projects";
function HomePage() {
  return (
    <div>
      <NavBar />
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <div className="hero-content-title ">
              Hello, It's Me : &nbsp;{" "}
              <div className="hero-content-name">Malinsha Vithanage</div>
            </div>

            <div className="hero-content-description mt-2">
              Full-Stack Software Engineer |<br /> Third-year undergraduate |
              Volunteer{" "}
            </div>
            <div className="hero-content-button mt-4">
              <Button variant="success">Download My CV</Button>
              {"          "}
              <Button variant="outline-success">Hire Me</Button>{" "}
            </div>
            <div className="social-media-logo mt-4">
              <IconContext.Provider value={{ color: "#57f064", size: "30px" }}>
                <a href="https://www.linkedin.com/in/malinsha-vithanage/">
                  {/* <Image src={LinkedInLogo}></Image> */}
                  <ImLinkedin className="social-media-icon" />
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#57f064", size: "30px" }}>
                <a href="https://stackoverflow.com/users/20555252/malinsha-vithanage">
                  {/* <Image src={StackOverFlowLogo}></Image> */}
                  < FaStackOverflow className="social-media-icon" />
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#57f064", size: "30px" }}>
                <a href="https://github.com/MalinshaVithanage">
                  {/* <Image src={GithubLogo}></Image> */}
                  <FaGithub className="social-media-icon" />
                </a>
              </IconContext.Provider>
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
     <About></About>
<Projects></Projects>

    </div>
  );
}

export default HomePage;
