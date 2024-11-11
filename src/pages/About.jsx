import React from "react";
const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Welcome to Explore Nepal</h1>
        
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Discover the beauty of Nepal like never before! Our mission is to bring you the best travel experiences by guiding you to breathtaking landscapes, rich cultural heritage sites, and exhilarating adventures. Whether you're a nature lover, history enthusiast, or an adventure seeker, we have something unique for everyone.
        </p>

        <div className="lg:flex lg:justify-between lg:items-center">
          <img 
            src="/Images/Tal_barahi.jpg" 
            alt="Explore Nepal Landscape" 
            className="w-full lg:w-1/2 rounded-lg shadow-md mb-8 lg:mb-0"
          />

          <div className="lg:ml-10">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Explore Nepal, we aim to connect travelers with Nepal’s best-kept secrets. From the towering Himalayas to ancient temples, we guide you on an unforgettable journey through the heart of Nepal.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Expert local guides for immersive experiences</li>
              <li>Customized tours to suit all types of travelers</li>
              <li>Safe and sustainable travel options</li>
              <li>24/7 support for a worry-free adventure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
