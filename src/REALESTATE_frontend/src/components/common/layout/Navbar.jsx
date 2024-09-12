import React, { useState } from 'react';
import '../../../styles/Navbar.css';  // Ensure this path is correct
import { motion } from 'framer-motion';  // Import framer-motion for animations
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for bar and close

const Navbar = () => {
  // Animation config
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <motion.h1 
        className="logo"
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp} 
        transition={{ duration: 0.5 }}
      >
        RETChain
      </motion.h1>
      
      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Marketplace</li>
          <li>Tokens</li> {/* Corrected typo */}
          <li>Listings</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
