import React from "react";
import HomepageHero from "./components/HomepageHero";
import HomepagePools from "./components/HomepagePools";
import Navbar from "./components/UI/Navbar";

const App = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HomepageHero />
      <HomepagePools />
      <div className="flex justify-center"></div>
    </div>
  );
};
export default App;
