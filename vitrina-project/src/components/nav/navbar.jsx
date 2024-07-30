import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet} from 'react-router-dom';
import './navbar.css'; // Asegúrate de crear un archivo CSS para estilizar el Navbar

const Navbar = () => {
  return (
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <a><Link to="/">V I T R I N A</Link></a>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-links">
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="/ventas">Ventas</a></li>
              <li><a href="/donaciones">Donaciones</a></li>
              <li><a href="/quienes-somos">Quiénes Somos</a></li>
            </ul>
            <div className="navbar-login">
              <button className="login-button">Inicia sesión</button>
            </div>
          </div>
        </nav>
        <Outlet/>
      </div> 
  ); 
}

export default Navbar;

