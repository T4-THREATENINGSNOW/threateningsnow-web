import React from 'react';
import logo from './logo.svg'; 
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="/"> Threatening Snow</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" /> 
        <div className="header-links">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
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
  );
}

export default App;
