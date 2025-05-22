import { Button, Col, Container, Row } from "react-bootstrap";


export function Description() {
       
  return (

    <Container>
      <Row>
        <Col md={7}>
          <img
            src="../src/assets/images/whyUs.jpg"
            width="100%"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Col>
        <Col md={5}>
        <h2>Support Children's Education</h2>
          <p>
            With your support, we address children’s critical needs by working
            with parents, teachers, Anganwadi workers, communities, district and
            state level governments as well as the children themselves. We focus
            on changing behaviours and practices at the grassroots level and
            influencing public policy at a systemic level – thereby creating an
            ecosystem where children are made the nation’s priority.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dicta optio, voluptas
            officiis quae laboriosam qui earum libero id, possimus amet
            explicabo ad porro velit assumenda consectetur impedit in illum
            doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis hic earum sequi! Dolorem dolore aperiam hic accusamus
            facilis impedit quia quos perspiciatis amet, vel nam molestiae, quae
            temporibus a ex!
          </p>
         
        </Col>
      </Row>
    </Container>
  );
}
