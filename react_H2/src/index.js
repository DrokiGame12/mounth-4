import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Squares1 from './Squares1';
import Squares2 from './Squares2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Squares1/>
    <Squares2/>
  </React.StrictMode>
);