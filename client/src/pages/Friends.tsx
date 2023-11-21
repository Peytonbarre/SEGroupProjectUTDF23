import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';

export function Friends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token'); // Retrieve the token from storage

    // Configure the Axios header with the token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get('http://127.0.0.1:5000/getFriends', config)
      .then((response) => {
        setFriends(response.data.friends);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div
      className="vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden"
      style={{ background: "linear-gradient(to top right, #a1a5fe, #5645BA)" }}
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
              width: '15%',
              height: '40%',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '150px',
                background: 'gray',
              }}
              className="my-2"
            />
            
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '200',
                fontSize: '25px',
                color: '#263D54',
              }}
              className=""
            >
              Manas Singh
            </div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '20px',
              }}
              className="mb-1"
            >
              Junior
            </div>
            <Button variant='secondary' className='mt-3'>Message</Button>
          </div>


          <div
            style={{
              width: '15%',
              height: '40%',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '150px',
                background: 'gray',
              }}
              className="my-2"
            />
            
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '200',
                fontSize: '25px',
                color: '#263D54',
              }}
              className=""
            >
              Manvir Chakal
            </div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '20px',
              }}
              className="mb-1"
            >
              Junior
            </div>
            <Button variant='secondary' className='mt-3'>Message</Button>
          </div>


          <div
            style={{
              width: '15%',
              height: '40%',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '150px',
                background: 'gray',
              }}
              className="my-2"
            />
            
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '200',
                fontSize: '25px',
                color: '#263D54',
              }}
              className=""
            >
              Manoj
            </div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '20px',
              }}
              className="mb-1"
            >
              Junior
            </div>
            <Button variant='secondary' className='mt-3'>Message</Button>
          </div>

          <div
            style={{
              width: '15%',
              height: '40%',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '150px',
                background: 'gray',
              }}
              className="my-2"
            />
            
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '200',
                fontSize: '25px',
                color: '#263D54',
              }}
              className=""
            >
              Mageto 
            </div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#263D54',
                fontWeight: '500',
                fontSize: '20px',
              }}
              className="mb-1"
            >
              Junior
            </div>
            <Button variant='secondary' className='mt-3'>Message</Button>
          </div>

          <div
            style={{
              width: '15%',
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
              <Button variant='secondary' className='mt-3'>Add Friend</Button>
            </div>
          </div>


       

          
          

          
        </Card.Body>
      </Card>
    </div>
    // <div>
    //   <h2>My Friends</h2>
    //   {friends.length > 0 ? (
    //     <ul>
    //       {friends.map((friend, index) => (
    //         <li key={index}>{friend}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No friends</p>
    //   )}
    // </div>
  );
}
