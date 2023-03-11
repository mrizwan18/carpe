import React from "react";
import Footer from "./components/Footer";
import HomepageHero from "./components/HomepageHero";
import HomepagePools from "./components/HomepagePools";
import Navbar from "./components/UI/Navbar";

const App = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HomepageHero />
      <HomepagePools />
      <Footer />
    </div>
  );
};
export default App;
