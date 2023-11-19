import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export function FriendCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0)",
        marginBottom: "22%"
      }}
      className="me-5"
    >
    <a href="/friends" style={{
            textDecoration: "none",
            color: "inherit",
            outline: "0",
          }}>
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "200",
          fontSize: "25px",
          color: "#263D54",
        }}
        className="ms-4 my-3"
      >
        Friends
      </h2>
      </a>
      <Row className="mb-3">
        <Col md="auto">
          <div
            style={{
              height: "75px",
              width: "75px",
              borderRadius: "75px",
              background: "gray",
            }}
            className="ms-4"
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            Manvir Chakal
          </div>
          <div
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "17px",
          }}>
            Junior
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md="auto">
          <div
            style={{
              height: "75px",
              width: "75px",
              borderRadius: "75px",
              background: "gray",
            }}
            className="ms-4"
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            Manas Singh
          </div>
          <div
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "17px",
          }}>
            Junior
          </div>
        </Col>
      </Row>
    </div>
  );
}
