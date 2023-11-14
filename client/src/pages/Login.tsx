import React, { useState } from 'react';
import { Container, Form, Button, Image, Card, Col } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import "../styling/input.css"

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
          username: username,
          password: password,
        });
    
        // Assuming the backend returns an accessToken upon successful login
        const accessToken = response.data.accessToken;
    
        // You can now handle the accessToken as needed, such as storing it in local storage or a state variable
        console.log('Access Token:', accessToken);
        <Navigate replace to="/dashboard"/>
      } catch (error) {
        // Handle authentication failure
        console.error('Authentication failed:', error);
      }
    };
  }

  return (
    // MANVIR CHAKAL
    <div className="bg-white vh-100 d-flex flex-column" style={{background: 'linear-gradient(to top right, #EEDFFC, #5645BA)'}}>
      <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={3}>
          <Card className="glass-card-input text-center">
              <Image
                src="/logo.png"
                alt="Class Meet"
                style={{ width: '200px', height: '200px', margin: '0 auto' }}
                rounded
                className="my-3"
              />
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="custom-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="custom-input"
                  />
                </Form.Group>
                <Button type="submit" variant="secondary">
                  LOG IN
                </Button>
              </Form>
            </Card.Body>
              <a href="/signup">Don't have an account? Sign up!</a>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
