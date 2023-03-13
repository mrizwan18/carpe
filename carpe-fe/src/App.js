import React from "react";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import PNF from "./components/PNF";
import LoginBox from "./components/LoginBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App bg-gray-800">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<LoginBox />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
