import React, { useState } from "react";
import exploreNepal from "./data/exploreNepalData";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import "./App.css";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Destination from "./pages/HillStation";
import Footer from "./components/Footer";
import HillStation from "./pages/HillStation";
import Hill_station from "./pages/HillStation";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const categories = [...new Set(exploreNepal.map((location) => location.category))];

  const filteredLocations = exploreNepal.filter((location) => {
    const matchesCategory = selectedCategory ? location.category === selectedCategory : true;
    const matchesSearch = location.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
    <div className={`App ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
      <header className="app-header">
        <Navbar/>
        <Hero />
        <div className="w-full flex justify-center mt-[-50px]">
          <div className="bg-white mx-auto lg:max-w-5xl p-8 rounded-lg shadow-lg">
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
        </div>

      </header>
     
    
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/hill_station" element={<Hill_station />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
