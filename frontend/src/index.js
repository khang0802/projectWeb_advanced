import React from 'react';
import ReactDOM from 'react-dom/client'; // Import từ 'react-dom/client' thay vì 'react-dom'
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);