import React, { useState, useEffect } from 'react';
import './styles/EditProperty.css'; // Assuming you have a stylesheet for EditProperty
import Navbar from './components/common/layout/Navbar.jsx'; // Example path, adjust as needed
import { FaMapMarkerAlt, FaBed, FaEnvelope, FaPhone } from 'react-icons/fa'; // Example icons import
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // For accessing URL parameters and navigation
import './styles/EditPropertyPage.css'; // Your CSS for styling

function EditProperty() {
  const { id } = useParams(); // Fetching property ID from URL params
  const history = useHistory(); // For programmatic navigation

  // Example state for property details
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    status: '',
    location: '',
    cost: '',
    bedrooms: '',
    contactPhone: '',
    contactEmail: '',
    // Add more fields as needed
  });

  // Example useEffect to fetch property details based on ID
  useEffect(() => {
    // Example fetch to get property details based on ID
    fetch(`api/properties/${id}`)
      .then(response => response.json())
      .then(data => {
        // Update state with fetched property details
        setPropertyDetails({
          title: data.title,
          status: data.status,
          location: data.location,
          cost: data.cost,
          bedrooms: data.bedrooms,
          contactPhone: data.contactPhone,
          contactEmail: data.contactEmail,
          // Add more fields as needed
        });
      })
      .catch(error => console.error('Error fetching property details:', error));
  }, [id]); // Trigger effect when ID changes

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Example fetch to update property details
      const response = await fetch(`api/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyDetails),
      });
      if (response.ok) {
        console.log('Property details updated successfully');
        // Redirect to property details page after successful update
        history.push(`/property/${id}`);
      } else {
        console.error('Failed to update property details');
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error updating property details:', error);
      // Handle error scenario
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  return (
    <div className="edit-property-page">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={propertyDetails.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={propertyDetails.status}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={propertyDetails.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="cost">Cost:</label>
        <input
          type="text"
          id="cost"
          name="cost"
          value={propertyDetails.cost}
          onChange={handleChange}
          required
        />

        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={propertyDetails.bedrooms}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactPhone">Contact Phone:</label>
        <input
          type="text"
          id="contactPhone"
          name="contactPhone"
          value={propertyDetails.contactPhone}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactEmail">Contact Email:</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={propertyDetails.contactEmail}
          onChange={handleChange}
          required
        />

        {/* Add more input fields for other details as needed */}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProperty;
