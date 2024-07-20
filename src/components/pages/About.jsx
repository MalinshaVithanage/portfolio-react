import React, { useRef, useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Photo1 from "../../assets/images/my-photo-1.jpeg";
import Photo2 from "../../assets/images/my-photo-2.jpeg";
import Photo3 from "../../assets/images/my-photo-3.jpeg";
import { CgArrowBottomRightO } from "react-icons/cg";
function About() {
  return (
    <section className="about-me mt-5 mb-5">
      <Container>
        <div className="sign mt-3">
          <span class="fast-flicker">A</span>bout &nbsp;
          <span class="flicker"> M</span>e
        </div>
        <Row>
          <Col lg={7}>
            <div className="about-me-description mt-3">
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
            Education
            <CgArrowBottomRightO />
             </div>

           <div className="details">
            <div className="details-fact">
                <div className="detail-title">
                University Of Moratuwa, Sri Lanka
                </div>
                <div className="detail-description">
                B.Sc. (Hons) in Information Technology (2021 -2025)
                </div>
            </div>
            <div className="details-fact"> 
                <div className="detail-title">
                Southlands College, Galle, Sri Lanka
                </div>
                <div className="detail-description">
                (2005 - 2019)
                </div>
            </div>
            <div className="details-fact">
                <div className="detail-title">
                Institute of Software Engineering, Sri Lanka
                </div>
                <div className="detail-description">
                Diploma in Comprehensive Master Java Developer (2019 - 2020)
                </div>
            </div>
            <div className="details-fact">
                <div className="detail-title">
                Aquinas College, Sri Lanka
                </div>
                <div className="detail-description">
                (2019 - 2020)
                </div>
            </div>
            </div>
        </Card>
        </section>

      </Container>
    </section>
  );
}

export default About;
