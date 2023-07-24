import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";






import AIss from "../../Assets/Projects/AIss.png";
import ChatSS from '../../Assets/Projects/ChatSS.png';
import netflixSS from '../../Assets/Projects/netflixSS.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIss}
              isBlog={false}
              title="AI image Generator"
              description="A Dall-E clone which generates image from user entered text, using Rich javascript frameworks like React, Node Js, MongoDB, and OpenAI's Open source API."
              ghLink="https://github.com/AmeyS56/DalleClone-ReactJs"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatSS}
              isBlog={false}
              title="Chat-GPT 3 clone."
              description="A sustainable and practice for a React developer, I have built chat GPT clone using React, TailwindCSS and OpenAI's API key which answers anything for user entered text prompt based questions. "
              ghLink="https://github.com/AmeyS56/ChatGPT3_clone"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixSS}
              isBlog={false}
              title="Full-Stack Netflix Clone"
              description="As a full stack developer, I built a full stack NETFLIX clone popular MERN Stack technologies. It includes all the functionalities of realtime NETFLIX app and it uses TMDB API for fetching #Real-Time Movies Data. It also comprises user LogIn LogOut functionality."
              ghLink="https://github.com/AmeyS56/netflix-UI"
                     
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
