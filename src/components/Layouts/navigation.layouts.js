import { Navbar, Container, Nav } from 'react-bootstrap';
const Navigation = () => {
  return (
    <>
      <Navbar bg="dark " variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Dimas Course</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/albums">Images</Nav.Link>
              <Nav.Link href="/posts">Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
