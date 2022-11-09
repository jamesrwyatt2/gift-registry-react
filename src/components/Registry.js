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
import { Container, Row, Col } from "react-bootstrap";

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
        <h2>Your Registry {id}</h2>

        <h3>{registry.title} | <Link to={`/registry/${registry.id}/edit`} style={{ color: "inherit" }}>edit</Link></h3>

        <Row>
          <Col><AddProduct getRegistry={getRegistry} /></Col>
          <Col></Col>
          <Col></Col>

        </Row>
        <h4>Products</h4>
        <div className="d-flex flex-wrap card-container">
          {
            products
              .map(product =>
                <Product product={product} getRegistry={getRegistry} registryId={registry.id} />
              )}
        </div>
      </Container>
    </div>
  )

}

export default Registry