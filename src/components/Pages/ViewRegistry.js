import React, { useEffect, useState } from "react";
import { retrieveRegistry } from "../../config/API-Calls";
import AddProduct from "../Product/AddProduct";
import Product from "../Product/Product";
import Header from "../Header";
import { Link, useParams } from "react-router-dom";
import "./Registry.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductList from "../Product/ProductList";

const ViewRegistry = () => {
  const [registry, setRegistry] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [isRegistryChanged, setIsRegistryChanged] = useState(false);



  const getRegistry = () => {
    retrieveRegistry(id)
      .then(res => {
        const data = res.data;
        setRegistry(data);
        setProducts(data.products);
        setIsRegistryChanged(false);
        console.log("Setting products");
      })
  }

  useEffect(() => {
    getRegistry()
  }, [isRegistryChanged]);

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
        <ProductList
          products={products}
          changeToRegistry={setIsRegistryChanged}
          regId={registry.id}
        />
      </Container>
    </div>
  )

}

export default ViewRegistry;