import React from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaBed, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import './styles/PropertyDetail.css';
import './styles/PropertyList.css';
import Navbar from  './components/common/layout/Navbar.jsx';'./layout/Navbar.jsx';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';

const PropertyDetail = () => {
  let { id } = useParams();

  const property = {
    id: id,
    title: 'Property Description ',
    type: 'House',
    description: 'A Built Modern Design Flat Roof Bungalow for Sale in Nakuru.',
    details: 'This 3 bedroom Bungalow for sale is located in Nakuru Just 400 metres from Nakuru-Baringo highway and i5 minutes to town.',
    details1:'The house under has a ready title deed with all amenities available. Sitting on its own compound of 50x100ft plot.',
    details2:'With good rental income.',
    details3:'The Bungalow has modern finishes with all bedrooms on suites.',
    details4:'Each house has its own bio digester hence Eco-Friendly.',
    details5:'The house has a pantry, separate Kitchen and a spacious Living Room.',
    Property_Ref: ' 342356',
    Added_On: 'Added_On:  26 Jun 2024',
    Last_Updated: ' 26 Jun 2024',
    location: 'Bahati, Nakuru',
    Market_Status: ' Available',
    cost: 'Ksh 7.5Million',
    Bedrooms: ' 3',
    Toilets: ' 4',
    Bathrooms: ' 4',
    Parking_Spaces: ' 4',
    ownerName: 'Emmanuel Legend',
    ownerContact: '+254-714205641',
    ownerEmail: 'ababuoturi@gmail.com',
    amenities: ['Water', 'Wifi', 'Parking'],
    images: [
      { id: 1, img: image4 },
      { id: 2, img: image4 },
      { id: 3, img: image4 },
      { id: 4, img: image4 },
      { id: 5, img: image4 },
      { id: 6, img: image5},
      { id: 7, img: image5 },
      { id: 7, img: image5 },
      { id: 7, img: image5 },
      { id: 8, img: image5 }
    ]
  };

  return (
    <div className="app-container">
      <Navbar/>
    <div className="property-details">
      <h1 style={{fontSize: '20px'}}>{property.title}</h1>
      <div className="property-info">
        <p style={{fontSize: '18px'}}>{property.description}</p>
        <ul>
          <li>{property.details}</li>
          <li>{property.details1}</li>
          <li>{property.details2}</li>
          <li>{property.details3}</li>
          <li>{property.details4}</li>
          <li>{property.details5}</li>
        </ul>
        <div className="details-grid">
        <div className="detail-item">
           <b>Property Ref: </b>  {property.Property_Ref}
          </div>
          <div className="detail-item">
          <b>Added On: </b>  {property.Added_On}
          </div>
          <div className="detail-item">
            <b>Last Updated: </b> {property.Last_Updated}
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt /> {property.location}
          </div>
          <div className="detail-item">
          <b>Market Status: </b>{property.Market_Status}
          </div>
          <div className="detail-item">
           <b>Toilets: </b> {property.Toilets}
          </div>
          <div className="detail-item">
           <b>Bathrooms:</b> {property.Bathrooms}
          </div>
          <div className="detail-item">
            <b>Parking Space:</b> {property.Parking_Spaces}
          </div>
          <div className="detail-item">
            <FaPhone /> {property.ownerContact}
          </div>
          <div className="detail-item">
            <FaEnvelope /> {property.ownerEmail}
          </div>
          <div className="detail-item">
            <b>Cost: </b> {property.cost}
          </div>
          <div className="detail-item">
            <FaBed /> <b>Bedrooms: </b>{property.Bedrooms}
          </div>
          <div className="detail-item">
           <b> Amenities:</b> {property.amenities.map((amenity, index) => (
              <div key={index} className="amenity">
                <FaCheck /> {amenity}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="property-images">
        <h2>Property Images</h2>
        <div className="image-gallery">
          {property.images.map(image => (
            <img key={image.id} src={image.img} alt={`Property ${image.id}`} />
          ))}
        </div>
      </div>
    </div>
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
};

export default PropertyDetail;
