import React from "react";
import { Card, Col } from "react-bootstrap";

import Button from 'react-bootstrap/Button';

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
        <Button variant="primary">Schedule a meeting</Button>
      </Card>

  </Col>
);

export default PeopleCard;
