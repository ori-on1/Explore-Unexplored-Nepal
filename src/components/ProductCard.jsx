import React from 'react';
// import getCategoryImage from '../utils/getCategoryImage'; 

const ProductCard = ({ location }) => {
  // const image = getCategoryImage(location.category); 

  return (
    <div className="card">
      <img src={location.image} className="card-img-top" alt={location.name} loading='lazy'/>
      <div className="card-body">
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text"><strong>Province:</strong> {location.province}</p>
        <p className="card-text"><strong>District:</strong> {location.district}</p>
        <p className="card-text"><strong>Municipality:</strong> {location.municipality}</p>
        <p className="card-text"><strong>Address:</strong> {location.address}</p>
        <p className="card-text"><strong>Description:</strong> {location.description}</p>
        <p className="card-text"><strong>Category:</strong> {location.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
