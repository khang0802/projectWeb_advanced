import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../mockData';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState(mockProducts);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <Link to={`/admin/edit-product/${product._id}`} className="edit-btn">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;