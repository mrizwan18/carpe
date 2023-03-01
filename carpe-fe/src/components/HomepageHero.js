import React from "react";

function HomepageHero() {
  return (
    <div class="bg-gray-800 flex flex-col justify-center items-center h-screen">
      <div class="relative w-2/3 mx-auto">
        <div class="w-full bg-gray-100 py-3 px-8 flex items-center rounded-full">
          <input
            class="w-full bg-gray-100 ml-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-black text-xl"
            type="text"
            placeholder="Petrol hai mehnga? Karo Carpe..."
          />
          <svg
            class="w-6 h-6 text-gray-500 hover:text-black hover:cursor-pointer"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M22 22l-6-6"></path>
            <circle cx="10" cy="10" r="8"></circle>
          </svg>
        </div>
        <button class="absolute -right-20 top-0 mt-2 mr-6 py-2 px-4 rounded-full text-primaryOrange font-medium focus:outline-none">
          <svg
            class="w-6 h-6 text-primaryOrange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HomepageHero;
