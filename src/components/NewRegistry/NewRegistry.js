import React, { useState } from "react";
import { createRegistry } from "../../config/API-Calls";
import { Form, Button } from "react-bootstrap";


const NewRegistry = ({ getRegistries }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = e => {
        console.log("Handle Submit - Add Reg!")
        e.preventDefault();
        // return;
        createRegistry(title, description, date).then(res => {
            if (res.status === 200) {
                setTitle("");
                setDescription("");
                setDate("");
                getRegistries();
            }
        })

    }

    return (
        <div>
            <Form className="border border-secondary rounded p-4" onSubmit={handleSubmit}>
                <h4>Create a new Registry</h4>
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
                <Button variant="primary" onClick={handleSubmit}>Button</Button>
            </Form>
        </div>
    )
}
export default NewRegistry