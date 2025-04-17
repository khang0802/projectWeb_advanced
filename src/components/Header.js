// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        📱 <Link to="/" className="logo-text">Phone Store</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Trang chủ</Link>
        <Link to="/products">Sản phẩm</Link>
        <Link to="/cart">Giỏ hàng</Link>
      </nav>
    </header>
  );
};

export default Header;
