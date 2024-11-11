import React from "react";
import ProductList from "../components/ProductList";
import exploreNepal from "../data/exploreNepalData";
import { useState } from "react";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const categories = [...new Set(exploreNepal.map((location) => location.category))];
  const filteredLocations = exploreNepal.filter((location) => {
    const matchesCategory = selectedCategory ? location.category === selectedCategory : true;
    const matchesSearch = location.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
       <main className="container mx-auto px-4 py-6">
      <ProductList locations={filteredLocations} />
    </main>
  )
};

export default Home;
