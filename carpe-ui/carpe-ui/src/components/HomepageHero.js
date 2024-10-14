import React, { useState } from "react";
import Filters from "./UI/Filters";

function HomepageHero() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <div className="relative w-2/3 mx-auto h-2/3">
        <div className="w-full bg-gray-100 py-3 px-8 flex items-center rounded-full">
          <input
            className="md:hidden w-full bg-gray-100 py-1 px-1 leading-tight focus:outline-none placeholder:text-black md:text-xl text-sm"
            type="text"
            placeholder="Karo Carpe..."
          />
          <input
            className="md:flex hidden w-full bg-gray-100 ml-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-black text-xl"
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              "w-6 h-6 text-primaryOrange-light transition-transform rotate-90 " +
              (openFilter ? "-rotate-90" : null)
            }
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      </div>
      <Filters openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </div>
  );
}

export default HomepageHero;
