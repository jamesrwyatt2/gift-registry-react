import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { deleteProduct } from "../../config/API-Calls";

const IframelyProduct = (props) => {

  const [html, setHtml] = useState({
    __html: '<div />',
  });

  useEffect(() => {
    setHtml({ __html: props.product.html });
    console.log("Setting html");
  }, []);

  useEffect((props) => {
    window.iframely && window.iframely.load();
    console.log("Loading iframely");
  },[html]);

  const removeProduct = (productId) => {
    console.log("In remove product")
    deleteProduct(props.registryId, productId)
      .then(res => {
        // console.log(res.data);
        props.changeToRegistry(true);
      }).catch(error => {
        console.log(error.response.data.error)
      })
  }

  return (
    <Card key={props.product.id}
    style={{ width: '25rem', height: '15rem', margin: '0.5rem 0.5rem', }}
     >
      <Card.Body>
      <div dangerouslySetInnerHTML={html} />
      </Card.Body>
      <Card.Footer className="card-footer">
          <Row>
            <Col></Col>
            <Col></Col>
            <Col><Button variant="danger" onClick={() => removeProduct(props.product.id)}>Remove</Button></Col>
          </Row>
        </Card.Footer>
    </Card>
    );
};

export default IframelyProduct;