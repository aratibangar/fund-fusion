import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // To handle navigation to donate page

export function Description2() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={7}>
          <img
            src=" ../src/assets/images/d2.jpg"
            width="100%"
            className="d-inline-block align-top rounded-3 shadow-lg"
            alt="Sponsor School Kits for Rural Kids"
          />
        </Col>
        <Col md={5}>
          <h2 className="text-primary fw-bold">Sponsor School Kits for Rural Kids</h2>
          <p className="lead">
            Education is a powerful tool that can change lives, but many children in rural areas begin their academic journey without even the most basic school supplies. 
            Through the "Sponsor School Kits for Rural Kids" initiative, you can help bridge this gap by providing essential items like school bags, notebooks, pens, pencils,
            erasers, and geometry boxes. Each kit, costing just ₹500, equips a child with the tools they need to learn, participate confidently in class, and stay motivated throughout 
            the school year. Your support not only helps improve attendance and reduce dropout rates but also brings hope and encouragement to young minds eager to learn. 
            Together, we aim to reach 1,000 students across underserved villages—be a part of this mission and help shape a brighter future, one school kit at a time.

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
