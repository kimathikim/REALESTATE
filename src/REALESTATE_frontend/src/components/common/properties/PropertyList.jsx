import React from 'react';
import './styles/PropertyList.css';
import Navbar from './components/common/layout/Navbar.jsx';
import { FaMapMarkerAlt, FaBed, FaEnvelope, FaPhone } from 'react-icons/fa';
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



function PropertyList() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <div className="page-intro">
          <div className="intro-content">
          <h1>Welcome to V&I Real Estate Tokenization</h1>
          <div className="homepage-container">
          <div className="div-left">
          <h2>Discover Your Next Investment Opportunity</h2>
        <p>
          Welcome to V&I, your premier destination for real estate investments and property tokenization. Our platform bridges the gap between traditional real estate and innovative blockchain technology, making property investments accessible and efficient for everyone.
        </p>
          </div>
          <div className="div-right">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide Range of Properties: Explore a diverse selection of properties, including residential, commercial, mixed-use, land, special purpose properties, and luxury estates.</li>
          <li>Secure and Transparent: Our blockchain-based platform ensures secure and transparent transactions, giving you peace of mind with every investment.</li>
          <li>Fractional Ownership: Invest in real estate with ease through fractional ownership, allowing you to own a portion of high-value properties without the need for full ownership.</li>
          <li>Expert Support: Our dedicated team is here to guide you through every step of your investment journey, from property selection to token purchases and beyond.</li>
        </ul>
      </div>
      </div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search properties..." />
            <button>Search</button>
          </div>
        </div>

        <div className="property-listing">
          <div className="property">
            <div className="image-container">
              <img src={image2} alt="Property 1" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
            <div className="property-info">
                <h2>Call to Action</h2>
                <p>Explore this property and invest with Real Estate Token today!</p>  
                <h2>Additional Information</h2>
                <p>Discover seamless ownership opportunities through blockchain technology, ensuring transparency and security in your investments.</p>
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
      </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image1} alt="Property 2" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
                <h2>Call to Action</h2>
                <p>Explore this property and invest with Real Estate Token today!</p>  
                <h2>Additional Information</h2>
                <p>Discover seamless ownership opportunities through blockchain technology, ensuring transparency and security in your investments.</p>
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image12} alt="Property 3" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
                <h2>Call to Action</h2>
                <p>Explore this property and invest with Real Estate Token today!</p>  
                <h2>Additional Information</h2>
                <p>Discover seamless ownership opportunities through blockchain technology, ensuring transparency and security in your investments.</p>
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image13} alt="Property 4" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
                <h2>Property Overview</h2>
                <p>Discover a prime office space, offering a modern and professional environment for businesses. Priced is well affordable, this office space is designed to cater to all your business needs with contemporary amenities and a strategic location</p>  
                <h2>Key Features</h2>
                <p><b>Facilities:</b> Includes meeting rooms, conference facilities, and a reception area.</p>
                <p><b>Accessibility:</b> Easy access to public transport, ample parking space, and proximity to restaurants, cafes, and other amenities.</p>
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image14} alt="Property 5" style={{ width: '300px', height: '300px' }} />
            </div>
            <div className="property-info">
                <h2>Infrastructural Properties</h2>
                <p>An exceptional opportunity to acquire a prime infrastructure property that is ideal for various development projects. This property offers strategic advantages in terms of location, accessibility, and potential uses, making it a valuable asset for investors and developers</p>  
                
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image16} alt="Property 6" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
                <h2>Call to Action</h2>
                <p>Explore this property and invest with Real Estate Token today!</p>  
                <h2>Additional Information</h2>
                <p>Discover seamless ownership opportunities through blockchain technology, ensuring transparency and security in your investments.</p>
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
          </div>
          <div className="property">
            <div className="image-container">
              <img src={image17} alt="Property 6" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className="property-info">
                <h2>Prime Lands</h2>
                <p>An exceptional opportunity to acquire a prime piece of vacant lands. This strategically located parcel of land offers immense potential for residential, commercial, or mixed-use development. Ideal for investors and developers looking to capitalize on the growing real estate market.</p>  
               
                <p>Take advantage of this rare opportunity to secure prime vacant land in Nairobi and start your next successful development project today</p>
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
          </div>
          <div className="property">
      <div className="image-container">
        <img src={image15} alt="Property 5" style={{ width: '300px', height: '300px' }} />
      </div>
      <div className="property-info">
                <h2>Charming Family Homes</h2>
                <p>Step into your dream home with this charming single-family residence. Nestled in a peaceful neighborhood, this beautifully designed home offers the perfect blend of comfort, style, and convenience, ideal for families looking to settle in a vibrant and secure community</p> 
                
                <a href="PropertyDetail.jsx"><p className='details'>More Details</p></a>
              </div>
    </div>
        </div>
      </main>
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
}

export default PropertyList;
