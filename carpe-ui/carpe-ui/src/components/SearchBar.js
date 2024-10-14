import React from 'react';

const SearchBar = () => {
  return (
    <div className="p-4 bg-primaryBg flex flex-col items-center space-y-4">
      <input 
        type="text" 
        placeholder="Search for Pool..." 
        className="border p-2 w-full lg:w-96 rounded text-primaryBg"
      />
      <div className="flex flex-wrap justify-center space-x-4">
        <input type="text" placeholder="Location" className="border p-2 rounded w-full md:w-48" />
        <input type="text" placeholder="Time In" className="border p-2 rounded w-full md:w-48" />
        <input type="text" placeholder="Time Out" className="border p-2 rounded w-full md:w-48" />
        <input type="text" placeholder="Cost" className="border p-2 rounded w-full md:w-48" />
      </div>
      <button className="bg-primaryOrange-light text-white px-6 py-2 rounded">Search</button>
    </div>
  );
};

export default SearchBar;
