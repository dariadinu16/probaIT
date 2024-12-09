
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <Link to="/recipes">Rețete</Link>
        <Link to="/add-recipe">Adaugă Rețetă</Link>
      </div>
      <div className="right-nav">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
