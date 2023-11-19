import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Form, Button, Image, Card, Col } from 'react-bootstrap';
import "../styling/input.css"

interface UserProfile {
  name: string;
  username: string;
  email: string;
  profilePicture: string;
}

export function UpdateProfile() {
  // KERLOS ABDELMALAK
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    profilePicture: '/path/to/default/profile-picture.jpg',
  });

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState<File | null>(null);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleProfilePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewProfilePicture(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Handle updated Login info here.

    // I'm logging for now just to see if it works. You can delete this section after.
    console.log('Updated Profile Information:');
    console.log('New Username:', newUsername);
    console.log('New Email:', newEmail);
    console.log('New Password:', newPassword);
    console.log('New Profile Picture:', newProfilePicture);

    // Reset the form
    setNewUsername('');
    setNewEmail('');
    setNewPassword('');
    setNewProfilePicture(null);
  };

  return (
    <div className="bg-white vh-100 d-flex flex-column" style={{background: 'linear-gradient(to top right, #EEDFFC, #5645BA)'}}>
      <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={3}>
          <Card className="glass-card-input text-center">
            <h2>Update Profile</h2>
            <Image
              src={
                newProfilePicture
                  ? URL.createObjectURL(newProfilePicture)
                  : userProfile.profilePicture
              }
              alt="Profile Image"
              style={{ width: '200px', height: '200px', margin: '0 auto' }}
              roundedCircle
            />
            <input
              className="mb-4"
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleProfilePictureChange}
              style={{ margin: '0 auto' }}
            />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={newUsername} onChange={handleUsernameChange} className="custom-input"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={newEmail} onChange={handleEmailChange} className="custom-input"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>New Password:</Form.Label>
                <Form.Control type="password" value={newPassword} onChange={handlePasswordChange} className="custom-input"/>
              </Form.Group>
              <Button className="mb-3" variant="secondary" type="submit">
                UPDATE
              </Button>
            </Form>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
