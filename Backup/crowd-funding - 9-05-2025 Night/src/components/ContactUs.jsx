import { Col, Container, Form, Row } from "react-bootstrap";

export function ContactUs() {
  return (
    <Container>
      

      <Row>
        <Col md={1}></Col>
        <Col md={5}>
          <h2>Our Office Address</h2>
          
          <p>At : CDAC Kharghar, Mumbai</p>
          <h6 className="footerh6">
            <b>Phone No. : </b>
          </h6>
          <p>975865376</p>
          <h6 className="footerh6">
            <b>Email : </b>
          </h6>
          <p>crowdfunding@gmail.com</p>
        </Col>
        <Col md={5}>
        <h2>Get in Touch</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
