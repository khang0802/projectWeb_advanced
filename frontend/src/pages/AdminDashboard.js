import React from 'react';
import { mockStats } from '../mockData';
import '../App.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{mockStats.products}</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{mockStats.orders}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;