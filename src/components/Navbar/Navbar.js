import React, {useState} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from './NavbarElements';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
      <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {/* if i click the MobileIcon, I want the FaTimes to be displayed, and the FaBars to be displayed otherwise ie when not true */}
              {click ? <FaTimes /> : <FaBars />} 
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      
      </>
  );
};

export default Navbar;