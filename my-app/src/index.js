import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import MainApp from './App'; // Import MainApp instead of App
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap MainApp in BrowserRouter */}
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
