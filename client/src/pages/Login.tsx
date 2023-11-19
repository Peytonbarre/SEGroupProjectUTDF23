import React, { useState } from 'react';
import { Container, Form, Button, Image, Card, Col } from 'react-bootstrap';
import axios from 'axios';
import "../styling/input.css"
import { useNavigate } from 'react-router-dom';

const serverURL = 'http://127.0.0.1:5000';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${serverURL}/login`, {
        username: username,
        password: password,
      });

      // Store the token in local storage or in-memory storage as per your requirement
      localStorage.setItem('access_token', response.data.access_token);

      // Set the axios default header to include the JWT token
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

      console.log('Login successful, Access Token:', response.data.access_token);
      setErrorMessage('');
      navigate("/dashboard"); // Use navigate to redirect to dashboard
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An unknown error occurred';
        console.error('Authentication failed:', message);
        setErrorMessage(message);
      } else {
        console.error('Authentication failed:', error);
        setErrorMessage("Failed")
      }
    }
  };

  return (
    // MANVIR CHAKAL
    <div className="bg-white vh-100 d-flex flex-column" style={{background: 'linear-gradient(to top right, #EEDFFC, #5645BA)'}}>
      <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={3}>
          <Card className="glass-card-input text-center">
              <Image
                src={require('../assets/classmeet-logo.png')}
                alt="Class Meet"
                style={{ width: '300px', height: '300px', margin: '0 auto' }}
                rounded
                className=""
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
                  Log In
                </Button>
                {errorMessage && (
                  <div className='mt-4' style={{color: "red"}}>Account username/password not matched</div>
                )}
              </Form>
            </Card.Body>
              <a href="/signup">Don't have an account? Sign up!</a>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
