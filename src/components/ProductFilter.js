import React from 'react';
import '../styles/ProductFilter.css';

const ProductFilter = () => {
  return (
    <div className="filter-panel">
      <div className="filter-title">Bộ lọc</div>
      <div>
        <label>Hệ điều hành:</label>
        <select>
          <option>Tất cả</option>
          <option>iOS</option>
          <option>Android</option>
        </select>
      </div>
      <div>
        <label>Dung lượng:</label>
        <select>
          <option>Tất cả</option>
          <option>128GB</option>
          <option>256GB</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
