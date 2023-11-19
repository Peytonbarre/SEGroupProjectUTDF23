import React from "react";
import { Row, Col } from "react-bootstrap";

export function ProfileCard() {
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "150px",
            background: "gray",
          }}
        />
      </Row>
      <Row className="d-flex justify-content-center">
        <h3
          className="mt-3 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
            color: "#263D54",
            letterSpacing: "2px",
          }}
        >
          Peyton Barre
          {/* TODO: fetch value */}
        </h3>
      </Row>
      <Row
        className="text-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <h3
          className="mb-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
            color: "#324E69",
            letterSpacing: "0px",
            fontSize: "24px",
          }}
        >
          15 Friends
        </h3>
      </Row>
      <Row className="my-3 mt-4 d-flex flex-row text-left">
        <Col className="ps-3" md="auto">
          <img
            src={require("../../assets/graduation-hat.png")}
            style={{
              width: "40px",
              height: "40px",
              filter:
                "invert(20%) sepia(19%) saturate(1242%) hue-rotate(169deg) brightness(97%) contrast(92%)",
            }}
          />
        </Col>
        <Col className="pe-4">
          <a href="/classes" style={{
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
            Classes
          </h3>
          </a>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="ps-3" md="auto">
          <img
            src={require("../../assets/chat.png")}
            style={{
              width: "40px",
              height: "40px",
              filter:
                "invert(20%) sepia(19%) saturate(1242%) hue-rotate(169deg) brightness(97%) contrast(92%)",
            }}
          />
        </Col>
        <Col className="pe-4">
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
      </Row>
      <Row className="my-3 d-flex align-items-center">
        <Col className="ps-3" md="auto">
          <img
            src={require("../../assets/camera.png")}
            style={{
              width: "40px",
              height: "40px",
              filter:
                "invert(20%) sepia(19%) saturate(1242%) hue-rotate(169deg) brightness(97%) contrast(92%)",
            }}
          />
        </Col>
        <Col>
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
      <Row className="my-3">
        <Col className="ps-3" md="auto">
          <img
            src={require("../../assets/friends.png")}
            style={{
              width: "40px",
              height: "40px",
              filter:
                "invert(20%) sepia(19%) saturate(1242%) hue-rotate(169deg) brightness(97%) contrast(92%)",
            }}
          />
        </Col>
        <Col className="pe-4">
        <a href="/friends" style={{
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
            Friends
          </h3>
          </a>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="ps-3" md="auto">
          
          <img
            src={require("../../assets/user.png")}
            style={{
              width: "40px",
              height: "40px",
              filter:
                "invert(20%) sepia(19%) saturate(1242%) hue-rotate(169deg) brightness(97%) contrast(92%)",
            }}
          />
        </Col>
        <Col className="pe-4">
        <a href="/profile" style={{
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
            Profile
          </h3>
          </a>
        </Col>
      </Row>
    </div>
  );
}
