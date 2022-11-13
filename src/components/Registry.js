import React, { useEffect, useState } from "react";
import { retrieveRegistry, deleteProduct } from "../config/API-Calls";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Header from "./Header";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./Registry.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Registry = () => {
  const [registry, setRegistry] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRegistry()
  }, []);

  const getRegistry = () => {
    retrieveRegistry(id)
      .then(res => {
        const data = res.data;
        setRegistry(data);
        setProducts(data.products);
      })
  }

  return (
    <div
    // className="container-fluid container mt-5"
    >
      <Container>
        <Header />

        <Row>
          <Col>
            <h3>Event: {registry.title}</h3>
            <h5>Date: {registry.date}</h5>
            <p>Description: {registry.description}</p>
            <Button><Link to={`/registry/${registry.id}/edit`} style={{ color: "inherit", textDecoration: 'none' }}>Edit</Link></Button>
          </Col>
          <Col><AddProduct getRegistry={getRegistry} /></Col>
          <Col></Col>

        </Row>
        <h4>Products</h4>
        <div className="d-flex flex-wrap card-container">
          {
            products
              .map(product =>
                <Product key={product.id} product={product} getRegistry={getRegistry} registryId={registry.id} />
              )}
        </div>
      </Container>
    </div>
  )

}

export default Registry