import React from "react";
import ProductList from "../components/ProductList";
import exploreNepal from "../data/exploreNepalData";

const Home = ({ searchText, selectedCategory }) => {
  const filteredLocations = exploreNepal.filter((location) => {
    const matchesCategory = selectedCategory ? location.category === selectedCategory : true;
    const matchesSearch = searchText ? location.name.toLowerCase().includes(searchText.toLowerCase()) : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="container mx-auto px-4 py-6">
      <ProductList locations={filteredLocations} />
    </main>
  );
};

export default Home;
