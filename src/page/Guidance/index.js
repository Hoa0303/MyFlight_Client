import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../components/Particle";

function Guidance() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Guidance</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      </Container>
    </Container>
  );
}

export default Guidance;
