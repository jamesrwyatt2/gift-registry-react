import React, { useState } from "react";
import { createProduct } from "../config/API-Calls";
import { Form, Button } from "react-bootstrap";
//Do not remove Unused Import for BrowserRouter - all are needed
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";


const AddProduct = ({ getRegistry }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState("");
  const { id } = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    if (url === "") {
      setError("Not a valid URL");
      return;
    }

    createProduct(id, url).then(res => {
      console.log("Status code: " + res.status)
      if (res.status === 200) {
        setError(null)
        setUrl("");
        getRegistry();
      }
    }).catch(error => {
      // gets error code
      console.log("Error: " + error.response.status)

      setIsLoaded(true);
      setError("Not a valid URL");
    })
  }

  const validateUrl = () => {
    if (url == "") {

    }
  }


  return (<>

    {error != null &&
      <div style={{ color: "red" }} >
        Error: {error}
      </div>
    }
    <h3>Add Product</h3>
    <Form className="border border-secondary rounded p-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Add URL: </Form.Label>
        <Form.Control
          placeholder="google.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </Form.Group>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  </>);
}
export default AddProduct