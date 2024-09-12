import React from 'react';
import '../../../styles/Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}>
            <p className='p2'>&copy; 2024 RETChain. All Rights Reserved.</p>
            <div>
              <h4>Contact Us</h4>
              <a href="mailto:ababuoturi@gmail.com?subject=Inquiry&body=Hello, I have a question...">ababuoturi@gmail.com</a>
            </div>
            <div>
              <h4>Follow Us</h4>
              <p>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
            <div>
              <h4>Newsletter</h4>
              <p>Subscribe for updates</p>
            </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
