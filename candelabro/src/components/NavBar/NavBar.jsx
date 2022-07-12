
import { NavbarContainer, NavbarWrapper, IconLogo, Menu, MenuItem, MenuItemLink, IconLogoMobile } from './Navbar.elemenst'
import { GiLitCandelabra } from "react-icons/gi";
import { FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
const Nabvar = () => {
    const [click, setClick] = useState(false)
    
    const ChangeClick = ( ) => {
        setClick(!click)
    }
  return (
    <>
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogo to='/'> <GiLitCandelabra size={"2em"}/>Candelabro</IconLogo>
                <IconLogoMobile onClick={()=> ChangeClick()}>
                    { click ? <FaTimes/>: <FaBars/>}
                </IconLogoMobile>
                <Menu click = {click}>
                    <MenuItem onClick={()=> ChangeClick()}>
                        <MenuItemLink to='/productos/velas'>Velas</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={()=> ChangeClick()}>
                        <MenuItemLink to='/productos/decoracion'>Decoración</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={()=> ChangeClick()}>
                        <MenuItemLink to='/productos/inciensos'>Inciensos</MenuItemLink>
                    </MenuItem>
                    
                </Menu>
                <CartWidget/>
            </NavbarWrapper>
        </NavbarContainer>
    </>
  )
}

export default Nabvar