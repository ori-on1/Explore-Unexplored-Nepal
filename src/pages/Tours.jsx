// pages/Tours.js
import React from "react";

const Tours = () => {
  const toursData = [
    { name: "Chhangchhangdi", image: "Chhangchhangdi.jpg" },
    { name: "Budhasubba", image: "budhasubba.jpg" },
    { name: "Halesi Mahadev", image: "halesimahadev.jpg" },
    { name: "Makalu", image: "makalu.jpg" },
    { name: "Rara Lake", image: "rara.jpg" },
    { name: "Tal Barahi", image: "Tal_barahi.jpg" },
    { name: "Changunarayan", image: "changunarayan.jpg" },
    { name: "Hile", image: "hile.jpg" },
    { name: "Muktinath", image: "muktinath.jpg" },
    { name: "Resunga", image: "resunga.jpg" },
    { name: "Shey Phoksundo", image: "shey_phoksundo.jpg" },
    { name: "Aalamdevi", image: "aalamdevi.jpg" },
    { name: "Chitlang", image: "chitlang.jpg" },
    { name: "Janakpur", image: "janakpur.jpg" },
    { name: "Nagarkot", image: "nagarkot.jpg" },
    { name: "Siddhagufa", image: "siddhagufa.jpg" },
    { name: "Tilicho", image: "tilicho.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Our Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toursData.map((tour, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`/Images/${tour.image}`}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{tour.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
