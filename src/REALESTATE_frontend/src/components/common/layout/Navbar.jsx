import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import image9 from '../../../assets/image9.jpg';
// Ensure you have the appropriate CSS file

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="left-content">
          <img src={image9} alt="Logo" style={{ width: '60px', height: 'auto' }} />
          <div className="logo">Real Estate Token</div>
        </div>
        <div className="navbar-icons">
          {!menuOpen && <FaBars className="menu-icon" onClick={toggleMenu} />}
          {menuOpen && <FaTimes className="close-icon" onClick={toggleMenu} />}
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <a href="#" className="dropdown-link">Properties</a>
              <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                <ul>
                  <li> <a href="#">Residential Properties</a></li>
                  <li><a href="#">Commercial Properties</a></li>
                  <li>  <a href="#">Infrastructure</a></li>
                  <li><a href="#">Land</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
