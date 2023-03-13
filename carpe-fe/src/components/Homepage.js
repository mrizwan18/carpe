import React from "react";
import Footer from "./Footer";
import HomepageHero from "./HomepageHero";
import HomepagePools from "./HomepagePools";
import Navbar from "./UI/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <HomepageHero />
      <HomepagePools />
      <Footer />
    </>
  );
}

export default Homepage;
