import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-images">
        {property.images.map(image => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="property-details">
        <h2>{property.name}</h2>
        <PropertyDetails property={property} />
      </div>
    </div>
  );
};

export default PropertyCard;
