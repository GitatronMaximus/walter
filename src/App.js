import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import NFTPage from "./pages/NFTpage.js";
import ChartPage from "./pages/ChartPage.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nfts" element={<NFTPage />} />
          <Route path="/charts" element={<ChartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
