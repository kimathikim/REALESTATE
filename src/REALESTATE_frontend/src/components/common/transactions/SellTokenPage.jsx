import React from 'react';
import Navbar from './components/common/layout/Navbar.jsx';
import './styles/PropertyList2.css';
import './styles/PropertyList.css';
import './styles/MyTeam.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './styles/SellTokenPage.css'; // Import the CSS for styling

const SellTokenPage = () => {
  const handleSignIn = () => {
    // Handle sign-in logic here
    alert('Sign-in button clicked!');
  };

  return (
    <div className="sell-token-page">
       <Navbar />
      <main>
      <h1>Sell Tokens</h1>
      <div className="sell-token-container">
        <h2>Sign in to Sell Your Token!</h2>
        <button onClick={handleSignIn} className="sign-in-button">
          Sign In
        </button>
      </div>
      </main>
    </div>
  );
};

export default SellTokenPage;
