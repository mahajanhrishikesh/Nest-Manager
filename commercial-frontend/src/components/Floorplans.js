import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';

import 'bootstrap/dist/css/bootstrap.css';
import {Accordion, Badge, Carousel, Card, Button, Container, Row, Col} from 'react-bootstrap';


// Styles
// import './styles/floorplans.css';

// Floorplans
let twoBed = [
      {     
            title: "The Forest Walk",
            plan: "http://www.crgliving.com/photos/floorplans/summit/2_bedroom_1_bath.jpg",
            price: "$1,250",
            sqrFt: "960 square feet"
      },

      {
            title: "The Mountaineer",
            plan: "http://www.rbahomes.com/images/FloorPlans/floor%20plan%20The%20Sandpiper.jpg",
            price: "$1,600",
            sqrFt: "1200 square feet"
      },
]

let oneBed = [
      {
            title: "The Cave",
            plan: "https://i.etsystatic.com/16380591/r/il/c38f17/2578010747/il_794xN.2578010747_8k95.jpg",
            price: "$1,000",
            sqrFt: "750 square feet"
      },

      {
            title: "The Cliffside",
            plan: "https://cdngeneral.rentcafe.com/dmslivecafe/3/662439/p0671372_1Bedroom_2_Floorplan.jpg?quality=85?quality=70&width=1400",
            price: "$1,050",
            sqrFt: "800 square feet"
      },
]

let studio = [
      {
            title: "The Cove",
            plan: "https://doorpinecrest.com/images/floorplans/studio.jpg",
            price: "$700",
            sqrFt: "650 square feet"
      },

      {
            title: "The Field",
            plan: "https://www.harrisonglendale.com/wp-content/uploads/2017/05/Harrison_Plan-S1.png",
            price: "$650",
            sqrFt: "607 square feet"
      },
]

const Floorplans = () => {

  return (
    <div className="bg-light">
          <div className='mt-20 display-2 ' style={{fontFamily: "Ms Madi"}}>Our Floor Plans</div>
          <div className='offset-1 mt-10' style={{width:'80%'}}>
          <Accordion bg="dark" className='mb-10' defaultActiveKey={['0']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                  <Accordion.Header><h5>Two Bedroom</h5></Accordion.Header>
                  <Accordion.Body>
                        <Container>
                              <Row>
                                    <Col className='offset-1'>
                                          <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                                <Card.Img variant="left" src="http://www.crgliving.com/photos/floorplans/summit/2_bedroom_1_bath.jpg" />
                                                <Card.Body>
                                                <Card.Title>The Forest Walk</Card.Title>
                                                <Card.Text>
                                                      <h5 >Area <Badge bg="dark">960 sq. ft.</Badge></h5>
                                                      <h5 >Price <Badge bg="secondary">$1,250</Badge></h5>
                                                </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                                    <Col className='offset-1'>
                                          <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                                <Card.Img variant="left" src="http://www.rbahomes.com/images/FloorPlans/floor%20plan%20The%20Sandpiper.jpg" />
                                                <Card.Body>
                                                <Card.Title>The Mountaineer</Card.Title>
                                                <Card.Text >
                                                      <h5 >Area <Badge bg="dark">1,200 sq. ft.</Badge></h5>
                                                      <h5 >Price <Badge bg="secondary">$1,600</Badge></h5>
                                                </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                              </Row>
                        </Container>
                  </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                  <Accordion.Header><h5>One Bedroom</h5></Accordion.Header>
                  <Accordion.Body>
                        <Container>
                              <Row>
                                    <Col className='offset-1'>
                                          <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                                <Card.Img variant="left" src="https://i.etsystatic.com/16380591/r/il/c38f17/2578010747/il_794xN.2578010747_8k95.jpg" />
                                                <Card.Body>
                                                <Card.Title>The Cave</Card.Title>
                                                <Card.Text >
                                                      <h5 >Area <Badge bg="dark">750 sq. ft.</Badge></h5>
                                                      <h5 >Price <Badge bg="secondary">$1,000</Badge></h5>
                                                </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                                    <Col className='offset-1'>
                                          <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                                <Card.Img variant="left" src="https://cdngeneral.rentcafe.com/dmslivecafe/3/662439/p0671372_1Bedroom_2_Floorplan.jpg?quality=85?quality=70&width=1400" />
                                                <Card.Body>
                                                <Card.Title>The Cliffside</Card.Title>
                                                <Card.Text >
                                                      <h5 >Area <Badge bg="dark">800 sq. ft.</Badge></h5>
                                                      <h5 >Price <Badge bg="secondary">$1,050</Badge></h5>
                                                </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                              </Row>
                        </Container>
                  </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                  <Accordion.Header><h5>Studio Apartment</h5></Accordion.Header>
                  <Accordion.Body>
                        <Container>
                              <Row>
                                    <Col className='offset-4'>
                                          <Card style={{ width: '20rem'}} className='shadow' bg='light' text='dark'>
                                                <Card.Img variant="left" src="https://doorpinecrest.com/images/floorplans/studio.jpg" />
                                                <Card.Body>
                                                <Card.Title>The Cove</Card.Title>
                                                <Card.Text >
                                                      <h5 >Area <Badge bg="dark">600 sq. ft.</Badge></h5>
                                                      <h5 >Price <Badge bg="secondary">$650</Badge></h5>
                                                </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Col>
                              </Row>
                        </Container>
                  </Accordion.Body>
                  </Accordion.Item>
            </Accordion>
          </div>            
      </div>
  )
}

export default Floorplans