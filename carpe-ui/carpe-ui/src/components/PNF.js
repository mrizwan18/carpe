import React from "react";
import Footer from "./Footer";
import Navbar from "./UI/Navbar";

function PNF() {
  return (
    <div
      className="flex flex-col md:h-screen
    "
    >
      <Navbar />
      <div className="flex flex-col items-center justify-items-center text-center text-white m-4">
        <img
          src="/NRF.png"
          alt="No records found"
          className="object-cover object-center rounded-lg max-h-96 ml-12"
        />
        <h1 className="text-2xl">You have reached a dead end.</h1>
        <button className="bg-white text-gray-800 rounded-full p-4 px-6 text-sm font-semibold md:text-xl hover:bg-primaryOrange-light hover:text-white hover:cursor-pointer transition-all duration-200">
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PNF;
