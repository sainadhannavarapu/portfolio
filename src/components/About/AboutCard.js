import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sainadh Annavarapu </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br /> I am a final year student pursuing Computer Science Degree
            at Velagapudi Ramakrishna Siddhartha Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
          </ul>

          
          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
