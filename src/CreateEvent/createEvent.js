import './createEvent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

function CreateEvent(){
    return (
        <Form className="EventForm">
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <p>Create Event</p>
                </Col>
            </Row>
            <Form.Group as={Row} className="mb-3" controlId="eventName">
                <Col sm="12">
                    <Form.Control type="text" placeholder="Event name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="hostName">
                <Col sm="10" offset="2">
                    <Form.Control type="text" placeholder="Host name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="location">
                <Col sm="12">
                    <Form.Control type="text" placeholder="Location" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="nextPage">
                <Col sm="12">
                    <Link to="create"><Button variant="light" size="lg">Next</Button></Link>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default CreateEvent;