import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>LANNAPOLY</h1>
      </div>
      <div className="navbar">
        <a href="/" className="navbar-button">Home</a>
        <a href="/about" className="navbar-button">About</a>
        <a href="/services" className="navbar-button">Courses</a>
        <a href="/contact" className="navbar-button">Contact</a>
      </div>
    </div>
  );
};

export default Header;
