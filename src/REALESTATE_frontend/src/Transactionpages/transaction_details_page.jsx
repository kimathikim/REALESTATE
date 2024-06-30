// src/pages/TransactionDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  padding: 20px;
`;

const Details = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
`;

const TransactionDetailsPage = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    // Fetch transaction details from API
    const fetchTransaction = async () => {
      try {
        const response = await fetch(`/api/transactions/${id}`);
        const result = await response.json();
        if (result.success) {
          setTransaction(result.data);
        }
      } catch (error) {
        console.error('Error fetching transaction:', error);
      }
    };
    fetchTransaction();
  }, [id]);

  if (!transaction) {
    return <Container>Loading...</Container>;
  }

  return (
    <>
      <NavBar />
      <Container>
        <h2>Transaction Details</h2>
        <Details>
          <p><strong>Date:</strong> {transaction.date}</p>
          <p><strong>Amount:</strong> {transaction.amount}</p>
          <p><strong>Status:</strong> {transaction.status}</p>
          <p><strong>Description:</strong> {transaction.description}</p>
          {/* Add more transaction details as needed */}
        </Details>
      </Container>
    </>
  );
};

export default TransactionDetailsPage;
