
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function Donate() {
  return (

     <Container className="mt-2 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form style={{ width: '100%', maxWidth: '600px', backgroundColor: 'white', padding: '40px', boxShadow: 'rgb(244, 244, 244) 0px 0px 50px 15px' }}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFname">
          <Form.Label> First name</Form.Label>
          <Form.Control type="text" placeholder="Enter firstname" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLname">
          <Form.Label> Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter lastname" />
        </Form.Group>
      </Row>

      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label> Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label> City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone no.</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone no." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formGridAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter Amount" />
      </Form.Group>

      </Row>
        <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

