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
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplaySpeed: 2000,
      },
    },
  ],
  };


   const navigate = useNavigate();

return (
    <Container fluid className="marginpadd">
      <Container fluid className="marginpadd">
        <Row className="justify-content-center">
          <Col md={12}>
            <Carousel fade interval={2000}>
              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                 
                  <p>      </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  
                  <p>         </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/4.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  
                  <p>        </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slidercon"
                  src="../src/assets/images/6.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                 
                  <p>         </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>


      <Container className="mt-5 ">
        <Row>
          <Col md={6} className="test-justify">
            <h2>Why Choose Fund Funding?</h2>
            <p>
             
FunFunding is a trusted crowdfunding platform focused on creating real impact.
We support causes that matter—child education, environment, healthcare, and more.
Our mission is to empower changemakers and connect them with compassionate donors.
Every campaign undergoes a quality check to ensure transparency and legitimacy.
Donors receive regular updates and real-time progress on their contributions.
Our user-friendly interface makes donating fast, safe, and hassle-free.
We use secure payment gateways to protect donor privacy and data.
With a growing community, we believe collective giving creates powerful change.
Be a part of our journey—together, let’s build a better world.
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

      <Container className="">
        <div className="slider-container ">
          <h2 className="text-center mt-5 mb-5">Ongoing Campaign</h2>
          <Slider {...settings}>
            <div>
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  width="100%"
                  height="200px"
                  src="../src/assets/images/scrum.jpg"
                />
                <Card.Body>
                  <Card.Title>Support Slum Children Basic Education</Card.Title>
                  <Card.Text>
                    <h6>Project Id 1</h6>
                    Many children living in urban slums are deprived of basic education due to poverty. Your contribution can help us set up classrooms and provide study materials for 100+ children.
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
                  src="../src/assets/images/d2.jpg"
                />
                <Card.Body>
                  <Card.Title>Sponsor School Kits for Rural Kids</Card.Title>
                  <h6>Project Id 2</h6>
                  <Card.Text>
                          Thousands of children in remote villages attend school without proper bags, books, or stationery. We aim to distribute 500 school kits to ensure they start the academic year with dignity.
                  </Card.Text>
                  <Button variant="primary"  onClick={() => navigate('/description2')}>See more</Button>
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
                  <Card.Title>Educate Orphaned Children in India</Card.Title>
                 <h6>Project Id 1</h6>
                  <Card.Text>
                    Orphaned children often struggle to access formal education. This campaign supports 25 children in a shelter home with tuition fees, uniforms, and extracurricular activities for one full year.
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate('/description3')}>See more</Button>
                </Card.Body>
              </Card>
            </div>
       
       <div>
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  width="100%"
                  height="200px"
                  src="../src/assets/images/girl.jpg"
                />
                <Card.Body>
                  <Card.Title>Help Girls Stay in School</Card.Title>
                  <h6>Project Id 1</h6>
                  <Card.Text>
                    Many girls drop out of school due to financial challenges or lack of menstrual hygiene support.Our Help Girls Stay in School initiative is dedicated to removing these obstacles by providing essential help. 
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate('/description4')}>See more</Button>
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
                  src="../src/assets/images/do1.jpg"
                  className="d-block w-100"
                  height="450px"
                  alt="Campaign 1"
                />
                <Carousel.Caption className="DonateCarousel">
                  <h3 className="mt-3">Proud to Donate</h3>
                      <p>
                  
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <img
                  src="../src/assets/images/do2.jpg"
                  className="d-block w-100"
                  height="450px"
                  alt="Campaign 2"
                />
                <Carousel.Caption className="DonateCarousel">
                  <h3 className="mt-3">Proud to Donate</h3>
                       <p>
                  
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <img
                  src="../src/assets/images/3.jpg"
                  className="d-block w-100"
                  height="450px"
                  alt="Campaign 3"
                />
                <Carousel.Caption className="DonateCarousel">
                  <h3 className="mt-3">Proud to Donate</h3>
                  <p>
                  
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
