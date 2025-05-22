import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export function NavigationBar() {
  return (
    <Navbar expand="lg" bg="light" className="bg-navbarc shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            width="150"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
             <Nav.Link as={Link} to="/allcampaigns">All Campaigns</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
             
          </Nav>

          <Nav className="d-flex gap-2">
            <Button
              variant="outline-primary"
              as={Link}
              to="/login"
              className="px-4"
            >
              Login
            </Button>
            <Button
              variant="primary"
              as={Link}
              to="/register"
              className="px-4"
            >
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
