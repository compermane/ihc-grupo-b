import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Emocao from './Emocao';
import reportWebVitals from './reportWebVitals';
import Page1 from  './components/page1.js';
import Page2 from './components/page2.js';
import Page3 from './components/page3.js';
import Final from './components/final-page.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
