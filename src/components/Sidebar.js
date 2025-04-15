// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📱 Phone Store</h2>
      <div className="sidebar-links">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Sidebar;
