import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

export function ProgressCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "60%",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0)",
        marginBottom: "4%"
      }}
      className="me-5"
    >
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "200",
          fontSize: "25px",
          color: "#263D54",
        }}
        className="ms-4 my-3"
      >
        Stats
      </h2>
      <h3 style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "20px",
            }} className="mx-4 mb-3">
        Academic Standing
        <ProgressBar now={75} variant="danger" style={{ background: "rgba(50, 78, 105, .3)"}}/>
      </h3>
      <h3 style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "20px",
            }} className="mx-4 mb-3">
        Credit Hours
        <ProgressBar now={55} variant="danger" style={{ background: "rgba(50, 78, 105, .3)"}}/>
      </h3>
      <Row className="px-4">
        <Col className="d-flex flex-column align-items-center justify-content-center">
            <Row style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "25px",
            }}>
                6
            </Row>
            <Row style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "17px",
          }}>
                Classes
            </Row>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: "2px solid #324E69", height: "100%" }} />
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center">
            <Row style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "25px",
            }}>
                14
            </Row>
            <Row style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "17px",
          }}>
                Friends
            </Row>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: "2px solid #324E69", height: "100%" }} />
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center">
            <Row style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "25px",
            }}>
                5
            </Row>
            <Row style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "17px",
          }}>
                Posts
            </Row>
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: "2px solid #324E69", height: "100%"}} />
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center">
            <Row style={{
              fontFamily: "Poppins, sans-serif",
              color: "#263D54",
              fontWeight: "500",
              fontSize: "25px",
            }}>
                45
            </Row>
            <Row style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "17px",
          }}>
                Messages
            </Row>
        </Col>
      </Row>
    </div>
  );
}
