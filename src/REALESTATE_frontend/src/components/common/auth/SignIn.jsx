import React, { useState } from 'react';
import './styles/Login.css'; // Ensure the path is correct
import './styles/PropertyList2.css';
import './styles/PropertyList.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMFAForm, setShowMFAForm] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Mock API call for login authentication
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
        setShowMFAForm(true); // Show MFA form after successful login
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };

  const handleVerifyMFA = async (e) => {
    e.preventDefault();
    try {
      // Mock API call for verifying MFA with SMS code
      const response = await fetch('/api/verifyMFA', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, verificationCode }),
      });
      const result = await response.json();
      if (response.ok) {
        // Redirect to dashboard or authenticated page
        alert('MFA Verification Successful!');
      } else {
        setError(result.error || 'MFA verification failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while verifying MFA.');
    }
  };

  return (
    <div className="login-container">
     <main>
     <h1>Welcome Back!</h1>
      <p className="subheading">Explore the power of technology to track your investment.</p>
      <h2>Login</h2>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Don't have an account? Register</a>
        </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : showMFAForm ? (
        <form onSubmit={handleVerifyMFA}>
          <div className="input-group">
            <label htmlFor="verificationCode">Verification Code</label>
            <input
              type="text"
              id="verificationCode"
              placeholder="Enter the verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="verify-button">Verify</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : null}
     </main>
    </div>
  );
};

export default SignIn;
