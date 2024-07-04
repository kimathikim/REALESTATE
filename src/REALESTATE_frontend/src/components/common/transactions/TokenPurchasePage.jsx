import React, { useState } from 'react';
import './styles/TokenPurchasePage.css';

const TokenPurchasePage = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      // Implement payment integration logic here
      console.log('Payment information:', paymentInfo);
      // Clear form after successful purchase
      setPaymentInfo({
        amount: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
      alert('Token purchase successful!');
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Token purchase failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="token-purchase-container">
      <h2>Token Purchase</h2>
      <form onSubmit={handlePurchase}>
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={paymentInfo.amount}
          onChange={handleChange}
          required min={0}
        />
        <input
          type="text"
          placeholder="Card Number"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Expiry Date"
          name="expiryDate"
          value={paymentInfo.expiryDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="CVV"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handleChange}
          required
        />
        <button type="submit">Buy Tokens</button>
      </form>
    </div>
  );
};

export default TokenPurchasePage;
