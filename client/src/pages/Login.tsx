import React, { useState } from 'react';
import { Container, Form, Button, Image, Card, Col } from 'react-bootstrap';
import axios from 'axios';
import { redirect } from 'react-router-dom';

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
        
      } catch (error) {
        // Handle authentication failure
        console.error('Authentication failed:', error);
      }
    };
  }

  return (
    // MANVIR CHAKAL
    <div className="bg-white vh-100 d-flex flex-column">
      <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={3}>
          <Card className="text-center">
            <Card.Header>
              <Image
                src="/logo.png"
                alt="Class Meet"
                style={{ width: '200px', height: '200px', margin: '0 auto' }}
                rounded
                className="my-5"
              />
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  LOG IN
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <a href="#">Forgot Username or Password?</a>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
