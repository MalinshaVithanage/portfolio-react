import React from 'react';
import FlippingCard from './FlippingCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Project1 from "../../../assets/images/Projects images/icatcher.png";
import Project2 from "../../../assets/images/Projects images/internal_management_system.png";
import Project3 from "../../../assets/images/Projects images/POS _system.png"


function Projects() {
  return (
    <section className='projects-section'>
      <Container>
      <div className="sign mt-3">
          <span className="fast-flicker">L</span>atest &nbsp;
          <span className="flicker"> P</span>rojects
        </div>
        <Row className="fx-wrap">
        <Col md={6} lg={4} className="mb-4">
            <FlippingCard
              image={Project1}
              heading="Icatcher"
              frontText="ReactJS | Express JS | MongoDB"
              actionLink="https://github.com/orgs/tech-warriors-sl/repositories"
              backText={{
                heading: 'Icatcher',
                content:
                  "Icatcher helps companies find the best talent during online interviews and helps candidates find job opportunities easily, ensuring authenticity for both.",
              }}
            />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <FlippingCard
              image={Project2}
              heading="Internal Service Management System"
              frontText="Angular | Spring Boot | MySQL!"
              actionLink="https://github.com/Manipulus2023/Manipulus"
              backText={{
                heading: 'Internal Service Management System',
                content:
                  "A user-friendly web application to manage internal services, focusing on computerizing job creation, site visits, employee databases, and connecting company personnel, including managers, technicians, call operators, and drivers.",
              }}
            />
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <FlippingCard
              image={Project3}
              heading="POS System Frontend"
              frontText="ReactJS"
              actionLink="https://github.com/MalinshaVithanage/POS"
              backText={{
                heading: 'POS System Frontend',
                content:
                  "Developed React JS frontend for restaurant POS system, integrating with backend API for real-time data updates and building a responsive, user friendly UI.",
              }}
            />
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Projects;
