import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // To handle navigation to donate page

export function Description3() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={7}>
          <img
            src="../src/assets/images/homecom3.jpg"
            width="100%"
            className="d-inline-block align-top rounded-3 shadow-lg"
            alt="Educate Orphaned Children in India"
          />
        </Col>
        <Col md={5}>
          <h2 className="text-primary fw-bold">Educate Orphaned Children in India</h2>
          <p className="lead">
            Millions of orphaned children in India face a daily struggle for basic needs, with education often becoming an 
            unattainable dream. Through our Educate Orphaned Children in India program, we strive to break this cycle by offering access to 
            quality education, school supplies, uniforms, and mentorship. Your support helps provide not just classroom learning but also the 
            emotional and social support these children need to grow into confident, independent individuals. Every contribution creates a ripple 
            effect—empowering a child today to become a responsible citizen tomorrow. Join us in building a future where every orphaned child gets the
             chance to learn, grow, and succeed.


          </p>
          <Link to="/donate">
            <Button
              variant="success"
              size="lg"
              className="mt-3 px-4 py-2"
            >
              Donate Now
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
