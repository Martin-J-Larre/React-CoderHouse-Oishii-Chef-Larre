import React from 'react';
import { Nav,
         NavLink,
         Bars,
         NavMenu,
         NavBtn, 
         NavBtnLink 
        } from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
                  {/* Cambiar <h1>Logo</> un tag <img> con imagen del logo */}
                  <h1>Logo</h1>
              </NavLink>
              <Bars />
              <NavMenu>
                  <NavLink to="/inicio" activeStyle>
                      Inicio
                  </NavLink>
                  <NavLink to="/nosotros" activeStyle>
                      Nosotros
                  </NavLink>
                  <NavLink to="/productos" activeStyle>
                      Productos
                  </NavLink>
                  <NavLink to="/promociones" activeStyle>
                      Promociones
                  </NavLink>
                  <NavLink to="/contacto" activeStyle>
                      Contacto
                  </NavLink>
              </NavMenu>
              <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
          </Nav>
        </>
    )
}

export default Navbar

