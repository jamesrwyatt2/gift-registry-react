import React, { useEffect, useState } from "react";
import { retrieveRegistries, deleteRegistry } from "../config/API-Calls";
import AddRegistry from "./AddRegistry";
import { Link } from "react-router-dom";
import './ViewRegistries.css';
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";


const Registries = ({ props }) => {
  const [registries, setRegistries] = useState([]);

  useEffect(() => {
    getRegistries();
  }, []);

  const getRegistries = () => {
    console.log("Getting Registries!")
    return retrieveRegistries()
      .then(res => {
        const registries = res.data;
        setRegistries(registries);
      })
  }
  const removeRegistry = id => {
    console.log("Delete Key: " + id)
    deleteRegistry(id).then(res => {
      console.log(res.status)
      getRegistries()
    })
  }

  return (
    <div 
    // className="container-fluid container mt-5"
    >
      <Header/>
      <Container>
      <h2>Welcome, James!</h2>
        <Row>
          <Col><AddRegistry getRegistries={getRegistries} /></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <div className="d-flex flex-wrap card-container">
          {
            registries
              .map(registry =>
                <div key={registry.id} className="card registry-card" style={{ width: "18rem" }} >
                  <div className="card-body">
                    <h5 className="card-title"><Link to={`/registry/${registry.id}`} style={{ color: "inherit" }}>{registry.title}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{registry.date}</h6>
                    <p className="card-text">{registry.description}</p>
                    <button onClick={() => removeRegistry(registry.id)}>Remove Registry</button>
                  </div>
                </div>
              )}
        </div>
      </Container>
    </div>
  )
}
export default Registries