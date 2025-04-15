// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import '../styles/ProductList.css';

const products = [
  { id: 1, name: 'iPhone 15', price: 1000, storage: '128GB', os: 'iOS', image: '/images/iphone15.jpg' },
  { id: 2, name: 'Samsung Galaxy S23', price: 900, storage: '256GB', os: 'Android', image: '/images/s23.jpg' },
  { id: 3, name: 'Xiaomi 13T', price: 400, storage: '128GB', os: 'Android', image: '/images/xiaomi13t.jpg' },
  { id: 4, name: 'iPhone 14 Pro', price: 1050, storage: '256GB', os: 'iOS', image: '/images/iphone14pro.jpg' },

  
  { id: 5, name: 'Oppo Reno 10', price: 500, storage: '256GB', os: 'Android', image: '/images/oppo-reno10.jpg' },
  { id: 6, name: 'Realme 11 Pro+', price: 490, storage: '128GB', os: 'Android', image: '/images/realme11.jpg' },
  { id: 7, name: 'Asus ROG Phone 6', price: 900, storage: '512GB', os: 'Android', image: '/images/rog6.jpg' },
  { id: 8, name: 'Vivo V27', price: 300, storage: '128GB', os: 'Android', image: '/images/vivo-v27.jpg' },
  { id: 9, name: 'iPhone SE 2022', price: 500, storage: '64GB', os: 'iOS', image: '/images/iphonese.jpg' },
  { id: 10, name: 'Xiaomi Redmi Note 12', price: 200, storage: '128GB', os: 'Android', image: '/images/redmi12.jpg' },
  { id: 11, name: 'Samsung Z Flip 5', price: 1000, storage: '256GB', os: 'Android', image: '/images/zflip5.jpg' },
  { id: 12, name: 'iPhone 13', price: 700, storage: '128GB', os: 'iOS', image: '/images/iphone13.jpg' }
];


const ProductList = () => {
  const addToCart = (product) => {
    // Giả lập thêm vào giỏ bằng localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📱 Danh Mục Sản Phẩm</h2>
      <ProductFilter />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


