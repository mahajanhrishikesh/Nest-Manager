import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Image, Row, Col} from 'react-bootstrap';
import FbLogo from './assets/facebook.svg';
import IgLogo from './assets/instagram.svg';
import TwLogo from './assets/twitter.svg';
import NmLogo from './assets/nm_logo.png';
// import './styles/footer.css'

const Footer = () => {
  return (
      <div className='bg-dark mt-10'>
            <Container className='py-5'>
                  <Row>
                        <Col>
                              <div className='text-left'>
                                    <div className='lead text-light'>Contact Us</div>
                                    <div className='text-light'>Parkview Living</div>
                                    <div className='text-light'>2218 Baker's Street</div>
                                    <div className='text-light'>London</div>
                              </div>
                        </Col>
                        <Col>
                              <div className='lead text-light'>Office Hours</div>
                              <div className='text-light'>Monday-Friday : 9 a.m. - 6 p.m.</div>
                              <div className='text-light'>Saturday : 9 a.m. - 1 p.m.</div>
                              <div className='text-light'>Sunday : Closed</div>
                              
                              
                        </Col>
                        <Col>
                              <div className='lead text-light'>Get Social</div>
                              <a href='#'>
                                    <img className='mx-2 ' src={FbLogo} alt="Facebook Logo" />
                              </a>
                              <a href='#'>
                                    <img className='mx-2 ' src={IgLogo} alt="Instagram Logo" />      
                              </a>
                              <a href='#'>
                                    <img className='mx-2 ' src={TwLogo} alt="Twitter Logo" />
                              </a>
                        </Col>
                        <Col>
                              <div className='lead text-light mb-2'>Managed By</div>
                              <img width={'300px'} src={NmLogo} alt="Nest Manager Logo" />
                        </Col>
                  </Row>
                  <Row>
                        <div></div>
                  </Row>
            </Container>
      </div>
  )
}

export default Footer