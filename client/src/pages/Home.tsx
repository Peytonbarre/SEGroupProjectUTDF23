import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { BackgroundAnimation } from '../components/BackgroundAnimation';

export function Home() {
  // PEYTON BARRE
  return (
    <>
      <Navbar />
      <Container>
        <Row id="home">
          <Col className="text-center">
            <h1 className="display-6 fw-bold mt-5">Bringing Students Together.</h1>
            <h1 className="display-6">One class at a time.</h1>
          </Col>
        </Row>
        <Row className="mt-4 pb-3 d-flex align-items-end">
          <Col className="text-center mt-5 mx-4">
            <Image src={require('../assets/orange-friend.png')} className="mw-100"></Image>
            <h4 className="display-5 fs-2 mt-2">Make Friends</h4>
            <h5 className="display-4 fs-5 text-justify">
              With ClassMeet, you are able to discover other students with similar schedules. We aim
              to create an environment that motivates communication, collaboration, and friendship
            </h5>
          </Col>
          <Col className="text-center mx-4">
            <Image src={require('../assets/blue-study.png')} className="mw-100"></Image>
            <h4 className="display-5 fs-2 mt-2">Study Smart</h4>
            <h5 className="display-4 fs-5 text-justify">
              ClassMeet reinforces smart studying by keeping students up to date on assignments,
              exams, and projects. Our open-communication environment allows open-streams for
              academic resources to be shared
            </h5>
            <Col className="text-center mt-5">
              <Button variant="primary" size="lg" className="me-4" href="/signup">
                Get Started
              </Button>
              <Button variant="secondary" size="lg" href="/login">
                Log In
              </Button>
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
        
        <Row className="mt-5">
          <Col md={8} className="mt-5">
            <h1 className="fs-1 fw-bold" id="about">
              About ClassMeet
            </h1>
            <h1 className="display-6">How we started, what we do, where we'll go.</h1>
            <h5 className="display-4 fs-5 text-justify mt-3">
              ClassMeet is the result of a collaborative effort by a dedicated group of software
              engineering students who understand the importance of making connections in the
              academic world. Designed as a response to the challenges students face in today's
              educational landscape, ClassMeet leverages your class schedule to connect you with
              peers who share your academic journey.
            </h5>
            <h5 className="display-4 fs-5 text-justify mt-3">
              Our mission is to bring students together, one class at a time. With ClassMeet, you
              can join chatrooms tailored to your class schedule, enabling you to engage in academic
              discussions, share photos, and collaborate effortlessly. But it's not just about
              coursework; it's about building lasting friendships that enrich your college
              experience. Simplify your schedule, free up your time, and make lifelong connections
              with ClassMeet.
            </h5>
            <h5 className="display-4 fs-5 text-justify mt-3">
              Join us today, and let's redefine the way students connect and collaborate.
            </h5>
          </Col>
          <Col className="text-end mt-5">
            <Image
              src={require('../assets/logo.png')}
              style={{ maxWidth: '400px', height: 'auto' }}
              fluid
              rounded
            ></Image>
          </Col>
        </Row>
        <Row md={4} className="mt-5" id="group">
          <Col>
            <h1 className="fs-1 fw-bold mb-4" id="about">
              Meet the Group
            </h1>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col className="text-center">
            <Image
              src={require('../assets/peyton.jpg')}
              style={{
                maxWidth: '275px',
                height: '275px',
                borderRadius: '50px',
                objectFit: 'fill',
              }}
            ></Image>
            <h2 className='display-6 mt-3 pb-2'>Peyton</h2>
            <h2 className='display-4 fs-5 text-justify'>Data Engineering</h2>
            <h2 className='display-4 fs-5 text-justify pb-5'>Fort Worth, TX</h2>
          </Col>
          <Col className="text-center">
            <Image
              src={require('../assets/mavir.JPG')}
              style={{
                maxWidth: '275px',
                height: '275px',
                borderRadius: '50px',
                objectFit: 'fill',
              }}
            ></Image>
            <h2 className='display-6 mt-3 pb-2'>Manvir</h2>
            <h2 className='display-4 fs-5 text-justify'>Cybersecurity</h2>
            <h2 className='display-4 fs-5 text-justify pb-5'>Chandigarh, India</h2>
          </Col>
          <Col className="text-center">
            <Image
              src={require('../assets/mageto.JPG')}
              style={{
                maxWidth: '275px',
                height: '275px',
                borderRadius: '50px',
                objectFit: 'fill',
              }}
            ></Image>
            <h2 className='display-6 mt-3 pb-2'>Mageto</h2>
            <h2 className='display-4 fs-5 text-justify'>Data Science + PM</h2>
            <h2 className='display-4 fs-5 text-justify pb-5'>Jersey City, NJ</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Image
              src={require('../assets/kero.JPG')}
              style={{
                maxWidth: '275px',
                height: '275px',
                borderRadius: '50px',
                objectFit: 'fill',
              }}
            ></Image>
            <h2 className='display-6 mt-3 pb-2'>Kero</h2>
            <h2 className='display-4 fs-5 text-justify'>DevOps Engineering</h2>
            <h2 className='display-4 fs-5 text-justify pb-5'>Abu Dhabi, UAE</h2>
          </Col>
          <Col className="text-center">
            <Image
              src={require('../assets/manoj.JPG')}
              style={{
                maxWidth: '275px',
                height: '275px',
                borderRadius: '50px',
                objectFit: 'fill',
              }}
            ></Image>
            <h2 className='display-6 mt-3 pb-2'>Manoj</h2>
            <h2 className='display-4 fs-5 text-justify'>AI + Machine Learning</h2>
            <h2 className='display-4 fs-5 text-justify pb-5'>Parkland, FL</h2>
          </Col>
          <Col className="text-center">
            <Image
              src={require('../assets/manas.jpg')}
              style={{
                maxWidth: '275px',
                height: '275px',
                borderRadius: '50px',
                objectFit: 'fill',
              }}
            ></Image>
            <h2 className='display-6 mt-3 pb-2'>Manas</h2>
            <h2 className='display-4 fs-5 text-justify'>AI</h2>
            <h2 className='display-4 fs-5 text-justify pb-5'>Houston, TX</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
