import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import image9 from '../../../assets/image9.jpg';
import image91 from '../../../assets/image91.jpg';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="left-content">
          <img src={image9} alt="Logo" className="logo-image" />
          <div className="logo">RETChain</div>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="# PropertyList.jsx">Marketplace</a></li>
            <li>
              <a href="#" onClick={() => toggleDropdown('tokens')}>Tokens</a>
              {dropdownOpen === 'tokens' && (
                <ul className="dropdown">
                  <li><a href="#">Buy Tokens</a></li>
                  <li><a href="#">Sell Tokens</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('knowledge')}>Knowledge</a>
              {dropdownOpen === 'knowledge' && (
                <ul className="dropdown">
                  <li><a href="#">Solution</a></li>
                  <li><a href="#">Tokenization</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('about')}>About Us</a>
              {dropdownOpen === 'about' && (
                <ul className="dropdown">
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Vision & Mission</a></li>
                </ul>
              )}
            </li>
            <li className="cart">
              <img src={image91} alt="Cart" />
            </li>
            <li className="login-btn">
              <div className='btn'><a href="#">Login</a></div>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
