import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


   const navigate = useNavigate();

  
  return (
    <Container fluid>
      <Container fluid className="">
        <Row className="justify-content-center">
          <Col md={12}>
            <Carousel fade interval={2000}>
              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/slider-2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second Slide</h3>
                  <p>Description for the second slide.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/slider-3.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third Slide</h3>
                  <p>Description for the third slide.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/slider-5.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Fifth Slide</h3>
                  <p>Description for the third slide.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/slider-6.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Sixth Slide</h3>
                  <p>Description for the third slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 ">
        <Row>
          <Col md={6} className="test-justify">
            <h2>Why us?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              aut perspiciatis laborum repellat esse hic nihil a placeat
              accusamus fugit. Iusto earum ea esse beatae quae soluta vero
              cupiditate commodi.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati aut perspiciatis laborum repellat esse
              hic nihil a placeat accusamus fugit. Iusto earum ea esse beatae
              quae soluta vero cupiditate commodi.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Obcaecati aut perspiciatis laborum
              repellat esse hic nihil a placeat accusamus fugit. Iusto earum ea
              esse beatae quae soluta vero cupiditate commodi.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <img
              src="../src/assets/images/whyUs.jpg"
              width="100%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="slider-container">
          <h2>Auto Play Slider</h2>
          <Slider {...settings}>
            <div>
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  width="100%"
                  height="200px"
                  src="../src/assets/images/homecom1.jpg"
                />
                <Card.Body>
                  <Card.Title>Help Provide Needs For The Elderly</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"  onClick={() => navigate('/description')}>See more</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  width="100%"
                  height="200px"
                  src="../src/assets/images/homecom2.jpg"
                />
                <Card.Body>
                  <Card.Title>Stop Child Labour</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"  onClick={() => navigate('/description')}>See more</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  width="100%"
                  height="200px"
                  src="../src/assets/images/homecom3.jpg"
                />
                <Card.Body>
                  <Card.Title>Support Children's Education</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate('/description')}>See more</Button>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </Container>

      <Container className="mt-5 DonateCar">
        <h2 className="text-center mb-4">Our Campaigns</h2>
        <Carousel interval={3000}>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <img
                  src="../src/assets/images/donate1.jpg"
                  className="d-block w-100"
                  height="450px"
                  alt="Campaign 1"
                />
                <Carousel.Caption className="DonateCarousel">
                  <h3 className="mt-3">Proud to Donate</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <img
                  src="../src/assets/images/donate2.jpg"
                  className="d-block w-100"
                  height="450px"
                  alt="Campaign 2"
                />
                <Carousel.Caption className="DonateCarousel">
                  <h3 className="mt-3">Proud to Donate</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <img
                  src="../src/assets/images/donate3.jpg"
                  className="d-block w-100"
                  height="450px"
                  alt="Campaign 3"
                />
                <Carousel.Caption className="DonateCarousel">
                  <h3 className="mt-3">Proud to Donate</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}
