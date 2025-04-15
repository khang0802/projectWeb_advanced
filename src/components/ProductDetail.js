// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const products = [
  { id: 1, name: 'iPhone 15', price: 29990000, description: 'iPhone 15 với thiết kế mới và chip A16 Bionic', image: '/images/iphone15.jpg' },
  { id: 2, name: 'Samsung Galaxy S23', price: 24990000, description: 'Galaxy S23 mạnh mẽ với camera chất lượng cao', image: '/images/s23.jpg' },
  { id: 3, name: 'Xiaomi 13T', price: 10990000, description: 'Xiaomi 13T cấu hình mạnh, giá hợp lý', image: '/images/xiaomi13t.jpg' },
  { id: 4, name: 'iPhone 14 Pro', price: 27990000, description: 'iPhone 14 Pro với Dynamic Island', image: '/images/iphone14pro.jpg' },
  { id: 5, name: 'Oppo Reno 10', price: 11990000, description: 'Oppo Reno 10 với camera chân dung siêu nét', image: '/images/oppo-reno10.jpg' },
  { id: 6, name: 'Realme 11 Pro+', price: 9990000, description: 'Realme 11 Pro+ với pin khủng và sạc siêu nhanh', image: '/images/realme11.jpg' },
  { id: 7, name: 'Asus ROG Phone 6', price: 23990000, description: 'ROG Phone 6 chuyên game với tản nhiệt tối ưu', image: '/images/rog6.jpg' },
  { id: 8, name: 'Vivo V27', price: 8490000, description: 'Vivo V27 thiết kế mỏng nhẹ, hiệu năng tốt', image: '/images/vivo-v27.jpg' },
  { id: 9, name: 'iPhone SE 2022', price: 11990000, description: 'iPhone SE 2022 nhỏ gọn, hiệu năng cao', image: '/images/iphonese.jpg' },
  { id: 10, name: 'Xiaomi Redmi Note 12', price: 5890000, description: 'Redmi Note 12 màn hình đẹp, pin trâu', image: '/images/redmi12.jpg' },
  { id: 11, name: 'Samsung Z Flip 5', price: 25990000, description: 'Z Flip 5 gập mở hiện đại, phong cách thời thượng', image: '/images/zflip5.jpg' },
  { id: 12, name: 'iPhone 13', price: 19990000, description: 'iPhone 13 chip A15, camera kép mạnh mẽ', image: '/images/iphone13.jpg' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Sản phẩm không tồn tại.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">Giá: {product.price.toLocaleString()}₫</p>
        <p>{product.description}</p>
        <button className="add-button">🛒 Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default ProductDetail;