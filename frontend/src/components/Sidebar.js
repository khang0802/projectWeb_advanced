import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/add-product">Add Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;