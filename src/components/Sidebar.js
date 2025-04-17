// src/components/Sidebar.js
import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ selectedOS, setSelectedOS, selectedStorage, setSelectedStorage }) {
  return (
    <div className="sidebar">
      <h2>📱 Phone Store</h2>

      <div className="filter-section">
        <label>Hệ điều hành:</label>
        <select value={selectedOS} onChange={(e) => setSelectedOS(e.target.value)}>
          <option value="">Tất cả</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
        </select>

        <label style={{ marginTop: "10px" }}>Dung lượng:</label>
        <select value={selectedStorage} onChange={(e) => setSelectedStorage(e.target.value)}>
          <option value="">Tất cả</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
