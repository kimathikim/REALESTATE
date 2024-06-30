import React from 'react';
import './styles/PropertyList.css';
import './properties/PropertyDetail.jsx';
import Navbar from  './components/common/layout/Navbar.jsx';'./layout/Navbar.jsx';
import { FaMapMarkerAlt, FaBed, FaEnvelope, FaPhone } from 'react-icons/fa';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';


function PropertyList() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <div className="page-intro">
          <div className="intro-content">
            <h1>Welcome</h1>
            <h2>We're Here To Find Your New Home</h2>
            <p>Find your ideal property here, Your comfort is our concern</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search properties..." />
            <button>Search</button>
          </div>
        </div>
        <div className="property-listing">
          <div className="property">
            <div className="image-container">
              <img src={image8} alt="Property 1" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
       <a href=""> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image7} alt="Property 2" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image1} alt="Property 3" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image6} alt="Property 4" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image2} alt="Property 5" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image8} alt="Property 6" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image8} alt="Property 6" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
          </div>
          <div className="property">
      <div className="image-container">
        <img src={image2} alt="Property 5" style={{ width: '300px', height: '300px' }} />
      </div>
      <div className="property-info">
        <h2>3 Bedroom House</h2>
        <p><i>Status:</i> <b>For Sale</b></p> {/* or Not for Sale */}
        <p><FaMapMarkerAlt /><b>Bahati, Nakuru</b></p>
        <p>Cost: <b>Ksh 7,500,000</b></p>
        <p><FaBed /> 3 Bedrooms</p>
        <p><FaPhone /> <b>+254714205641</b></p>
        <p><FaEnvelope /><b>ababuoturi@gmsil.com</b></p>
        <a href="PropertyDetail.jsx"> <p className='details'>More Details</p></a>
      </div>
    </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>V&I</h3>
            <p>Address: 20157 Street, Nakuru, Kenya</p>
            <p>Phone: +254714205641</p>
            <p>Email: ababuoturi@gmail.com</p>
          </div>
          <div className="footer-right">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 V&I. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PropertyList;
