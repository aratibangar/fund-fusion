import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // Adjust this path if needed
import "./Footer.css"; // Add this if you are using custom styles

export function FooterCon() {
  return (
    <footer className="footer-section mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <img
              src={logo}
              width="150"
              height="70"
              className="d-inline-block align-top mb-3"
              alt="FunFunding Logo"
            />
            <p className="footer-description">
              FunFunding is a child donation platform committed to transforming lives through collective compassion and transparent giving.
            </p>
          </Col>

          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <li><Link to="/">Home</Link></li>
<li><Link to="/aboutus">About Us</Link></li>
<li><Link to="/contactus">Contact Us</Link></li>
<li><Link to="/donate">Donate</Link></li>

            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <p><strong>Address:</strong> CDAC Kharghar, Navi Mumbai</p>
            <p><strong>Phone:</strong> +91 97586 5376</p>
            <p><strong>Email:</strong> crowdfunding@gmail.com</p>
          </Col>
        </Row>

        <hr />

        <Row className="text-center mb-3">
          <Col>
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </Col>
        </Row>

        <div className="text-center pb-3 whitec">
          <p className="mb-0 text-muted " >&copy; 2025 FunFunding.com — All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
