import React from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.css';

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
                              <h1>Now Leasing for 2022-2023</h1>
                              <p>Affordable Lavish Apartments</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                        <img
                              className="d-block w-100"
                              src="https://source.unsplash.com/P1yhKnirSHs"
                              height={500}
                        />
                        <Carousel.Caption>
                              <h1>Now Leasing for 2022-2023</h1>
                              <p style={{color:"black"}}>Affordable Lavish Apartments</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
            <h2 style={{fontFamily:'monospace'}} className=''>Explore us</h2>
            <Container>
                  <Row className='mb-5'>
                        <Col className='offset-1'>
                              <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                    <Card.Img variant="left" src="https://source.unsplash.com/VdhANniicic" />
                                    <Card.Body>
                                    <Card.Title>Availability</Card.Title>
                                    <Card.Text >
                                          <div className='justify-content-start'>Interested in moving-in? Select a date to mathc our listings.</div>
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
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                    </Card.Text>
                                    </Card.Body>
                              </Card>
                        </Col>
                        <Col >
                              <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                    <Card.Img variant="left" src="https://source.unsplash.com/0QV-TNY8Mu4" />
                                    <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                    </Card.Text>
                                    </Card.Body>
                              </Card>
                        </Col>
                  </Row>
                  <Row className='mb-5'>
                  <Col className='offset-2'>
                  <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                        <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src="holder.js/100px180" />
                              <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                        </Card>
                  </Col>
                  </Row>
            </Container>
      </div>
  )
}

export default Home