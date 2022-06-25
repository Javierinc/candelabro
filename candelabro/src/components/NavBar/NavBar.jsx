import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='navbar-container'>
        <a className='logo' href="#">Candelabro</a>
        <ul className='list-menu'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Velas</a></li>
            <li><a href="#">Decoración</a></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar