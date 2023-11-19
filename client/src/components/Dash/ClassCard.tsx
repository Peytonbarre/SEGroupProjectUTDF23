import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export function ClassCard() {
  return (
    <div
      style={{
        width: "95%",
        height: "100%",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0)",
        marginTop: "150px"
      }}
      className="ms-4"
    >
        <a href="/classes" style={{
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
        Classes
      </h2>
      </a>
      <Row
        className="mx-4 py-2 d-flex justify-content-center"
        style={{
          background: "rgba(50, 78, 105, .2)",
          borderRadius: "10px",
        }}
      >
        <Col
          md="auto"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          CS 3447.502
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: "2px solid #324E69", height: "100%" }} />
        </Col>
        <Col
          md="auto"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          Yi Zhao
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: "2px solid #324E69", height: "100%" }} />
        </Col>
        <Col
          md="auto"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          8 People
        </Col>
        <Col md="auto">
          <div style={{ borderLeft: "2px solid #324E69", height: "100%" }} />
        </Col>
        <Col
          md="auto"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#263D54",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          3 Friends
        </Col>
      </Row>
    </div>
  );
}
