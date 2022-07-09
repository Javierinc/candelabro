import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <NavLink to='/'>Candelabro</NavLink>
      <Nav className="me-auto">
        <Link to='/productos/velas'>Velas</Link>
        <Link to='/productos/decoracion'>Decoración</Link>
      </Nav>
      <CartWidget/>
      </Container>
    </Navbar>
  )
}

export default NavBar