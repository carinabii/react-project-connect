import React from "react";
import { Card, Col } from "react-bootstrap";

// Define the resource card object
const  PeopleCard = ({ name, image, imageALT, text }) => (
  <Col md="3">
      <Card
        className="people__rounded-card" style={{width:'18rem'}}
      >
        
        <Card.Img
          variant="top"
          src={image}
          alt={imageALT}
          text={text}
          className="people__rounded-card"
        />
        <label className="resources__card-label"> {name} </label>
      </Card>

  </Col>
);

export default PeopleCard;
