import React from "react";
import Filter from "./Filter";

export const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-400 pb-10 relative">
            <div className="container lg:flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-10">
                <div className="md:pr-10 md:w-1/2 space-y-6">
                    <h4 className="text-yellow-100 font-bold text-2xl" style={{ fontFamily: "Dancing Script" }}>
                        Discover Nepal's Treasures
                    </h4>
                    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                        Explore Nepal's Beauty <br /> Your Adventure Starts Here!
                    </h1>
                    <p className="text-gray-200 text-sm md:text-base pb-8">
                        Discover breathtaking views, cultural heritage, and exciting tours across Nepal.
                    </p>
                </div>

                <div className="md:w-1/2 flex flex-col md:flex-row justify-center items-center mt-6 md:mt-0">
                    <img src="/Images/changunarayan.jpg" className="w-full md:w-72 pr-10 lg:mt-[-154px] rounded-lg shadow-lg" alt="Changunarayan Temple" />
                    <img src="/Images/pathivara.jpg" className="w-full md:w-80 z-0 rounded-lg shadow-lg" alt="Pathivara Temple" />
                </div>
            </div>
        </div>
    );
};
