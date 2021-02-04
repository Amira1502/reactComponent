import React from 'react';
import img from '../../Assest/profile.jpg'
import {Row, Container,Col} from 'react-bootstrap'


const Photo = () => {
    return (
        <div>
            <Container>
  <Row>
  <Col xs={6} md={4}>
  <img src={img} alt="profile" style={{alignContent:"center", margin: "20px" }} />
</Col>
  </Row>
 
</Container>
        </div>
    )
}

export default Photo