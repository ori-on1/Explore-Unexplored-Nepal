import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ locations }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {locations.map((location, index) => (
        <ProductCard key={index} location={location} />
      ))}
    </div>
  );
};

export default ProductList;
