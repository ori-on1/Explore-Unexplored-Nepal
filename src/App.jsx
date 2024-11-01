import React, { useState } from "react";
import exploreNepal from "./data/exploreNepalData";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const categories = [
    ...new Set(exploreNepal.map((location) => location.category)),
  ];
  const filteredLocations = exploreNepal.filter((location) => {
    const matchesCategory = selectedCategory
      ? location.category === selectedCategory
      : true;
    const matchesSearch = location.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`App ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <header className="app-header">
        <h1 className="np-gr">Explore Nepal</h1>
        <div className="sticky-top">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchText={searchText}
            setSearchText={setSearchText}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
        </div>
      </header>
      <div className="container">
        <ProductList locations={filteredLocations} />
      </div>
    </div>
  );
};

export default App;
