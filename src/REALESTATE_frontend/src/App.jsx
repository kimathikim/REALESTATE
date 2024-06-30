import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/EditProperty.css';
const App = () => {
  const history = useHistory();

  // State to manage form inputs
  const [property, setProperty] = useState({
    id: '12345',
    name: 'Example Property',
    owner: 'John Doe',
    email: 'john.doe@example.com',
    contact: '123-456-7890',
    value: '500,000 USD',
    location: 'Example City, Example Country',
    description: 'A beautiful property with scenic views.',
    amenities: ['Swimming Pool', 'Garden', 'Garage'],
    available: true,
    images: [
      { id: 1, url: 'https://example.com/image1.jpg' },
      { id: 2, url: 'https://example.com/image2.jpg' },
      { id: 3, url: 'https://example.com/image3.jpg' },
    ],
  });

  // Handler to update property details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  // Handler to update amenities array
  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    const updatedAmenities = [...property.amenities];
    if (updatedAmenities.includes(value)) {
      const index = updatedAmenities.indexOf(value);
      updatedAmenities.splice(index, 1);
    } else {
      updatedAmenities.push(value);
    }
    setProperty({ ...property, amenities: updatedAmenities });
  };

  // Handler to save changes
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform update API call or state update here
    alert('Property details updated successfully!');
    history.push('/property-list'); // Redirect to property list page after update
  };

  return (
    <div className="edit-property-page">
      <h2>Edit Property Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input
            type="text"
            name="name"
            value={property.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Owner Name:
          <input
            type="text"
            name="owner"
            value={property.owner}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Owner Email:
          <input
            type="email"
            name="email"
            value={property.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="contact"
            value={property.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Property Value:
          <input
            type="text"
            name="value"
            value={property.value}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amenities:
          <div>
            <input
              type="checkbox"
              name="swimming-pool"
              value="Swimming Pool"
              checked={property.amenities.includes('Swimming Pool')}
              onChange={handleAmenitiesChange}
            />
            <label>Swimming Pool</label>
            <input
              type="checkbox"
              name="garden"
              value="Garden"
              checked={property.amenities.includes('Garden')}
              onChange={handleAmenitiesChange}
            />
            <label>Garden</label>
            <input
              type="checkbox"
              name="garage"
              value="Garage"
              checked={property.amenities.includes('Garage')}
              onChange={handleAmenitiesChange}
            />
            <label>Garage</label>
          </div>
        </label>
        <label>
          Available:
          <input
            type="checkbox"
            name="available"
            checked={property.available}
            onChange={(e) => setProperty({ ...property, available: e.target.checked })}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default App;
