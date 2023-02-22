import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" bg="success" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pokemon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/pokemon">
              Pokemon list
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
