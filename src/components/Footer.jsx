import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">
          <div className="col-span-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Explore Nepal</h2>
              <br />
              <span>Need Any Help ?</span>
              <p className="font-bold">
                Call Us : <span className="text-yellow-500">(977) 9862392174</span>
              </p>
              <p className="mt-4">
                Bhairahawa, Rupandehi, Lumbini <br />
                <br />
                pr4bin85212@gmail.com
              </p>
            </div>
          </div>
          
          {/* Company Links Section */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium">Company</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-white transition hover:opacity-75">About Us</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Contact Us</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Travel Guides</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Data Policy</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium">Top Hill Stations</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-white transition hover:opacity-75">Kakani</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Chitlang</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Nagarkot</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Bandipur</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <p className="font-medium">Province</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-white transition hover:opacity-75">Karnali</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Gandaki</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Lumbini</a></li>
              <li><a href="#" className="text-white transition hover:opacity-75">Sudurpashchim</a></li>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <p className="font-medium">Stay Up Newsletter</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="px-2 py-3 rounded outline-none mt-3 text-black"
            />
            <input
              type="submit"
              className="bg-yellow-600 my-3 px-4 py-2 rounded cursor-pointer"
              value="Submit"
            />
            <br />
            <span className="text-sm font-light text-gray-400">@2024 Explore Nepal All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
