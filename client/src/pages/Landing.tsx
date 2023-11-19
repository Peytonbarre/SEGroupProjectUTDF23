import React from 'react';
import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Home } from './Home';
import '../styling/glasscard.css'
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { Link } from 'react-router-dom';

export function Landing() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  const colorValues = ['#EEDFFC', '#5645BA', '#F1DAEE', '#A566C7']

  return (
    <div
      // style={{
      //   position: 'fixed',
      //   width: '100vw',
      //   height: '100vh',
      //   background: 'linear-gradient(to top right, #EEDFFC, #5645BA)',
      // }}
    >
            <BackgroundAnimation/>

      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
                value: colorValues,
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: 5,
            },
            opacity: {
              value: { min: 0.75, max: 0.85 },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 150, max: 250 },
            },
            shadow: {
                blur: 30,
                color: 'rgba(86, 69, 186, 0.1)',
                enable: false
            },
          },
          detectRetina: true,
        }}
      /> */}
      <div className='glass-card-container'>
        <Card className='glass-card'>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Row className="align-items-center">
                    <Col className="ms-5 mt-4">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1 className="navbar-logo mb-0 font-weight">Classmeet</h1>
                        </Link>
                    </Col>
                    <Col xs lg="3" className="mt-4 mb-1 d-flex justify-content-center">
                        <Button variant="secondary" size='lg' className="me-2 text-light" href="/signup">Signup</Button>
                        <Button variant="secondary" size='lg' className="ms-2 text-light" href="/login">Login</Button>
                    </Col>
                </Row>
                {/* HERE */}
                <Row className="my-5 mx-4 align-items-center flex-grow-1">
                    <Col>
                      <h1 className="big-title">Collaborate with others</h1>
                      <h1 className="small-title">and conquer your classes</h1>
                      <p className="landing-text lh-1 mt-5">School can be stressful. Be productive by collaborating with</p>
                      <p className="landing-text lh-1">classmates and sharing resources</p>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center mt-5" xs lg="5">
                      <img src={require('../assets/bubble.png')} style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))" }}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
      </div>
    </div>
  );
}
