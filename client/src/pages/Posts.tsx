import React from 'react';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { Card, Row, Col } from 'react-bootstrap';

export function Posts() {
  return (
    <div
      className="vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden"
      style={{ background: 'linear-gradient(to top right, #a1a5fe, #5645BA)' }}
    >
      <Row className="mt-4 mb-4  justify-content-center">
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
            href="/messages"
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
              Messages
            </h3>
          </a>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: '2px solid #324E69', height: '75%' }} />
        </Col>
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
      </Row>
      <Card
        style={{
          width: '90%',
          height: '85%',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
        }}
      >
        <Card.Body className="d-flex p-0">
          <div
            style={{
              width: '20%',
              height: '40%',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center"
          >
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '200',
                fontSize: '25px',
                color: '#263D54',
              }}
              className="mt-3"
            >
              Good Professors?
            </div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '20px',
              }}
              className="mb-4"
            >
              Peyton Barre
            </div>
            <p className='mx-4 text-justify' style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '16px',
              }}>
                I'm taking Advanced Algorithms next semester and I was wondering what professors I should take?
            </p>
            <Row className="d-flex align-items-flex-end justify-content-flex-end text-center" style={{width: "80%", height: "100%"}}>
              <Col className="d-flex align-items-end justify-content-center mb-3">
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#263D54',
                    fontWeight: '500',
                    fontSize: '15px',
                  }}
                  className="mb-1"
                >
                  9 Likes
                </div>
              </Col>
              <Col className="d-flex align-items-end justify-content-center mb-3">
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#263D54',
                    fontWeight: '500',
                    fontSize: '15px',
                  }}
                  className="mb-1"
                >
                  2 Replys
                </div>
              </Col>
            </Row>
          </div>
          <div
            style={{
              width: '20%',
              height: '40%',
              background: 'rgba(255, 255, 255, 0.1)',
              outlineStyle: 'dashed',
              outlineColor: '#263D54',
              borderRadius: '50px',
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '20px',
              }}
              className=""
            >
              Create New Post
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
