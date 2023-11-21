
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import {MultiChatWindow, useMultiChatLogic, MultiChatSocket} from 'react-chat-engine-advanced'
const projectId: string='9fcaab4a-4aa1-4689-a953-d67efbda387a'
const username:string='Manas Singh'
const secret: string='1234'


export function Messages() {
  const chatProps = useMultiChatLogic(projectId,username,secret)
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
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps}/>
      </Card>
    </div>
  );
}