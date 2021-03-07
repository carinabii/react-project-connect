import React from "react";
import { Card, Col } from "react-bootstrap";

// Define the resource card object
const  PeopleCard = ({ name, image, imageALT }) => (
  <Col md="3">
      <Card
        className="people__rounded-card"
      >
        <label className="resources__card-label"> {name} </label>
        <Card.Img
          variant="top"
          src={image}
          alt={imageALT}
          
          className="people__rounded-card"
        />
      </Card>

  </Col>
);

export default PeopleCard;
