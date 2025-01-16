import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nfts">NFT Staking</Link></li>
        <li><Link to="/charts">Live Charts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
