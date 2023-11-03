import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col className="text-center" id="home">
            <h1 className="display-6 fw-bold mt-5">Bringing Students Together.</h1>
            <h1 className="display-6">One class at a time.</h1>
          </Col>
        </Row>
        <Row className="mt-4 d-flex align-items-end">
          <Col className="text-center mt-5 mx-4">
            <div>
              <Image src={require('../assets/orange-friend.png')} className="mw-100"></Image>
              <h4 className="display-5 fs-2 mt-2">Make Friends</h4>
              <h5 className="display-4 fs-5 text-justify">
                With ClassMeet, you are able to discover other students with similar schedules. We
                aim to create an environment that motivates communication, collaboration, and
                friendship
              </h5>
            </div>
          </Col>
          <Col className="text-center mx-4">
            <Image src={require('../assets/blue-study.png')} className="mw-100"></Image>
            <h4 className="display-5 fs-2 mt-2">Study Smart</h4>
            <h5 className="display-4 fs-5 text-justify">
              ClassMeet reinforces smart studying by keeping students up to date on assignments,
              exams, and projects. Our open-communication environment allows open-streams for
              academic resources to be shared
            </h5>
            <Col className='text-center mt-5'>
                <Button variant='primary' size='lg' className="me-4" href="/signup">Get Started</Button>
                <Button variant='secondary' size='lg' href="/login">Log In</Button>
            </Col>
          </Col>
          <Col className="text-center mt-5 mx-4">
            <Image src={require('../assets/orange-calendar.png')} className="mw-100"></Image>
            <h4 className="display-5 fs-2 mt-2">Own Your Time</h4>
            <h5 className="display-4 fs-5 text-justify">
              Our advanced algorithms will parse a photo of your class schedules and automatically
              assign you to classes that you belong to, allowing you to use your time on more
              important things
            </h5>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center mt-4'>
            
        </Row>
      </Container>
    </>
  );
}
