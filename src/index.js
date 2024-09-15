import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './providers/DataProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import SortOrderProvider from './providers/SortOrderProvider';
import SearchProvider from './providers/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <DataProvider>
                <CartProvider>
                    <SortOrderProvider>
                        <SearchProvider>
                            <App />
                        </SearchProvider>
                    </SortOrderProvider>
                </CartProvider>
            </DataProvider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
