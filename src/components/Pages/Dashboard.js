import React, { useEffect, useState } from "react";
import { retrieveRegistries} from "../../config/API-Calls";
import NewRegistry from "../NewRegistry/NewRegistry";
import RegistryList from "../Registry/RegistryList";

import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";


const Dashboard = () => {

  const [registries, setRegistries] = useState([]);

  useEffect(() => {
    getRegistries();
  }, []);

  const getRegistries = () => {
    return retrieveRegistries()
      .then(res => {
        const registries = res.data;
        setRegistries(registries);
      })
  }
  return (
    <div>
      <Header />
      <Container>
        <h2>Welcome, James!</h2>
        <Row>
          <Col><NewRegistry getRegistries={getRegistries} /></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <RegistryList registries={registries} getRegistries={getRegistries} />
        </Row>
      </Container>
    </div>
  )
}
export default Dashboard;