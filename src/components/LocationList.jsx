import React from 'react';

const LocationList = ({ locations }) => {
  return (
    <div className="space-y-6">
      {locations.map((location, index) => (
        <div
          key={index}
          className="p-6 border border-gray-200 rounded-lg shadow-md bg-white"
        >
          <h3 className="text-2xl font-semibold mb-2">{location.name}</h3>
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
      ))}
    </div>
  );
};

export default LocationList;
