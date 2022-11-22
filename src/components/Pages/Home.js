import React from "react";
import { Tab } from "react-bootstrap";
import Header from "../Header";
import LoginAndReg from "../Login/LoginAndReg";
import Container from "react-bootstrap/Container";

const Home = () => {

  return (
    <div>
      <Header />
      
      <Container>
        <h1>Home</h1>
        <LoginAndReg />
      </Container>

    </div>
  );
}

export default Home;