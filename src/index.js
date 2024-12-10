import React from 'react';
import ReactDOM from 'react-dom/client'; // Chú ý import từ 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Sử dụng createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();