import React, { useState, useEffect } from 'react';
import './styles/TransactionOverviewPage.css'; // Ensure the path is correct

const TransactionOverviewPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulated fetch of recent transactions from backend
    const fetchTransactions = async () => {
      try {
        // Replace with actual API call to fetch recent transactions
        const response = await fetch('/api/transactions');
        if (response.ok) {
          const data = await response.json();
          setTransactions(data.transactions); // Assuming API returns an array of transactions
        } else {
          console.error('Failed to fetch transactions');
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-overview-container">
      <h2>Transaction Overview</h2>
      <div className="summary">
        <h3>Summary</h3>
        <p>Total Transactions: {transactions.length}</p>
        {/* Add more summary statistics as needed */}
      </div>
      <div className="transactions-list">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <p><strong>Transaction ID:</strong> {transaction.id}</p>
              <p><strong>Status:</strong> {transaction.status}</p>
              {/* Add more transaction details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionOverviewPage;
