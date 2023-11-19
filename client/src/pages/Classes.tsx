import React from "react";
import { BackgroundAnimation } from "../components/BackgroundAnimation";
import { Card, Row, Col } from "react-bootstrap";

export function Classes() {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center overflow-hidden"
      // style={{ background: "linear-gradient(to top right, #a1a5fe, #5645BA)" }}
    >
      <BackgroundAnimation />
      <Card
        style={{
          width: "90%",
          height: "90%",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
        }}
      >
        <Row className="mt-5 justify-content-center">
          <Col md="auto">
            <a
              href="/profile"
              style={{
                textDecoration: "none",
                color: "inherit",
                outline: "0",
              }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#263D54",
                }}
              >
                Profile
              </h3>
            </a>
          </Col>
          <Col md="auto">
            <div style={{ borderLeft: "2px solid #324E69", height: "75%" }} />
          </Col>
          <Col md="auto">
            <a
              href="/friends"
              style={{
                textDecoration: "none",
                color: "inherit",
                outline: "0",
              }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#263D54",
                }}
              >
                Friends
              </h3>
            </a>
          </Col>
          <Col md="auto">
            <div style={{ borderLeft: "2px solid #324E69", height: "75%" }} />
          </Col>
          <Col md="auto">
          <a href="/dashboard" style={{
            textDecoration: "none",
            color: "inherit",
            outline: "0",
          }}>
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
              }}
            >
              Dashboard
            </h3>
            </a>
          </Col>
          <Col md="auto">
            <div style={{ borderLeft: "2px solid #324E69", height: "75%" }} />
          </Col>
          <Col md="auto">
          <a href="/messages" style={{
            textDecoration: "none",
            color: "inherit",
            outline: "0",
          }}>
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
              }}
            >
              Messages
            </h3>
            </a>
          </Col>
          <Col md="auto">
            <div style={{ borderLeft: "2px solid #324E69", height: "75%" }} />
          </Col>
          <Col md="auto">
          <a href="/posts" style={{
            textDecoration: "none",
            color: "inherit",
            outline: "0",
          }}>
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
              }}
            >
              Posts
            </h3>
            </a>
          </Col>
        </Row>
        <Card.Body className="d-flex p-0">
          <div
            style={{
              width: "15%",
              height: "45%",
              background: "rgba(255, 255, 255, 0.4)",
              borderRadius: "50px",
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "150px",
                background: "gray",
              }}
              className="my-2"
            />
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                fontSize: "25px",
                color: "#263D54",
              }}
              className="mb-2"
            >
              CS 3377.205
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "20px",
              }}
              className="mb-1"
            >
              Yi Zhao
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "20px",
              }}
              className="mb-1"
            >
              9 People
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "20px",
              }}
              className="mb-1"
            >
              2 Friends
            </div>
          </div>
          <div
            style={{
              width: "15%",
              height: "45%",
              background: "rgba(255, 255, 255, 0.1)",
              outlineStyle: "dashed",
              outlineColor: "gray",
              borderRadius: "50px",
            }}
            className="m-5 mt-4 me-0 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "gray",
                fontWeight: "500",
                fontSize: "20px",
              }}
              className=""
            >
              Create New Class
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
