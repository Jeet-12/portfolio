import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/thejeetdewangan1" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/jeet.dewangan.50?mibextid=ZbWKwL" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/the_real_jeet_?igshid=Y2M0YTlkZGNmOQ==" target="_blank"><img src={navIcon3} alt="" /></a>
             </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
