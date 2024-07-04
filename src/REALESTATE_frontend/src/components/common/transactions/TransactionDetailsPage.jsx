import React, { useState, useEffect } from 'react';
import './styles/TransactionDetailsPage.css'; // Ensure the path is correct

const TransactionDetailsPage = ({ match }) => {
  const [transaction, setTransaction] = useState(null);
  const transactionId = match.params.id; // Assuming transaction ID is passed via route parameter

  useEffect(() => {
    // Simulated fetch of transaction details from backend
    const fetchTransactionDetails = async () => {
      try {
        // Replace with actual API call to fetch transaction details by ID
        const response = await fetch(`/api/transactions/${transactionId}`);
        if (response.ok) {
          const data = await response.json();
          setTransaction(data.transaction); // Assuming API returns details of a single transaction
        } else {
          console.error('Failed to fetch transaction details');
        }
      } catch (error) {
        console.error('Error fetching transaction details:', error);
      }
    };

    fetchTransactionDetails();
  }, [transactionId]);

  if (!transaction) {
    return <div>Loading...</div>; // Add a loading indicator while fetching data
  }

  return (
    <div className="transaction-details-container">
      <h2>Transaction Details</h2>
      <div className="details">
        <p><strong>Transaction ID:</strong> {transaction.id}</p>
        <p><strong>Status:</strong> {transaction.status}</p>
        <p><strong>Metadata:</strong> {transaction.metadata}</p>
        {/* Add more transaction details as needed */}
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
