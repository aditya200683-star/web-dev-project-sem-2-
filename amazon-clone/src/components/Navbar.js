import React from "react";
import "./Navbar.css";

function Navbar({ count }) {
  return (
    <nav className="navbar">
      <h2 className="logo">amazon</h2>

      <input
        type="text"
        placeholder="Search Amazon"
        className="search"
      />

      <div className="cart">
        🛒 Cart ({count})
      </div>
    </nav>
  );
}

export default Navbar;
