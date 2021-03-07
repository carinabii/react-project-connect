import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Login = () => {
return (
    <div>
        <Container className="mt-5">

    
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Enter your phone number" />
    
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Container>
</div>
);
}; 

export default Login;