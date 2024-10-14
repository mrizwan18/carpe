import React from 'react';
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import PNF from "./components/PNF";
import RegisterBox from "./components/RegisterBox";
import LoginBox from "./components/LoginBox";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App bg-gray-800">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterBox />} />
          <Route path="/login" element={<LoginBox />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
