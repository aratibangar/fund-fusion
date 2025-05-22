import { Container, Row, Col } from "react-bootstrap";

export function FooterCon() {
  return (
    <Container className="footer-h2 mt-5">
      
      <Row>
        <Col>
        <a><img
            src="../src/assets/images/logo.jpg"
            width="150"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas deserunt odit distinctio explicabo earum, ad itaque ratione doloremque! Repellat necessitatibus nam quod aut, unde sed
             exercitationem ipsam esse molestiae ab?</p>
        
         
        </Col>
         
        <Col className="footerLink">
        
        <h3>Links</h3>
        <p><a href="/Home.jsx">Home</a></p>
        <p><a href="/Home.jsx">About us</a></p>
        <p><a href="/Home.jsx">Contact us</a></p>
        <p><a href="/Home.jsx">Donate</a></p>
        </Col>
        <Col>
        <h3>Contact us</h3>
        <h6 className="footerh6"><b>Address :</b></h6>
        <p>At : CDAC Kharghar</p>
        <h6 className="footerh6"><b>Phone No. : </b></h6>
        <p>975865376</p>
        <h6 className="footerh6"><b>Email : </b></h6>
        <p>crowdfunding@gmail.com</p>
        </Col>
        <hr />
        <p id="copyright">© Copyright 2025 by crowdfunding.com All Rights Reserved.</p>
      </Row>
    </Container>
  );
}
