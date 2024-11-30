import React from "react";

const Filter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchText,
  setSearchText,
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-2 md:mb-0">
        <form
          className="flex items-center mb-2 md:mb-0 md:mr-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="p-2 bg-gray-200 text-gray-600 rounded-l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
            </svg>
          </span>
          <input
            type="text"
            className="form-input rounded-r bg-white px-3 py-2 placeholder-gray-500 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-200 ease-in-out hover:shadow-lg"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-select rounded border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-200 ease-in-out hover:shadow-lg"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
