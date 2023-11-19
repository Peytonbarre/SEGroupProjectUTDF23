import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Form, Button, Image, Card, Col, Row } from 'react-bootstrap';
import '../styling/input.css';

export function Profile() {
  return (
    <div
      className="bg-white vh-100 d-flex flex-column overflow-hidden"
      style={{ background: 'linear-gradient(to top right, #EEDFFC, #5645BA)' }}
    >
      <Row className="justify-content-center mt-5">
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
      <Container
        fluid
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{ height: '50%' }}
      >
          <Col md={3}>
            <Card className="glass-card-input text-center py-5 d-flex align-items-center justify-content-center">
              <Image
                src={require('../assets/peyton.jpg')}
                alt="Profile Image"
                style={{ width: '200px', height: '200px', margin: '0 auto' }}
                roundedCircle
                className="my-4"
              />
              <h1
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#263D54',
                  fontWeight: '500',
                  fontSize: '25px',
                }}
                className="mb-3"
              >
                Peyton Barre
              </h1>
              <h1
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#263D54',
                  fontWeight: '500',
                  fontSize: '17px',
                }}
              >
                Junior
              </h1>
              <h1
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#263D54',
                  fontWeight: '500',
                  fontSize: '17px',
                }}
              >
                peytonbarre@gmail.com
              </h1>
              <h1
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#263D54',
                  fontWeight: '500',
                  fontSize: '17px',
                }}
              >
                Transcript: NONE
              </h1>
              <Button
                variant="secondary"
                size="sm"
                style={{ width: '50%' }}
                className="my-4"
                href="/updateProfile"
              >
                Update Profile
              </Button>
            </Card>
          </Col>
      </Container>
    </div>
  );
}
