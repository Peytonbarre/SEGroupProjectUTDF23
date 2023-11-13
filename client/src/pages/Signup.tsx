import React, { useState } from 'react';
import { Container, Form, Button, Image, Card, Col } from 'react-bootstrap';
import axios from 'axios';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }    
      try {
        const response = await axios.post('http://127.0.0.1:5000/register', {
          username: username,
          password: password,
        });
        console.log(response);
      } catch (error) {
        // Handle authentication failure
        console.error('Authentication failed:', error);
      }

    // Handle signup logic here
    console.log('Username:', username, 'Password:', password);
  };

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
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  SIGN UP
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <a href="/login">Already have an account? Log In</a>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
