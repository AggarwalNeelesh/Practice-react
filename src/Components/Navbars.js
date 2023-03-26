import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function Navbars() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto Navib">
          <NavLink className='abc' to="/" style={{margin:"10px"}}>Home</NavLink>
            <NavLink className='abc' to="/about" style={{margin:"10px"}}>About</NavLink>
            <NavLink  className='abc' to="/user" style={{margin:"10px"}}>User</NavLink>
            <NavLink  className='abc' to="/filter" style={{margin:"10px"}}>Filter</NavLink>
            <NavLink  className='abc' to="/xyz" style={{margin:"10px"}}>Company</NavLink>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbars;