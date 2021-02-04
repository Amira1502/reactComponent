import React from 'react';
import { Form,Col,Row } from 'react-bootstrap';

const Fullname = ()  => {
    return(
        <div>
    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
        </div>
      
    );
};
export default Fullname
