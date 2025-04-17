// ✅ Cart.js
import React from "react";
import "../styles/Cart.css";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page" style={{ textAlign: "left" }}>
      <h2>🛒 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <img src={item.image} alt={item.name} width="60" />
                <div style={{ marginLeft: "10px" }}>
                  <h4>{item.name}</h4>
                  <p>Giá: {item.price.toLocaleString()}₫</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                  style={{ marginLeft: "auto" }}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <h3 style={{ marginTop: "20px", color: "#2563eb" }}>
            Tổng giá trị: {totalPrice.toLocaleString()}₫
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
