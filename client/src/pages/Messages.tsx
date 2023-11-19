import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

export function Messages() {
  return (
    <div
      className="vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden"
      style={{ background: 'linear-gradient(to top right, #a1a5fe, #5645BA)' }}
    >
      <Row className="justify-content-center mb-4">
        <Col md="auto">
          <a
            href="/classes"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              outline: '0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
              }}
            >
              Classes
            </h3>
          </a>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: '2px solid #324E69', height: '75%' }} />
        </Col>
        <Col md="auto">
          <a
            href="/friends"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              outline: '0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
              }}
            >
              Friends
            </h3>
          </a>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: '2px solid #324E69', height: '75%' }} />
        </Col>
        <Col md="auto">
          <a
            href="/dashboard"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              outline: '0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
              }}
            >
              Dashboard
            </h3>
          </a>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: '2px solid #324E69', height: '75%' }} />
        </Col>
        <Col md="auto">
          <a
            href="/profile"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              outline: '0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
              }}
            >
              Profile
            </h3>
          </a>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: '2px solid #324E69', height: '75%' }} />
        </Col>
        <Col md="auto">
          <a
            href="/posts"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              outline: '0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
              }}
            >
              Posts
            </h3>
          </a>
        </Col>
      </Row>
      <Card
        style={{
          width: '90%',
          height: '80%',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
        }}
      >
        <Card.Body className="d-flex align-items-center p-0">
          <div
            className="m-0 p-3 d-flex flex-column justify-content-start"
            style={{
              width: '25%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50px 0 0 50px',
            }}
          >
            <Row className="my-3">
              <Col md="auto">
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '100px',
                    background: 'gray',
                  }}
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#263D54',
                    fontWeight: '500',
                    fontSize: '25px',
                  }}
                >
                  Manas Singh
                </h3>
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#263D54',
                    fontWeight: '500',
                    fontSize: '17px',
                  }}
                >
                  This is the last chat
                </h3>
              </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center my-2">
              <div
                style={{
                  borderTop: '1px solid #263D54',
                  width: '75%',
                }}
              />
            </Row>
            <Row className="my-3">
              <Col md="auto">
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '100px',
                    background: 'gray',
                  }}
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#263D54',
                    fontWeight: '500',
                    fontSize: '25px',
                  }}
                >
                  Manas Singh
                </h3>
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#263D54',
                    fontWeight: '500',
                    fontSize: '17px',
                  }}
                >
                  This is the last chat
                </h3>
              </Col>
            </Row>
          </div>
          <div className='d-flex align-items-end justify-content-center' style={{ width: '75%', height: '100%' }}>
            <Form style={{width: "90%"}}>
              <Row className='my-4'>
                <Col>
                  <Form.Group controlId="newMessage">
                    <Form.Control type="text" placeholder="Type your message..." />
                  </Form.Group>
                </Col>
                <Col md="auto">
                  <Button variant="secondary">Send</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
