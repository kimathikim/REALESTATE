import React from 'react';
import Navbar from './components/common/layouts/Navbar.jsx';
import Footer from './components/common/layouts/Footer.jsx';
import { motion } from 'framer-motion';
import './Marketplace.css';

const Marketplace = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="marketplace-container">
      {/* Navbar Component */}
      <Navbar />

      {/* Top Section */}
      <section className="top-section">
      <motion.div 
          className="top-text" 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          transition={{ duration: 0.7 }}>
          <h1>Our Listings</h1>
        </motion.div>
        <motion.div 
          className="top-text" 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          transition={{ duration: 0.7 }}>
          <p>Find your next property investment through tokenization. Real estate made simple.</p>
        </motion.div>
        <motion.img 
          src="path_to_image.jpg" 
          alt="Featured Property" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} />
      </section>

      {/* Scrollable Property Listings in a Single Div */}
      <section className="property-listings">
        <motion.div 
          className="listing-container"
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          transition={{ duration: 0.7 }}>
          <div className="scrollable-listing">
            {[...Array(6)].map((_, index) => (
              <motion.div 
                className="listing-item" 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={`path_to_image${index}.jpg`} alt={`Property ${index + 1}`} />
                <p>Property {index + 1}</p>
                <span>Location: City {index + 1}</span>
                <span>Price: $X,XXX,XXX</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.button 
          className="view-more-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View More
        </motion.button>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <motion.h2 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          transition={{ duration: 0.5 }}>
          Why Choose Us?
        </motion.h2>
        <motion.p 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          transition={{ duration: 0.7 }}>
          We make real estate investment accessible through tokenization, allowing you to own a fraction of high-value properties.
        </motion.p>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Marketplace;
