import React, { useState } from 'react';
import './styles/PropertyDetailsPage.css'; // Ensure the path is correct
import Navbar from './components/common/layout/Navbar.jsx'; // Ensure the path is correct
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image12 from './assets/image12.jpg';
import image13 from './assets/image13.jpg';
import image14 from './assets/image14.jpg';
import image15 from './assets/image15.jpg';
import image16 from './assets/image16.jpg';
import image17 from './assets/image17.jpg';
import image18 from './assets/image18.webp';
import h4 from './assets/h4.webp';


const PropertyDetail = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details-container">
      <Navbar />

      <div className="property-main-image">
        <img src={property.mainImage} alt="Main property" />
      </div>

      <div className="property-info">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Owner:</strong> {property.owner.name} ({property.owner.email})</p>
      </div>

      <div className="property-images-slideshow">
        <button onClick={handlePrevImage}>&lt;</button>
        <img src={property.images[currentImageIndex]} alt="Property slideshow" />
        <button onClick={handleNextImage}>&gt;</button>
      </div>

      <footer className="footer">
        <h3>Start Your Journey Today</h3>
        <p>Join the V&I community and unlock the potential of real estate tokenization. Whether you are a seasoned investor or new to the market, our platform is designed to help you achieve your investment goals.</p>
        <div className="footer-content">
          <div className="footer-left">
            <h3>Get in Touch</h3>
            <p>For more information or assistance, please contact us at:</p>
            <ul>
              <li>Address: 20157 Street, Nakuru, Kenya</li>
              <li>Phone: +254714205641</li>
              <li>Email: ababuoturi@gmail.com</li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Featured Properties</h3>
            <ul>
              <li>3 Bedroom House in Bahati, Nakuru - Ksh 7,500,000</li>
              <li>Modern Office Space in Nairobi - Ksh 25,000,000</li>
              <li>Luxury Villa in Diani Beach - Ksh 50,000,000</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 V&I. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetail;
