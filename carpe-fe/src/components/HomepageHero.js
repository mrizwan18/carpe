import React, { useState } from "react";
import Filters from "./UI/Filters";

function HomepageHero() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <div className="relative w-2/3 mx-auto h-2/3">
        <div className="w-full bg-gray-100 py-3 px-8 flex items-center rounded-full">
          <input
            className="w-full bg-gray-100 ml-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-black text-xl"
            type="text"
            placeholder="Petrol hai mehnga? Karo Carpe..."
          />
          <svg
            className="w-6 h-6 text-gray-500 hover:text-black hover:cursor-pointer"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M22 22l-6-6"></path>
            <circle cx="10" cy="10" r="8"></circle>
          </svg>
        </div>
        <button className="absolute -right-20 top-0 mt-2 mr-6 py-2 px-4 rounded-full text-primaryOrange-light font-medium focus:outline-none">
          <svg
            className={
              "w-6 h-6 text-primaryOrange-light transition-transform " +
              (openFilter ? "rotate-90" : null)
            }
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <Filters openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </div>
  );
}

export default HomepageHero;
