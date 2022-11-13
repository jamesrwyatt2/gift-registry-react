import React from "react"
import { Card, Button,  Row, Col  } from "react-bootstrap"
import { Link,} from "react-router-dom"

const RegistryCard = ({ registry, removeProduct }) => {

  return (
    <Card key={registry.id}
      style={{ width: '15rem', height: '12rem', margin: '0.5rem 0.5rem', }}
    >
      <Card.Body>
        <Card.Title className="card-title"><Link to={`/registry/${registry.id}`} style={{ color: "inherit", textDecoration: 'none' }}>{registry.title}</Link></Card.Title>
        <Card.Subtitle className="card-subtitle mb-2 text-muted">{registry.date}</Card.Subtitle>
        <Card.Text className="card-text">{registry.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Row>
          <Col><Button><Link to={`/registry/${registry.id}/edit`} style={{ color: "inherit", textDecoration: 'none' }}>Edit</Link></Button></Col>
          <Col></Col>
          <Col><Button variant="danger" onClick={() => removeProduct(registry.id)}>Remove</Button></Col>
        </Row>
      </Card.Footer>

    </Card>
  )
}
export default RegistryCard