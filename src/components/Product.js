import React from "react";
import { Card, Button } from "react-bootstrap";
import { deleteProduct } from "../config/API-Calls";
import './misc.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const Product = ({ product, registryId, getRegistry }) => {

  const removeProduct = (productId) => {
    console.log("In remove product")
    deleteProduct(registryId, productId)
      .then(res => {
        getRegistry()
      }).catch(error => {
        console.log(error.response.data.error)
      })
  }
  console.log("Product Price: " + product.price)
  return (
    <>
      <Card key={product.id} style={{ width: '18rem', height: '20rem', margin: '0.5rem 0.5rem', }}>
        <Card.Body style={{ height: '5rem' }}>
          <Card.Img
            variant="top"
            style={{
              height: '100%',
              objectFit: 'contain',
            }}
            src={product.image} />
        </Card.Body>
        <Card.Body>
          <Card.Title className="eclipse-Text">
            <Link to={`/registry/${product.id}`} style={{ color: "inherit", textDecoration: 'none' }}>{product.title}</Link>
          </Card.Title>
          {product.price === 0 &&
            <Card.Text className="eclipse-Text">
              ${product.price}
            </Card.Text>
          }
          <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '3rem' }}>
            {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
          <Button variant="danger" onClick={() => removeProduct(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
export default Product