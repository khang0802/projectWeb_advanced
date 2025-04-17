// ✅ App.js
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [selectedOS, setSelectedOS] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== productId));
  };

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <div className="sidebar">
          <Sidebar
            selectedOS={selectedOS}
            setSelectedOS={setSelectedOS}
            selectedStorage={selectedStorage}
            setSelectedStorage={setSelectedStorage}
          />
        </div>
        <div className="main-content">
          <Routes>
            <Route
              path="/products"
              element={
                <ProductList
                  selectedOS={selectedOS}
                  selectedStorage={selectedStorage}
                  addToCart={addToCart}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/" element={<Navigate to="/products" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;