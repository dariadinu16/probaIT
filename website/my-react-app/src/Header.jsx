
import React from 'react';
import './Header.css'; 
import Navbar from './Navbar'; 

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>chefIT</h1>
        <Navbar /> {/* Aici includem Navbar-ul */}
      </div>
    </header>
  );
};

export default Header;
