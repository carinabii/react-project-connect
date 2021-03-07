import Header from "./components/Header";
import Btn from "./components/Btn";
import Button from "react-bootstrap/Button";
import { Container, Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleCard from "./components/people.js";
import elderlywoman from "./images/elderwoman.jpg";
import elderlywoman2 from "./images/eldw2.jpg";
import elderlyman from "./images/eldma.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import rogers from './images/rogers.png';
import ravi from './images/ravi.png';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import blush from './images/croods.png';
// eslint-disable-next-line no-lone-blocks
{
  /*import cmdfDesktop from "./images/cmdf.png";import React, {useState} from 'react';
import React, {useState} from 'react';
import InputBox from './components/InputBox';import Login from './components/login.js';*/
}

function App() {
  function login() {
    // figure out how to store data into a database after every submit button is clicked.
    ReactDOM.render(
      <div id="login">
        <Header />
        <Form>
       
          <Form.Group controlId="basicPhone">
            <Form.Label>Phone number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="(123) 456-7890"
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="basicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="wandavision@xxx.com"
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Button variant="secondary" id="submitPlatform" onClick={suggestions}> Submit <FontAwesomeIcon icon={faArrowRight} className="FontAwesomeIcon"/></Button>
        </Form>
       
      </div>,
      document.getElementById("Container"));
  }

  function register() {
    ReactDOM.render(
      <div id='register'>      
      <Header />
      <Form>
        <Form.Group controlId="firstname">
          <Form.Label>What's your first name?</Form.Label>
          <Form.Control type="text" placeholder="Wanda">
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>What's your last name?</Form.Label>
          <Form.Control type="text" placeholder="Vision">
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
        <br></br>
        <Button onClick={Container} variant="secondary" type="submit"><FontAwesomeIcon icon={faArrowLeft} className="FontAwesomeIcon"/> Go back</Button>  <Button onClick={interests} variant="secondary" type="submit">Submit <FontAwesomeIcon icon={faArrowRight} className="FontAwesomeIcon"/></Button>
      <br></br>
      </Form>

      </div>,
      document.getElementById("Container")
    );
  }

  function interests() {
    ReactDOM.render(

      <div id='interest'>      
      <h1>What are your <b>interests</b>?</h1><br></br>
      <Form>
        <Form.Group controlID="interestForm">
        <Row>
          <Col><Button id="cooking">Cooking</Button></Col>
          <Col><Button id="sports">Sports</Button></Col>
        </Row>
        <br/>
        <Row>
          <Col><Button id="music">Music</Button></Col>
          <Col><Button id="gardening">Gardening</Button></Col>
        </Row>
        <br/>

        <Row>
          <Col><Button id="knitting">Knitting</Button></Col>
          <Col><Button id="history">History</Button></Col>
        </Row>
        <br/>
        <Button onClick={register} variant="secondary" type="submit"><FontAwesomeIcon icon={faArrowLeft} className="FontAwesomeIcon"/> Go back</Button>  <Button variant="secondary" id="submitInterests" onClick={platform}> Next <FontAwesomeIcon icon={faArrowRight} className="FontAwesomeIcon"/></Button>
        <br></br>
      </Form.Group>
      </Form>
      {/* <form id="interestForm"> */}

        
      
        
      </div>,
      document.getElementById("Container"));
  }

  function platform() {
    ReactDOM.render(
      <div id="platform">
        <h1>How would you like to communicate?</h1>
        <br/>
        <Form>
          <Form.Group controlID="communicationForm">
          <Row>
            <Col>
            <Button id="face">Face to face</Button>
            </Col>
            <Col><Button id="snailMail">Snail mail</Button></Col>
          </Row>
          <br/>
          <Row>
            <Col><Button id="phone">Over the phone</Button></Col>
            <Col><Button id="em">Email</Button></Col>
          </Row>
          <br/>
          <Button id="submitPlatform" onClick={suggestions}>
            Submit
          </Button>
          </Form.Group>
        </Form>
      </div>,
      document.getElementById("Container")
    );
    }


  function suggestions() {
    const people = [
      {
        name: "Melvin Tang",
        image: elderlyman,
        imageALT: "Profile photo of Melvin Tang",
        link: "#",
      },
      {
        name: "Meryl Streep",
        image: elderlywoman,
        imageALT: "Profile photo of Meryl Streep",
        link: {personas},
      },
      {
        name: "Mae Ploy",
        image: elderlywoman2,
        imageALT: "Profile photo of Mae Ploy",
        link: "#",
      },
      {
        name: "Ravi Singh",
        image: ravi,
        imageALT: "Profile photo of Ravi Singh",
        link: "#",
      },
      {
        name: "Steve Rogers",
        image: rogers,
        imageALT: "Profile photo of Steve Rogers",
        link: "#",
      },
    ];

    ReactDOM.render(
      <div id="suggestions">
        <div className="pagination">
        <p>Home / <b>Connect</b></p>
      </div>
        <h1>People who share your interests</h1>
        <CardDeck>
          {people.map((people) => {
            return (
              <PeopleCard
                image={people.image}
                name={people.name}
                imageAlt={people.imageALT}
                 onClick={people.link}
                // onClick={personas}
                
              />
            );
          })}
        </CardDeck>
      </div>,
      document.getElementById("Container")
    );
  }

  function personas() {

  ReactDOM.render(
    <div id="personas">
      <div className="pagination">
      <p>Home / <b>Connect</b></p>
      </div>
      <h1>Meryl Streep's interests</h1>
      <div className="introduction">
          <img src= {elderlywoman} alt="Elderly woman smiling" className="Meryl"/>
          <div className="intro_text">
           <ul>
             <li>Cooking</li>
             <li>History</li>
             <li>Gardening</li>
             </ul>  </div>
             <p><b>Email:</b> mstreep@gmail.com</p>
     </div>
    </div>,
    document.getElementById("Container")
  );
}

  return (
    <div className="main">
      <div className="Container" id="Container">
      <Header />
        <div className="introduction">
          <img src={blush} alt="Blush design of two people interacting virtually" className="blush"/>
          <div className="intro_text">
            <h3>Bridging the generation gap, one human at a time.</h3>
            <p>Project Connect offers companionship opportunities for the senior community. This platform aims to combat senior isolation and create a safe space to match seniors and volunteers in one seamless online connection.</p>
            <div className="home-btns">
              <Button onClick={login} variant="secondary" type="submit"><FontAwesomeIcon icon={faArrowRight} className="FontAwesomeIcon"/> Log in
              </Button>
              <Button onClick={register} variant="secondary" type="submit"><FontAwesomeIcon icon={faLightbulb} className="FontAwesomeIcon"/> Register</Button>
              
            </div>
          </div>
        </div> 
        
  </div>
      <div className="footer">
        <h3>Source Code</h3>
        <ul className="FooterSources">
          <li><a href="https://github.com/carinabii/react-project-connect">GitHub</a></li>
          <li><a href="https://devpost.com/software/project-connect-26mv49">DevPost</a></li>
          <li><a href="https://www.figma.com/file/qb9fb23xYQHAQeufe5vK9V/cmd-f?node-id=2%3A179">Figma</a></li>
        </ul>
        <p>A cmd-f 2021 Project</p>
      </div>
    </div>
  );
}

export default App;
