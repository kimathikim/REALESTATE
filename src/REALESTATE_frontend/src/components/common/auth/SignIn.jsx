import React, { useState } from 'react';
import './styles/Login.css'; // Ensure the path is correct

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
      <h1>Welcome Back!!!</h1>
      <p>Explore the power of Technology to track your Investment</p>
      <h2>Login</h2>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : showMFAForm ? (
        <form onSubmit={handleVerifyMFA}>
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
      ) : null}
    </div>
  );
};

export default SignIn;
