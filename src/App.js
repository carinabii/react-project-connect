import Header from './components/Header'
import Btn from './components/Btn'
import InputBox from './components/InputBox'

import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';


function App() {
  function login(){
    // figure out how to store data into a database after every submit button is clicked.
    ReactDOM.render(
      <div id='login'>      
      <Header />
      <Form>
        <Form.Group controlId="basicPhone">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="text" placeholder="(909) 386-4938">
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
          <Form.Label>What's your name?:</Form.Label>
          <Form.Control type="text" placeholder="Wanda Vision">
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>What's your phone number?</Form.Label>
          <Form.Control type="text" placeholder="(909) 384-5389">
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>What's your email?</Form.Label>
          <Form.Control type="email" placeholder="wandavision@xxx.ca">
          </Form.Control>
        </Form.Group>


        <Button onClick={interests} variant="secondary" type="submit">Submit</Button>
      </Form>

      {/* <form id="registerForm">
        <label htmlFor="name">What's your name?</label>
        <input type="text" id="name" placeholder="Wanda Vision"/>
        <br/>
        <label htmlFor="num">What's your phone number?</label>
        <input type="text" id="num" placeholder="(909) 344-3638"/>
        <br/>
        <label htmlFor="email">What's your email?</label>
        <input type="text" id="email" placeholder="wandavision@gmail.com"/>
        <br/>
        <Button id="submitRegistration" onClick={interests}>Submit</Button>
      </form> */}
      </div>,
       document.getElementById('Container'));
  
  }

  function interests(){
    ReactDOM.render(
      <div id='interest'>      
      <h1>What are your interests?</h1>
      <form id="interestForm">
        <Btn id="cooking" color="yellow" text="Cooking"/>
        <Btn id="sports" color="pink" text="Sports"/>
        <br/>
        <br/>
        <Btn id="music" color="pink" text="Music"/>
        <Btn id="gardening" color="yellow" text="Gardening"/>
        <br/>
        <br/>
        <Btn id="sports" color="yellow" text="Sports"/>
        <Btn id="history" color="pink" text="History"/>
        <br/>
        <br/>
        <Button id="submitInterests" onClick={platform}>Submit</Button>
      </form>
      </div>,
      document.getElementById('Container'));

  }

  function platform(){
    ReactDOM.render(
      <div id='platform'>      
      <h1>How would you like to communicate?</h1>
      <form id="communicationForm">
      <Button id="face">Face to Face</Button>
      <Button id="snailMail">Snail Mail</Button>
      <br/>
      <br/>
      <Button id="phone">Over the Phone</Button>
      <Button id="em">Email</Button>
      <br/>
      <br/>
      <Button id="submitPlatform" onClick={suggestions}>Submit</Button>
    </form>
    </div>,
    document.getElementById('Container'));

  }

  function suggestions(){
    // something that allows us to pull data from our database and sort by number of similar interests
    // print out and display best options
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
