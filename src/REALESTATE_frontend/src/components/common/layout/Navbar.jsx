
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import image9 from '../../../assets/image9.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <img src={image9} alt="Logo" style={{ width: '60px', height: 'auto' }} />
        <div className="logo">Real Estate Token</div>
        <div className="navbar-icons">
          {!menuOpen && (
            <FaBars className="menu-icon" onClick={toggleMenu} />
          )}
          {menuOpen && (
            <FaTimes className="close-icon" onClick={toggleMenu} />
          )}
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">Property Token</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
