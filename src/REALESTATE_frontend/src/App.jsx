import React, { useState } from 'react';
import './styles/AddProperty.css';

function AddPropertyPage() {
  const [formData, setFormData] = useState({
    propertyTitle: '',
    propertyType: '',
    description: '',
    location: '',
    city: '',
    state: '',
    country: '',
    ownerName: '',
    ownerEmail: '',
    ownerContactNumber: '',
    propertyValue: '',
    availability: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    water: false,
    wifi: false,
    parking: false,
    swimmingPool: false,
    garden: false,
    propertyImages: [],
    yearBuilt: '',
    floorNumber: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="add-property-page">
      <h1>Add Property</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className='div1'>
            <h2>Basic Information</h2>
            <label>
              Property Title:
              <input type="text" name="propertyTitle" value={formData.propertyTitle} onChange={handleChange} required />
            </label>
            <label>
              Property Type:
              <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                <option value="">Select Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="commercial">Commercial</option>
              </select>
            </label>
            <label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
            </label>
            <label>
              Address:
              <input type="text/number" name="address" value={formData.location} onChange={handleChange} placeholder="20157,Kabarak" required />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Country/City" required />
            </label>
            </div>
          </div>

          <div className="form-column">
            <h2>Contact Information</h2>
            <label>
              Owner's Name:
              <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
            </label>
            <label>
              Owner's Email:
              <input type="email" name="ownerEmail" value={formData.ownerEmail} onChange={handleChange} required />
            </label>
            <label>
              Owner's Contact Number:
              <input type="text" name="ownerContactNumber" value={formData.ownerContactNumber} onChange={handleChange} required min="0" />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <h2>Property Details</h2>
            <label>
              Property Value:
              <input type="number" name="propertyValue" value={formData.propertyValue} onChange={handleChange} required min="0" />
            </label>
            <label>
              Availability:
              <select name="availability" value={formData.availability} onChange={handleChange} required>
                <option value="">Select Availability</option>
                <option value="for sale">For Sale</option>
                <option value="for rent">For Rent</option>
              </select>
            </label>
            <label>
              Bedrooms:
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required min="0" />
            </label>
          </div>
          <div className="form-column">
            <h2>Available Amenities</h2>
            <label>
              Bathrooms:
              <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required min="0" />
            </label>
            <label>
              Square Footage:
              <input type="number" name="squareFootage" value={formData.squareFootage} onChange={handleChange} required min="0" />
            </label>
            <label>
              Water:
              <input type="checkbox" name="water" checked={formData.water} onChange={handleChange} />
            </label>
            <label>
              Wifi:
              <input type="checkbox" name="wifi" checked={formData.wifi} onChange={handleChange} />
            </label>
            <label>
              Parking:
              <input type="checkbox" name="parking" checked={formData.parking} onChange={handleChange} />
            </label>
            <label>
              Swimming Pool:
              <input type="checkbox" name="swimmingPool" checked={formData.swimmingPool} onChange={handleChange} />
            </label>
            <label>
              Garden:
              <input type="checkbox" name="garden" checked={formData.garden} onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <h2>House Images</h2>
            <label>
              Property Images:
              <input type="file" name="propertyImages" multiple onChange={handleChange} required />
            </label>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddPropertyPage;
