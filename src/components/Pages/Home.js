import React from "react";
import Header from "../Header";
import LoginAndReg from "../Login/LoginAndReg";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {

  return (
    <div>
      <Header />

      <Container>
        <h1>Home</h1>
        <Row>
          <Col></Col>
          <Col>
            <LoginAndReg />
          </Col>
          <Col></Col>
        </Row>
      </Container>

    </div>
  );
}

export default Home;