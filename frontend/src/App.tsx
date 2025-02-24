import React from 'react';
import logo from './logo.svg'; 
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import Payment from './Payment/Payment';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <Router>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="/"> Threatening Snow</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" /> 
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/payment">Payment</Link>
         </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li><a href="/">Pants</a></li>
          <li><a href="/">Shirts</a></li>
        </ul>
      </aside>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Products />} />
          <Route path="orders" element={<Orders />}></Route>
          <Route path="/order/:id" element={<OrderDetail />}></Route>
          <Route path="/payment" element={< Payment />}></Route>
        </Routes>
        
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        &copy; 2025 Threatening Snow
      </footer>
    </div>
    </Router>
  );
}

export default App;
