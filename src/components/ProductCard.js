import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()}₫</p>
      <button onClick={() => addToCart(product)}>🛒 Thêm vào giỏ</button>
    </div>
  );
}

export default ProductCard;