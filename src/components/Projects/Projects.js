import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              // imgPath={chatify}
              isBlog={false}
              title="THREE-LEAD ECG AND HEARTRATE VARIABILITY USING AD8232."
              description="Developed a mobile application with the help of an IOT device that analyzes a person’s heart rate variability using
              an electrocardiogram (ecg)."
              ghLink="https://github.com/sainadhannavarapu/Heart-Rate-Variability"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="DETECTION OF MENTAL STRESS LEVELS USING EEG SIGNALS"
              description="Developed a machine learning model that detects an individual’s stress level using electroencephalogram (eeg) data
              gathered while performing cognitive tasks."
              ghLink="https://github.com/sainadhannavarapu/EEG-Stress-Classification"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="E-COMMERCE APPLICATION USING JAVA"
              description="Developed a Java-based e-commerce application with a command-line interface, allowing users to browse and purchase
              products, while also saving purchase confirmations to a file."
              ghLink="https://github.com/sainadhannavarapu/Command-Line-E-Commerce-Application-Using-Java"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
