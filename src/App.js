import Header from './components/Header'
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';




function App() {
  function login(){
    ReactDOM.render(
      <div id='login'>      
      <Header />
      <form id="loginForm">
        <label htmlFor="phoneNum">Phone Number:</label>
        <input type="text" id="phoneNum"/>
        <br/>
        <label htmlFor="verify">Verification Code</label>
        <input type="text" id="verify"/>
        <br/>
        <Button id="submitLogin">Submit</Button>
      </form>
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
      <h1>Hello! </h1>
      <h1>Welcome to Project Connect.</h1>
      <p>What are your interests?</p>
      <form id="interestForm">
        <Button id="cooking">Cooking</Button>
        <Button id="sports">Sports</Button>
        <br/>
        <br/>
        <Button id="music">Music</Button>
        <Button id="gardening">Gardening</Button>
        <br/>
        <br/>
        <Button id="knitting">Knitting</Button>
        <Button id="history">History</Button>
        <br/>
        <br/>
        <Button id="submitInterests">Submit</Button>
      </form>
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

    </div>
    
  );
}




export default App
