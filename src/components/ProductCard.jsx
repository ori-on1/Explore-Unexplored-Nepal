import React from 'react';
// import getCategoryImage from '../utils/getCategoryImage'; 

const ProductCard = ({ location }) => {
  // const image = getCategoryImage(location.category); 

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        src={location.image}
        alt={location.name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{location.name}</h5>
        <p className="text-gray-700 mb-1">
          <strong>Province:</strong> {location.province}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>District:</strong> {location.district}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Municipality:</strong> {location.municipality}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Address:</strong> {location.address}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Description:</strong> {location.description}
        </p>
        <p className="text-gray-700">
          <strong>Category:</strong> {location.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
