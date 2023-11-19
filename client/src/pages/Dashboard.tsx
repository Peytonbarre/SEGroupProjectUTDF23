import React, { useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { ProfileCard } from "../components/Dash/ProfileCard";
import { ClassCard } from "../components/Dash/ClassCard";
import { ProgressCard } from "../components/Dash/ProgressCard";
import { FriendCard } from "../components/Dash/FriendCard";
import { PostsCard } from "../components/Dash/PostsCard";
import { BackgroundAnimation } from "../components/BackgroundAnimation";

export function Dashboard() {
  const [username, setUsername] = useState("");

  const handleAddFriend = async () => {
    try {
      const response = await axios.post("http://localhost:5000/addFriend", {
        username,
      });
      console.log(response.data); // Handle the response appropriately
    } catch (error) {
      console.error("Error adding friend", error);
      // Handle error appropriately
    }
  };

  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center overflow-hidden"
      // style={{ background: "linear-gradient(to top right, #a1a5fe, #5645BA)" }}
    >
      <BackgroundAnimation/>
      <Card
        style={{
          width: "90%",
          height: "90%",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
        }}
      >
        <Card.Body className="d-flex align-items-center p-0">
          <div
            className="m-0 p-0 d-flex align-items-center justify-content-center"
            style={{
              width: "25%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50px 0 0 50px",
            }}
          >
            <ProfileCard />
          </div>
          <div style={{ width: "75%", height: "100%" }}>
            <Row style={{ height: "50%" }}>
              <Col className="d-flex align-items-center justify-content-center">
                <ClassCard />
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <ProgressCard />
              </Col>
            </Row>
            <Row style={{ height: "50%" }}>
              <Col className="d-flex align-items-center justify-content-center">
                <PostsCard />
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <FriendCard />
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
{
  /* <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
                />
                <button onClick={handleAddFriend}>Add Friend</button> */
}
