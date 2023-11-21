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
        marginTop: "35px",
      }}
      className="ms-4"
    >
      <a
        href="/posts"
        style={{
          textDecoration: "none",
          color: "inherit",
          outline: "0",
        }}
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
          Posts
        </h2>
      </a>
      <Row
        className="justify-content-center align-items-center my-4"
        style={{ height: "50%" }}
      >
        <Col className="d-flex justify-content-center" md="auto">
          <div
            className="d-flex flex-column p-2"
            style={{
              width: "150px",
              height: "150px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                fontSize: "15px",
                color: "#263D54",
              }}
              className=""
            >
              Good Professors?
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "13px",
              }}
              className=""
            >
              Peyton Barre
            </div>
            <p
              className="text-justify"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "10px",
              }}
            >
              I'm taking Advanced Algorithms next semester and I was wondering
              what professors I should take?
            </p>
            <Row
              className="d-flex align-items-flex-end justify-content-flex-end text-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Col className="d-flex align-items-end justify-content-center">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#263D54",
                    fontWeight: "500",
                    fontSize: "9px",
                  }}
                  className=""
                >
                  9 Likes
                </div>
              </Col>
              <Col className="d-flex align-items-end justify-content-center">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#263D54",
                    fontWeight: "500",
                    fontSize: "9px",
                  }}
                  className=""
                >
                  2 Replys
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="d-flex justify-content-center" md="auto">
          <div
            className="d-flex flex-column p-2"
            style={{
              width: "150px",
              height: "150px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                fontSize: "15px",
                color: "#263D54",
              }}
              className=""
            >
              Plinth Hangout
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "13px",
              }}
              className=""
            >
              Manas Singh
            </div>
            <p
              className="text-justify"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "10px",
              }}
            >
              Hey everyone! I'm having a HUGE hangout at the plinth today if
              anyone is interested!
            </p>
            <Row
              className="d-flex align-items-flex-end justify-content-flex-end text-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Col className="d-flex align-items-end justify-content-center">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#263D54",
                    fontWeight: "500",
                    fontSize: "9px",
                  }}
                  className=""
                >
                  15 Likes
                </div>
              </Col>
              <Col className="d-flex align-items-end justify-content-center">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#263D54",
                    fontWeight: "500",
                    fontSize: "9px",
                  }}
                  className=""
                >
                  5 Replys
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="d-flex justify-content-center" md="auto">
          <div
            className="d-flex flex-column p-2"
            style={{
              width: "150px",
              height: "150px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "200",
                fontSize: "15px",
                color: "#263D54",
              }}
              className=""
            >
              Transfer Credits...
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "13px",
              }}
              className=""
            >
              Manvir Chakal
            </div>
            <p
              className="text-justify"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#263D54",
                fontWeight: "500",
                fontSize: "10px",
              }}
            >
              I have a question on how transfer credits work. Any transfer
              students to help me out?
            </p>
            <Row
              className="d-flex align-items-flex-end justify-content-flex-end text-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Col className="d-flex align-items-end justify-content-center">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#263D54",
                    fontWeight: "500",
                    fontSize: "9px",
                  }}
                  className=""
                >
                  3 Likes
                </div>
              </Col>
              <Col className="d-flex align-items-end justify-content-center">
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#263D54",
                    fontWeight: "500",
                    fontSize: "9px",
                  }}
                  className=""
                >
                  3 Replys
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
