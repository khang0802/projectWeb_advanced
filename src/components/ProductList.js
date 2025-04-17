import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ selectedOS, selectedStorage, addToCart }) {
  const filteredProducts = products.filter(product => {
    const matchOS = selectedOS ? product.os === selectedOS : true;
    const matchStorage = selectedStorage ? product.storage === selectedStorage : true;
    return matchOS && matchStorage;
  });

  return (
    <div>
      <h2>📦 Danh Mục Sản Phẩm</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart} // ✅ truyền hàm này xuống
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
