import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/nfts" className="nav-link">NFT Staking</Link>
        <Link to="/charts" className="nav-link">Live Charts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
