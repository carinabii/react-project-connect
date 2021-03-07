import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {  CockroachDB_Placeholder } from "../data/peopleExamples.js";

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

const People = () => (
  <Container id="People" className="mt-5">
    <Row>
      <Col>
        <h1 className="font-weight-bold">Choose a person you'd like to connect with:</h1>
      </Col>
    </Row>
    <Row>
      { CockroachDB_Placeholder.map((CockroachDB_Placeholder) => (
        <PeopleCard
          name={CockroachDB_Placeholder.name}
    
          image={CockroachDB_Placeholder.image}
          imageAlt={CockroachDB_Placeholder.imageALT}
      
        />
      ))}
    </Row>
  </Container>
);

export default People;
