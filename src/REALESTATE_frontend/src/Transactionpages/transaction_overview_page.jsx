// src/pages/TransactionOverviewPage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/Navbar.jsx';

const Container = styled.div`
  padding: 20px;
`;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TransactionItem = styled.li`
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionOverviewPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/transactions');
        const result = await response.json();
        if (result.success) {
          setTransactions(result.data);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <h2>Transaction Overview</h2>
        <TransactionList>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id}>
              <span>{transaction.date}</span>
              <span>{transaction.amount}</span>
              <span>{transaction.status}</span>
              <a href={`/transactions/${transaction.id}`}>Details</a>
            </TransactionItem>
          ))}
        </TransactionList>
      </Container>
    </>
  );
};

export default TransactionOverviewPage;
