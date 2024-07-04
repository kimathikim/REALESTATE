import React, { useState } from 'react';
import './styles/Registration.css'; // Ensure the path is correct

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isMFAEnabled, setIsMFAEnabled] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Mocking email verification for simplicity
    setIsEmailVerified(true);
  };

  const handleSendVerificationCode = () => {
    // Mocking MFA setup for simplicity
    setIsMFAEnabled(true);
  };

  const handleVerifyCode = () => {
    // Mocking code verification for simplicity
    alert('MFA Verified!');
  };

  return (
    <div className="registration-container">
      <div className="intro-message">
        <h1>Welcome to Our Platform</h1>
        <p>Please register to gain access to exclusive features and stay updated with the latest information.Also get insights on Real Estate Tokenization as part to secure your Investment. Ensure to complete the Multi-Factor Authentication (MFA) setup for enhanced security.</p>
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
        <div>
          <h2>Verify Code</h2>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <button onClick={handleVerifyCode}>Verify</button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
