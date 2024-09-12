import React from 'react';
import Navbar from './components/common/layout/Navbar.jsx';
import Footer from './components/common/layout/Footer.jsx';
import { motion } from 'framer-motion';
import './styles/Marketplace.css';
import blockImage from './assets/block2.png'; // Import the image
import officeImage from './assets/image1.jpg'; 
import hotelImage from './assets/image12.jpg'; 
import apartImage1 from './assets/lr12.jpg'; 
import apartImage2 from './assets/image13.jpg'; 
import factoryImage from './assets/lr16.jpg'; 
import office15 from './assets/office5.webp'; 

// Conversion rates
const USD_TO_KES = 140; // Example conversion rate
const TOKEN_PRICE = 100; // Price of one token in KES

// Function to convert USD price to KES
const convertToKES = (price) => {
  const amountInUSD = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  return (amountInUSD * USD_TO_KES).toLocaleString();
};

// Function to calculate tokens and their price
const calculateTokensAndPrice = (priceInKES) => {
  const tokens = Math.round(priceInKES / TOKEN_PRICE); // Calculate number of tokens
  const tokenPrice = TOKEN_PRICE; // Price of each token
  return { tokens, tokenPrice };
};

const properties = [
  { image: officeImage, name: 'Residential Apartment', location: 'Mirema, Nairobi', price: '$1,200,000' },
  { image: hotelImage, name: 'Factory Space', location: 'Mombasa', price: '$3,500,000' },
  { image: apartImage1, name: 'Luxury Home', location: 'Kileleshwa, Nairobi', price: '$800,000' },
  { image: apartImage2, name: 'Modern Restaurant', location: 'Westlands, Kilifi', price: '$850,000' },
  { image: factoryImage, name: 'Residential Home', location: 'Lavington, Nairobi', price: '$2,000,000' },
  { image: office15, name: 'Modern Offices', location: 'Parliament Road, Nairobi', price: '$1,500,000' }
];

const Marketplace = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
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
          transition={{ duration: 2.5 }}>
            <h1>Our Listings</h1>
          <p>Find your next property investment through tokenization. Enjoy lower capital requirements, increased liquidity, and real-time tracking of your investments. Trust in our cutting-edge technology and industry expertise to transform the way you invest in real estate.</p>
        </motion.div>
        <motion.img 
          src={blockImage} // Use the imported image
          alt="Featured Property" 
          initial="hidden" 
          animate="visible" 
          variants={fadeInFromRight} 
          transition={{ duration: 2.5 }} />
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
            {properties.map((property, index) => {
              const priceInKES = parseFloat(convertToKES(property.price).replace(/,/g, ''));
              const { tokens, tokenPrice } = calculateTokensAndPrice(priceInKES);
              
              return (
                <motion.div 
                  className="listing-item" 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}>
                  <img src={property.image} alt={property.name} />
                  <p><strong>Name:</strong> {property.name}</p>
                  <span><strong>Location:</strong> {property.location}</span>
                  <span><strong>Price:</strong> {convertToKES(property.price)} KES</span>
                  <span><strong>Tokens:</strong> {tokens}</span>
                  <span><strong>Token Price:</strong> KES {tokenPrice}</span>
                  <button className="view-property-btn">View Property</button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
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
          We make real estate investment accessible through tokenization, allowing you to own a fraction of high-value properties. Real estate made simple. Unlock the future of real estate investment with our innovative tokenization platform. By converting property assets into digital tokens, we provide a secure, transparent, and accessible investment opportunity.
        </motion.p>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Marketplace;
