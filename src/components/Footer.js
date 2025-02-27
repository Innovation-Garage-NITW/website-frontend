import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cii.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}>
            <span>ADDRESS</span>
            <p>CII HOD, National Institute of Technology Campus, Hanamkonda, Telangana 506004</p>
          </Col>
          <Col size={12} sm={4}>
          <span>CONTACT</span>
            <p>+91 94413 42324</p>
            <p>+91 96184 11000</p>
            <a href='mailto:hod_cii@nitw.ac.in'>hod_cii@nitw.ac.in</a>
            <br/>
            <a href='mailto:ig-nitw@student.nitw.ac.in'>ig-nitw@student.nitw.ac.in</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;