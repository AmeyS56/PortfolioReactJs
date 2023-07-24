import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amey Vijay Suryawanshi </span>
            from <span className="purple"> Baramati, Maharashtra, India.</span>
            <br /> I am a final year student pursuing Bachelor of engineering (B.E.)
            in Computer Engineering at Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology, Baramati.
            <br />
            Additionally, I have done virtual internship at IBM as a Data Analyst and Full stack Web-developer at Nirmitee.io.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing E-sports Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
