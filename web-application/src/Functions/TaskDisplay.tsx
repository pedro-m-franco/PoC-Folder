import React from 'react';
import { Container, Row, Col, Card, Form} from 'react-bootstrap';
import {statusOptions, TaskClass} from "./Data";
import "../CSS/TaskPage.css";

const handleDateChange = (onUpdate:any,date:string) => {
    const currentDate = new Date();
    const chosenDate = new Date(date);
    if(chosenDate < currentDate) {
        alert("This date is invalid.")
        return;
    }
    onUpdate('date', date)
};

export const TaskDisplay = ({ task, onUpdate }: { task:TaskClass, onUpdate:any }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Title</Card.Header>
                        <Card.Body>
                            <Form.Control
                                type="text"
                                value={task.title}
                                onChange={(e) => onUpdate('title', e.target.value)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Status</Card.Header>
                        <Card.Body>
                            <Form.Select value={String(task.status)} onChange={(e) => onUpdate('status', e.target.value)}>
                                {statusOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Header>Description</Card.Header>
                        <Card.Body>
                            <Form.Control
                                type="text"
                                value={task.description}
                                onChange={(e) => onUpdate('description', e.target.value)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Date</Card.Header>
                        <Card.Body>
                            <Form.Control
                                type="date"
                                value={String(task.date)}
                                onChange={(e) => handleDateChange(onUpdate,e.target.value)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Header>Creator</Card.Header>
                        <Card.Body>
                            <Form.Control
                                disabled={true}
                                type="text"
                                value={task.creator}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Editor</Card.Header>
                        <Card.Body>
                            <Form.Control
                                type="text"
                                value={task.editor}
                                onChange={(e) => onUpdate('editor', e.target.value)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};