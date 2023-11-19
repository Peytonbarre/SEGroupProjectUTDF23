import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Form, Button, Image, Card, Col } from "react-bootstrap";
import "../styling/input.css";

export function Profile() {
  return (
    <div
      className="bg-white vh-100 d-flex flex-column"
      style={{ background: "linear-gradient(to top right, #EEDFFC, #5645BA)" }}
    >
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center"
        style={{ height: "50%" }}
      >
        <Col md={3}>
          <Card className="glass-card-input text-center d-flex align-items-center justify-content-center">
            <Image
              src={require("../assets/peyton.jpg")}
              alt="Profile Image"
              style={{ width: "200px", height: "200px", margin: "0 auto" }}
              roundedCircle
              className="my-4"
            />
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "25px",
              }}
              className="mb-3"
            >
              Peyton Barre
            </h1>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Junior
            </h1>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              peytonbarre@gmail.com
            </h1>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Transcript: NONE
            </h1>
            <Button
              variant="secondary"
              size="sm"
              style={{ width: "50%" }}
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
