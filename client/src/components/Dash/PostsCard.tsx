import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export function PostsCard() {
  return (
    <div
      style={{
        width: "95%",
        height: "60%",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0)",
        marginTop: "35px"
      }}
      className="ms-4"
    >
    <a href="/posts" style={{
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
        Posts
      </h2>
      </a>
      <Row className="justify-content-center align-items-center my-4" style={{height: "50%"}}>
        <Col className="d-flex justify-content-center" md="auto">
            <div style={{width: "150px", height: "150px", background: "gray"}}/>
        </Col>
        <Col className="d-flex justify-content-center" md="auto">
        <div style={{width: "150px", height: "150px", background: "gray"}}/>
        </Col>
        <Col className="d-flex justify-content-center" md="auto">
        <div style={{width: "150px", height: "150px", background: "gray"}}/>
        </Col>
      </Row>
    </div>
  );
}
