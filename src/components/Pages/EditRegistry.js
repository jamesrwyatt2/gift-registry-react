import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { retrieveRegistry, editRegistry } from "../../config/API-Calls";
import { useNavigate } from 'react-router-dom';

const EditRegistry = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    getRegistry()
  });

  const getRegistry = () => {
    retrieveRegistry(id)
      .then(res => {
        const data = res.data;
        setTitle(data.title);
        setDescription(data.description);
        setDate(data.date);
        console.log("feteched data");
      })
  }

  const handleChangeRegistry = (e) => {
    e.preventDefault();
    editRegistry(id, title, description, date)  
      .then(res => {
        console.log(res);
        navigate('/registry/'+id);
      })
  }


  const handleSubmit = (e) => {
  }

  return (<>
    <Container>
    <Header />
    <Row>
      <Col></Col>
      <Col>
      <Form className="border border-secondary rounded p-4" onSubmit={handleSubmit}>
        <h3>Edit Registry</h3>
        <Form.Group className="mb-3">
          <Form.Label>Event</Form.Label>
          <Form.Control
            placeholder="Birthday"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">
            Example: Birthday or Wedding
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="My 30th Birthday"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            placeholder="November 1, 2023"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleChangeRegistry}>Update</Button>
      </Form>
      </Col>
      <Col></Col>
    </Row>
    </Container>
  </>)
}
export default EditRegistry;