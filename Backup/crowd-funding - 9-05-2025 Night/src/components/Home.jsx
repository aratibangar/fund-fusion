import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


// Service data
const serviceData = [
  {
    id: 1,
    title: "Help Provide Needs For The Elderly",
    description: "The phase of life can be the most trying time for the elderly...",
    image: "../src/assets/images/homecom1.jpg",
  },
  {
    id: 2,
    title: "Help Us Save the Nature!!",
    description: "Conserve India’s unique wildlife heritage. Join us in our mission to protect the environment.",
    image: "../src/assets/images/homecom2.jpg",
  },
  {
    id: 3,
    title: "Donate For Poor Children Education",
    description: "Every child deserves access to education, regardless of their background.",
    image: "../src/assets/images/homecom3.jpg",
  },
];

// Responsive settings for MultiCarousel
const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export function Home() {
  return (
    <Container fluid >
      <Container fluid className="">
        <Row className="justify-content-center">
          <Col md={12} >
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

      <Container>
        <Row>
          <Col className="mt-5 test-justify" md={6}>
            <h2>Why us ?</h2>
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

      <Container className="mt-5">
        <h2 className="text-center mb-4">Ongoing Campaigns</h2>
        <MultiCarousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows
          showDots={false}
        >
          {serviceData.map((service, id) => (
            <div key={id} className="text-center p-3">
              <img
                src={service.image}
                alt={service.title}
                width="100%"
                height="250"
                className="mb-3"
              />
              <h5>{service.title}</h5>
              <p>{service.description}</p>
              <p className="mt-4">
                <Link to ="/Description" className="seemore">
                See More
              </Link></p>
            </div>
          ))}
        </MultiCarousel>
      </Container>
    </Container>
  );
}
