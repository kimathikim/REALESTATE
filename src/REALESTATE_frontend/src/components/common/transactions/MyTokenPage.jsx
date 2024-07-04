import React, { useState, useEffect } from 'react';
//import './styles/MyTokens.css';
import './styles/MyTokensPage.css';


const MyTokensPage = () => {
  const [userTokens, setUserTokens] = useState([]);

  useEffect(() => {
    // Simulated fetch of user tokens from backend
    const fetchUserTokens = async () => {
      try {
        // Replace with actual API call to fetch user tokens
        const response = await fetch('/api/user/tokens');
        if (response.ok) {
          const data = await response.json();
          setUserTokens(data.tokens); // Assuming API returns an array of tokens
        } else {
          console.error('Failed to fetch user tokens');
        }
      } catch (error) {
        console.error('Error fetching user tokens:', error);
      }
    };

    fetchUserTokens();
  }, []);

  return (
    <div className="my-tokens-container">
      <h2>My Tokens</h2>
      <ul>
        {userTokens.map((token) => (
          <li key={token.id}>
            <p><strong>Token ID:</strong> {token.id}</p>
            <p><strong>Token Value:</strong> ${token.value}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTokensPage;
