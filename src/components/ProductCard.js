// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      )}
      <h3>{product.name}</h3>
      <p className="price">Giá: ${product.price}</p>
      <p>{product.description}</p>
      <Link to={`/products/${product.id}`} className="details-link">
        Xem chi tiết
      </Link>
      <button onClick={() => addToCart(product)} className="add-button">
        🛒 Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
