import React from 'react';
import './styles/PropertyList2.css';
import './styles/PropertyList.css';
import Navbar from './components/common/layout/Navbar.jsx';
import { FaMapMarkerAlt } from 'react-icons/fa';
//import { useHistory } from 'react-router-dom';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image12 from './assets/image12.jpg';
import image13 from './assets/image13.jpg';
import image14 from './assets/image14.jpg';
import image15 from './assets/image15.jpg';
import image16 from './assets/image16.jpg';
import image17 from './assets/image17.jpg';

function PropertyList() {
  //const history = useHistory();

  const navigateToDetails = () => {
    history.push('/PropertyDetail');
  };

  const properties = [
    {
      image: image12,
      location: 'Nairobi, Kenya',
      totalPrice: '$12,500,000',
      tokenPrice: '$25,000',
      expectedIncome: '$1,200,000',
      incomeStartDate: '01/08/2024',
      incomePerToken: '$10,000',
      tokens: '500'
    },
    {
      image: image17,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image12,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image17,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    {
      image: image14,
      location: 'Mombasa, Kenya',
      totalPrice: '$20,000,000',
      tokenPrice: '$40,000',
      expectedIncome: '$2,000,000',
      incomeStartDate: '15/08/2024',
      incomePerToken: '$20,000',
      tokens: '500'
    },
    // Add more properties here...
  ];

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="intro-message">
          <h1>Our Listings</h1>
          <h3>Your Gateway to Smart Real Estate Investment</h3>
          <p>Invest in real estate with confidence and security through our innovative tokenization platform. You will get an opportunity for fractional, tokenized ownership. Powered by Blockchain Technology.</p>
        </div>
        <div className="property-listing">
          {properties.map((property, index) => (
            <div className="property-card" key={index}>
              <div className="image-container">
                <img src={property.image} alt={`Property ${index + 1}`} />
                <div className="location">
                    <FaMapMarkerAlt /> {property.location}
                  </div>
              </div>
              <div className="property-info">
                <div className="property-header">
                  < div className="prices">
                   <p className="total-price"><b>Total Price:</b>{property.totalPrice}</p>
                    <p className="token-price"><b>Token Price:</b>{property.tokenPrice}</p>
                  </div>
                </div>
                <div className="property-details">
                  <p><b>Expected Income:</b> {property.expectedIncome}</p>
                  <p><b>Income Start Date:</b> {property.incomeStartDate}</p>
                  <p><b>Income Per Token:</b> {property.incomePerToken}</p>
                  <p><b>Number of Tokens:</b> {property.tokens}</p>
                </div>
                <button className="view-property-btn" onClick={navigateToDetails}>View Property</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <h3>Start Your Journey Today</h3>
        <p>Join the RETChain community and unlock the potential of real estate tokenization. Whether you are a seasoned investor or new to the market, our platform is designed to help you achieve your investment goals.</p>
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
          <p>&copy; 2024 RETChain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PropertyList;
