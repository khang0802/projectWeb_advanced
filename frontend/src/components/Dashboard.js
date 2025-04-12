// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [statistics, setStatistics] = useState({
    totalProducts: 0,
    totalSales: 0,
  });

  useEffect(() => {
    // Giả lập gọi API để lấy thống kê
    setStatistics({ totalProducts: 3, totalSales: 600 });  // Mock data
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Tổng số sản phẩm: {statistics.totalProducts}</h3>
        <h3>Tổng doanh thu: {statistics.totalSales} VND</h3>
      </div>
    </div>
  );
};

export default Dashboard;
