import React from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.css';
import FbLogo from './assets/facebook.svg';
import IgLogo from './assets/instagram.svg';
import TwLogo from './assets/twitter.svg';
import { Carousel, Card, Button, Container, Row, Col} from 'react-bootstrap';

// Styles
// import "./styles/home.css";

// Data
import  prodItems  from '../data';


const Home = () => {
  return (
    <div className="page-wrapper">
            <div className='mb-5'>
                  <Carousel variant='light' style={{height:500}}>
                        <Carousel.Item interval={500}>
                        <img
                              className="d-block w-100"
                              src="https://source.unsplash.com/CzpuacTS3ys"
                              height={500}
                        />
                        <Carousel.Caption>
                              <h1 className='display-1 text-light'>Now Leasing for 2022-2023</h1>
                              <h3 className='display-5 text-light'>Affordable Lavish Apartments</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                        <img
                              className="d-block w-100"
                              src="https://source.unsplash.com/P1yhKnirSHs"
                              height={500}
                        />
                        <Carousel.Caption>
                              <h1 className='display-1 text-light'>Now Leasing for 2022-2023</h1>
                              <h3 className='display-5 text-dark'>Affordable Lavish Apartments</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
            <h1 className="display-4" style={{fontFamily:'Ms Madi'}}>Explore us</h1>
            <Container>
                  <Row className='mb-5'>
                        <Col className='offset-1'>
                              <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                    <Card.Img variant="left" src="https://source.unsplash.com/QJMKyrud5l8" />
                                    <Card.Body>
                                    <Card.Title>Availability</Card.Title>
                                    <Card.Text >
                                          <div style={{textAlign:"left"}}>Interested in moving-in? Select a date to match our listings.</div>
                                          <DatePicker/>
                                    </Card.Text>
                                    </Card.Body>
                              </Card>
                        </Col>
                        <Col>
                              <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                    <Card.Img variant="left" src="https://source.unsplash.com/0ZUoBtLw3y4" />
                                    <Card.ImgOverlay>
                                    </Card.ImgOverlay>
                                    <Card.Body>
                                    <Card.Title>Reviews</Card.Title>
                                    <Card.Text>
                                          Currently, there are no reviews submitted for this property. Please check back later.
                                    </Card.Text>
                                    </Card.Body>
                              </Card>
                        </Col>
                        <Col >
                              <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                    <Card.Img variant="left" src="https://source.unsplash.com/EQSPI11rf68" />
                                    <Card.Body>
                                    <Card.Title>Follow Us on Social Media</Card.Title>
                                    <Card.Text>
                                          <div className='text-center'>Follow us on instagram to see our latest updates, events, and more!</div>
                                          <a href='#'>
                                                <img className='mx-2' src={FbLogo} alt="Facebook Logo" />
                                          </a>
                                          <a href='#'>
                                                <img className='mx-2' src={IgLogo} alt="Instagram Logo" />      
                                          </a>
                                          <a href='#'>
                                                <img className='mx-2' src={TwLogo} alt="Twitter Logo" />
                                          </a>
                                    </Card.Text>
                                    </Card.Body>
                              </Card>
                        </Col>
                  </Row>
                  <Row className='mb-5'>
                  <Col className='offset-2'>
                  <Card style={{ width: '500px', height:'300px' }} className="shadow " bg='light'>
                        <div>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.3410793064913!2d-1.3899674844823662!3d53.37294648041993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48799d97071b117f%3A0xc5bfa7ef1848100a!2sParkview-Living%20Holiday%20and%20Short%20Let%20Apartment!5e0!3m2!1sen!2sus!4v1650399531589!5m2!1sen!2sus" width="500px" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                  </Card>
                  </Col>
                  <Col>
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="https://source.unsplash.com/LWP7l0zsNqs" />
                              <Card.Body>
                              <Card.Title>Amenities</Card.Title>
                              <Button className='align-self-left' href='/amenities' variant="primary">Explore</Button>
                              </Card.Body>
                        </Card>
                  </Col>
                  </Row>
            </Container>
      </div>
  )
}

export default Home