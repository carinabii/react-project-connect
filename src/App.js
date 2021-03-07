import Header from './components/Header'
import Btn from './components/Btn'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Col , Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleCard from './components/people.js';
// eslint-disable-next-line no-lone-blocks
{/*import React, {useState} from 'react';
import React, {useState} from 'react';
import InputBox from './components/InputBox';import Login from './components/login.js';*/}







function App() {
  function login(){
    // figure out how to store data into a database after every submit button is clicked.
    ReactDOM.render(
      <div id='login'>      
      <Header />
      <Form>
        <Form.Group controlId="basicPhone">
          <Form.Label>Phone number:</Form.Label>
          <Form.Control type="text" placeholder="(123) 456-7890">
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="basicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="wandavision@xxx.com">
          </Form.Control>
        </Form.Group>
        <Button onClick={suggestions} variant="secondary" type="submit">Submit</Button>
      </Form>
      {/* <form id="loginForm">
        <label htmlFor="phoneNum">Phone Number:</label>
        <input type="text" id="phoneNum"/>
        <br/>
        <label htmlFor="verify">Verification Code</label>
        <input type="text" id="verify"/>
        <br/>
        <Button id="submitLogin" onClick={suggestions}>Submit</Button>
      </form> */}
      </div>,
       document.getElementById('Container'));
  }

  function register(){
    ReactDOM.render(
      <div id='register'>      
      <Header />
      <Form>
        <Form.Group controlId="name">
          <Form.Label>What's your name?</Form.Label>
          <Form.Control type="text" placeholder="Wanda Vision">
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>What's your phone number?</Form.Label>
          <Form.Control type="text" placeholder="(123) 456-7890">
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>What's your email?</Form.Label>
          <Form.Control type="email" placeholder="wandavision@xxx.ca">
          </Form.Control>
        </Form.Group>


        <Button onClick={interests} variant="secondary" type="submit">Submit</Button>
      </Form>

      </div>,
       document.getElementById('Container'));
  
  }

  function interests(){
    ReactDOM.render(
      <div id='interest'>      
      <h1>What are your interests?</h1>
      <Form>
        <Form.Group controlID="interestForm">
        <Row>
          <Col><Btn id="cooking" color="yellow" text="Cooking"/></Col>
          <Col><Btn id="sports" color="pink" text="Sports"/></Col>
        </Row>
        <br/>
        <Row>
          <Col><Btn id="music" color="pink" text="Music"/></Col>
          <Col><Btn id="gardening" color="yellow" text="Gardening"/></Col>
        </Row>
        <br/>

        <Row>
          <Col><Btn id="sports" color="yellow" text="Sports"/></Col>
          <Col><Btn id="history" color="pink" text="History"/></Col>
        </Row>
        <br/>
        <Button variant="secondary" id="submitInterests" onClick={platform}>Submit</Button>
      </Form.Group>
      </Form>
      {/* <form id="interestForm"> */}

        
      
        
      </div>,
      document.getElementById('Container'));

  }

  function platform(){
    ReactDOM.render(
      <div id='platform'>      
      <h1>How would you like to communicate?</h1>
      <form id="communicationForm">
      <Button id="face">Face to face</Button>
      <Button id="snailMail">Snail mail</Button>
      <br/>
      <br/>
      <Button id="phone">Over the phone</Button>
      <Button id="em">Email</Button>
      <br/>
      <br/> 
      <Button id="submitPlatform" onClick={suggestions}>Submit</Button>
    </form>
    </div>,
    document.getElementById('Container'));

  }

  function suggestions(){

    const people = [
      {
        name: "Melvin Tang",
        image: "https://unsplash.com/photos/rsMUNNy0Gk4",
        imageALT:
          "#",
      },
      {
        name: "Meryl Streep",
        image: "https://unsplash.com/photos/jBBaKSjhmqk",
        imageALT:
          "#",
      },
      {
        name: "Mae Ploy",
        image: "https://unsplash.com/photos/jBBaKSjhmqk",
        imageALT:
          "#",
      },
    ];

    ReactDOM.render(

    <div id="suggestions">
      <h1>Choose a person you'd like to connect with:</h1>
      <CardDeck>
  <Card>
    {
      people.map(people => {
        return <PeopleCard 
        image={people.image}
        name={people.name}
        imageAlt={people.imageALT}
        />
      })
    }
  </Card>
</CardDeck>
 </div>,
    document.getElementById('Container'));
  }

  return (
    <div className='Container' id='Container'>  
      <Header />
      <Button onClick={login} variant="secondary" type="submit">Log in</Button>
      <br/>
      <br/>
      <Button onClick={register} variant="secondary" type="submit">Register</Button>
    
      <br/>
      <br/>

    </div>
    
  );
}




export default App
