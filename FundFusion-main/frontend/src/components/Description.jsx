import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // To handle navigation to donate page

export function Description() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={7}>
          <img
            src="../src/assets/images/whyUs.jpg"
            width="100%"
            className="d-inline-block align-top rounded-3 shadow-lg"
            alt="Support Children's Education"
          />
        </Col>
        <Col md={5}>
          <h2 className="text-primary fw-bold">Support Children's Education</h2>
          <p className="lead">
            With your support, we address children’s critical needs by working
            with parents, teachers, Anganwadi workers, communities, district and
            state level governments as well as the children themselves. We focus
            on changing behaviors and practices at the grassroots level and
            influencing public policy at a systemic level – creating an ecosystem
            where children are made the nation’s priority. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dicta optio, voluptas officiis
            quae laboriosam qui earum libero id, possimus amet explicabo ad porro
            velit assumenda consectetur impedit in illum doloribus.
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
