import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // To handle navigation to donate page

export function Description4() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={7}>
          <img
            src="../src/assets/images/girl.jpg"
            width="100%"
            className="d-inline-block align-top rounded-3 shadow-lg"
            alt="Educate Orphaned Children in India"
          />
        </Col>
        <Col md={5}>
          <h2 className="text-primary fw-bold">Help Girls Stay in School</h2>
          <p className="lead">
            Many parts of India, girls face numerous barriers to education—including poverty, social stigma, and lack of proper hygiene 
           facilities—which often force them to drop out before completing school. Our Help Girls Stay in School initiative is dedicated to removing
            these obstacles by providing essential resources such as school supplies, menstrual hygiene kits, uniforms, and access to safe learning environments.
             By supporting this campaign, you are not just keeping a girl in school—you are opening the door to her independence, health, and future opportunities. Empower a girl today, and you empower generations to come.


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
