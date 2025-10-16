'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function BottomFooter() {
    return (
        <footer className="mt-auto py-3">
            <Container>
                <Row>
           
                    <Col>
                        <h3>LOCATION</h3>
                        <strong>KAILUA</strong><br />
                        32 Maliinu Ave.<br />
                        Kailua, HI 96734<br />
                        (808) 261-6733
                    </Col>
                    
                    {/* Empty Column for Spacing */}
                    <Col></Col>
                    
                    {/* Business Hours Column */}
                    <Col>
                        <h3>BUSINESS HOURS</h3>
                        <Row xs = {2}>
                            <Col xs={6}>
                                <strong>Mondays, Wednesdays,<br />
                                Thursdays</strong><br />

                                OPEN 4pm - 10pm<br />
                                Happy Hour 4pm - 6pm<br />
                                Dinner 4pm - 9pm<br /><br />
                                
                                <strong>Fridays</strong><br />
                                OPEN 4pm - 11pm<br />
                                Happy Hour 4pm - 6pm<br />
                                Dinner 4pm - 10pm
                            </Col>
                            <Col xs={6}>
                                <strong>Saturdays</strong><br />
                                OPEN 9am - 11pm<br />
                                Brunch 9am - 1pm<br />
                                Happy Hour 4pm - 6pm<br />
                                Dinner 4pm - 10pm
                            </Col>
                        </Row>
                    </Col>
                    
                    {/* Empty Column for Spacing */}
                    <Col></Col>
                    
                    {/* Subscribe Column */}
                    <Col>
                        <h3>SUBSCRIBE</h3>
                        <Form>
                            <Form.Control 
                                type="text" 
                                placeholder="First Name" 
                                className="mb-2"
                            />
                            <Form.Control 
                                type="text" 
                                placeholder="Last Name" 
                                className="mb-2"
                            />
                            <Form.Control 
                                type="email" 
                                placeholder="Email Address" 
                                className="mb-3"
                            />
                            <Button variant="primary">Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}