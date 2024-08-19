import React from 'react';
import './Marketplace.css';

const Marketplace = () => {
  return (
    <div className="marketplace">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="RealT" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Collateralize Tokens</a></li>
            <li><a href="#">Sell Tokens</a></li>
            <li><a href="#">DeFi</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Learn</a></li>
          </ul>
        </nav>
        <div className="account">
          <a href="#">My Account</a>
          <a href="#"><i className="fa fa-shopping-cart"></i></a>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        <div className="property-card">
          <div className="property-image">
            <img src="/property-image.jpg" alt="Property" />
            <div className="property-status">
              <span>NEW!</span>
            </div>
          </div>
          <div className="property-details">
            <div className="location">
              <span>Panama</span>
              <span>RealT</span>
            </div>
            <h2>PH Pinoalto A002, Boquete, Chiriqui, Panama</h2>
            <div className="price">
              <span className="total-price">$587,808</span>
              <span className="token-price">$50.24</span>
            </div>
            <div className="expected-income">
              <p>Expected Income <span>(Not including capital appreciation)</span></p>
              <p className="income-percentage">6-20%</p>
              <p>Income Start Date: <span>N/A</span></p>
            </div>
            <button className="view-property">View Property</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Marketplace;
