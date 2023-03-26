import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navbars() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{margin:"10px", color:'white'}}>Home</Link>
            <Link to="/about" style={{margin:"10px", color:'white'}}>About</Link>
            <Link to="/user" style={{margin:"10px", color:'white'}}>User</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;