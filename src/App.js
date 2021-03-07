import Header from './components/Header'
import Btn from './components/Btn'
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/people.js';
// eslint-disable-next-line no-lone-blocks
{/*import React, {useState} from 'react';
import React, {useState} from 'react';
import InputBox from './components/InputBox';*/}


function App() {
  function login(){
    // figure out how to store data into a database after every submit button is clicked.
    ReactDOM.render(
      <div id='login'>      
      <Header />
      <Login/>
      {/*<form id="loginForm">
      <form id="loginForm">
        {/* <InputBox id="phoneNum" text="Phone Number:"/> 
        <label htmlFor="phoneNum">Phone Number:</label>
        <input type="text" id="phoneNum"/>
        <br/>
        <label htmlFor="verify">Verification Code</label>
        <input type="text" id="verify"/>
        <br/>
        <Button id="submitLogin" onClick={suggestions}>Submit</Button>
      </form>*/}
    
      </div>,
       document.getElementById('Welcome'));
  }

  function register(){
    ReactDOM.render(
      <div id='register'>      
      <Header />
      <form id="registerForm">
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
      </form>
      </div>,
       document.getElementById('Welcome'));
  
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
      document.getElementById('Welcome'));

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
      <Button id="em">email</Button>
      <br/>
      <br/>
      <Button id="submitPlatform" onClick={suggestions}>Submit</Button>
    </form>
    </div>,
    document.getElementById('Welcome'));

  }

  function suggestions(){
    // something that allows us to pull data from our database and sort by number of similar interests
    // print out and display best options
    ReactDOM.render(
      <div id='suggestions'>

      <People />
       </div>,
    document.getElementById('Welcome'));
  }

  return (
    <div id='Welcome'>  
      <Header />
      <Button onClick={login}>Log In</Button>
      <br/>
      <br/>
      <Button onClick={register}>Register</Button>
      <br/>
      <br/>
      <Button onClick={People}>People Test</Button>
      <br/>
      <br/>

    </div>
    
  );
}




export default App
