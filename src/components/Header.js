import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__link" to="/inventory">Inventario</Link>
        <Link className="header__link" to="/sales">Ventas</Link>
        <Link className="header__link" onClick={onLogout}>Cerrar Sesión</Link>
      </nav>
    </header>
  );
}

export default Header;
