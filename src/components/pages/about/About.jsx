import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Photo1 from "../../../assets/images/my-photo-1.jpeg";
import Photo2 from "../../../assets/images/my-photo-2.jpeg";
import Photo3 from "../../../assets/images/my-photo-3.jpeg";
import { CgArrowBottomRightO } from "react-icons/cg";
import { MdCastForEducation } from "react-icons/md";
import { IconContext } from "react-icons";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";

function About() {
  return (

    <section className="about-me mt-5 mb-5">
      <Container>
        <div className="sign mt-3">
          <span className="fast-flicker">A</span>bout &nbsp;
          <span className="flicker"> M</span>e
        </div>
        <Row>
          <Col lg={7}>
            <div className="about-me-description mt-3 mb-3">
              As a third-year undergraduate at the Faculty of Information
              Technology, University of Moratuwa, I'm passionate about software
              engineering and eager to make a mark in the tech world. Equipped
              with a solid foundation in languages like Java, C, Spring Boot,
              Angular, React JS, and MySQL, I'm confident in tackling diverse
              challenges and crafting innovative solutions. My journey has
              instilled in me a strong work ethic, collaborative spirit, and
              unwavering dedication to learning and adapting. Driven by a thirst
              for knowledge and a desire to create impactful experiences, I'm
              excited to collaborate and contribute to meaningful projects.
              Let's connect and explore the possibilities together!
            </div>
          </Col>
          <Col lg={5}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={Photo1} className="about-me-photo"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Photo2} className="about-me-photo"></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Photo3} className="about-me-photo"></Image>
              </SwiperSlide>
              {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </Col>
        </Row>
        <section className="details-section mt-5">
          <Card>
            <div className="Box">
              <IconContext.Provider value={{ className: "icon-large icon-medium icon-small" }}>
                <MdCastForEducation />
              </IconContext.Provider>
              <div className="mt-3">Education</div>
              <CgArrowBottomRightO />
            </div>

            <div className="details">
              <div className="details-fact">
                <div className="detail-title">
                  B.Sc. (Hons) in Information Technology
                </div>
                <div className="detail-description">
                  University Of Moratuwa, Sri Lanka (2021 -2025)
                </div>
              </div>
              <div className="details-fact">
                <div className="detail-title">GCE Advanced Level</div>
                <div className="detail-description">
                  Southlands College, Galle, Sri Lanka (2005 - 2019)
                </div>
              </div>
              <div className="details-fact">
                <div className="detail-title">
                  Diploma in Comprehensive Master Java Developer
                </div>
                <div className="detail-description">
                  Institute of Software Engineering, Sri Lanka (2019 - 2020)
                </div>
              </div>
              <div className="details-fact">
                <div className="detail-title">
                  Certificate Course in English Language
                </div>
                <div className="detail-description">
                  Aquinas College, Sri Lanka (2019 - 2020)
                </div>
              </div>
              <div className="icon-container">
                <IconContext.Provider
                  value={{ color: "#000000", size: "30px" }}
                >
                  <a href="https://www.linkedin.com/in/malinsha-vithanage/">
                    <LuArrowUpRightSquare />
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </Card>
          <Card>
            <div className="Box">
              <IconContext.Provider value={{ className: "icon-large icon-medium icon-small"}}>
                <GrAchievement />
              </IconContext.Provider>
              <div className="mt-3">Achievements </div>
              <CgArrowBottomRightO />
            </div>

            <div className="details">
              <div className="details-fact">
                <div className="detail-title">
                  2nd Runner Up at PearlHack 2.0
                </div>
                <div className="detail-description">
                  Inter University Ul/UX Designathon, organized by IEEE WIE
                  Student Branch Affinity Group of SUSL
                </div>
              </div>
              <div className="details-fact">
                <div className="detail-title">
                  University Colours for Badminton 2022
                </div>
                <div className="detail-description">
                  Colours Award Ceremony 2022, University Of Moratuwa (2005 -
                  2019)
                </div>
              </div>

              <div className="icon-container">
                <IconContext.Provider
                  value={{ color: "#000000", size: "30px" }}
                >
                  <a href="https://www.linkedin.com/in/malinsha-vithanage/">
                    <LuArrowUpRightSquare />
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </Card>
          <Card>
            <div className="Box">
              <IconContext.Provider value={{ className: "icon-large icon-medium icon-small" }}>
              <MdOutlineWorkHistory />
              </IconContext.Provider>
              <div className="mt-3">Experience</div>
              <CgArrowBottomRightO />
            </div>

            <div className="details">
              <div className="details-fact">
                <div className="detail-title">Software Engineer Intern</div>
                <div className="detail-description">
                  Inivos (2024 - Present)
                </div>
              </div>
              <div className="details-fact">
                <div className="detail-title">
                  Chapter and Affinity Group Coordinator
                </div>
                <div className="detail-description">
                  IEEE Student Branch - University of Moratuwa(2023 - 2024)
                </div>
              </div>
              <div className="details-fact">
                <div className="detail-title">
                  IEEEXtreme Student Ambassador
                </div>
                <div className="detail-description">IEEEXtreme 18.0 (2024)</div>
              </div>
              <div className="details-fact">
                <div className="detail-title">Badminton Team player</div>
                <div className="detail-description">
                  University of Moratuwa, Sri Lanka
                </div>
                <div className="detail-description">
                  Southlands College, Sri Lanka
                </div>
              </div>
              <div className="icon-container">
                <IconContext.Provider
                  value={{ color: "#000000", size: "30px" }}
                >
                  <a href="https://www.linkedin.com/in/malinsha-vithanage/">
                    <LuArrowUpRightSquare />
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </Card>
        </section>
      </Container>
    </section>
  );
}

export default About;
