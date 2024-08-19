import React, { useState } from 'react';
import './styles/Registration.css'; // Ensure the path is correct
import './styles/PropertyList2.css';
import './styles/PropertyList.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isMFAEnabled, setIsMFAEnabled] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Mock API call for sign-up and email verification
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        setIsEmailVerified(true);
      } else {
        setError(result.error || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred during sign-up.');
    }
  };

  const handleSendVerificationCode = async () => {
    try {
      // Mock API call for sending verification code
      const response = await fetch('/api/sendVerificationCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const result = await response.json();
      if (response.ok) {
        setIsMFAEnabled(true);
      } else {
        setError(result.error || 'Failed to send verification code. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while sending verification code.');
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      // Mock API call for verifying MFA code
      const response = await fetch('/api/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, verificationCode }),
      });
      const result = await response.json();
      if (response.ok) {
        alert('MFA Verified Successfully!');
      } else {
        setError(result.error || 'Verification failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while verifying the code.');
    }
  };

  return (
    <div className="registration-container">
      <div className="intro-message">
        <h1>Welcome to Our Platform</h1>
        <p>
          Please register to gain access to exclusive features and stay updated with the latest information. 
          Also, get insights on Real Estate Tokenization to secure your investment. 
          Complete the Multi-Factor Authentication (MFA) setup for enhanced security.
        </p>
      </div>
      {!isEmailVerified ? (
        <form onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <div className="links">
          <a href="/SignIn">Already have an account? Login</a>
        </div>
          {error && <p className="error">{error}</p>}
        </form>
      ) : !isMFAEnabled ? (
        <div>
          <h2>Set Up MFA</h2>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button onClick={handleSendVerificationCode}>Send Verification Code</button>
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <form onSubmit={handleVerifyCode}>
          <h2>Verify Code</h2>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <button type="submit">Verify</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;
