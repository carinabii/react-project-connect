import React from "react";
import { Card, Col } from "react-bootstrap";

// Define the resource card object
const PeopleCard = ({ name, link, image, imageALT, text }) => (
  <Col md="3">
    
    <Card >
     
      <Card.Body className="people__rounded-card">
      <a href={link} className="people__rounded-card-link">  <Card.Img
          variant="top"
          src={image}
          alt={imageALT}
          text={text}
          className="people__rounded-card-pfp"
        /> 
</a> 
        <h4 className="people-card-label"> {name} </h4>
      </Card.Body>{" "}
  </Card>
  </Col>
);

export default PeopleCard;
