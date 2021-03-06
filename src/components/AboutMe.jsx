import React, { Component } from 'react';
import Contact from './Contact';
import { Container, Row, Col } from 'react-bootstrap'
import { summary } from '../alltext.json'
import '../styles/AboutMe.scss';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id='about' className='section'>
        <Row>
          <Col sm={4} className='picture-wrapper'>
            <img
              src={require('../images/Picture1.jpg')}
              alt='Me in my apartment!'
              id='mypic'
            />
          </Col>

          <Col className='summary' sm={8}>
            <h1 className='header'> about me </h1>
            <div className='text summary-text'>
            { summary }
            </div>
            <Contact />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
