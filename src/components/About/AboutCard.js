import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">About us </span>
            <br />
            <br />
            Bringing you a <span className="purple">modern</span>, <span className="purple">comfortable</span> and <span className="purple"> connected </span>
            travel experience is one of our highest priorities and that’s why we continuously try to improve your experience when you book anything with us.
            <br />
            <br />
            <span className="purple">About us </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> We sell flight tickets, cheap flight tickets of Vietnamese local airlines such as: Vietjet Air, Jetstar Pacific, Vietnam Airlines
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> At MyFlight you can search and compare flights for free with the options of all available airlines at competitive price.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Search for Domestic Flights in Vietnam and Popular Route Searches with the best deals only at MyFlight!
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
