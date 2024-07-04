import React, { useState } from 'react';
import './styles/ProfilePage.css'; // Ensure the path is correct
import Navbar from './components/common/layout/Navbar.jsx';
import './styles/Navbar.css'; 

const ProfilePage = () => {
  // Sample user data (replace with actual user data fetched from backend)
  const [user, setUser] = useState({
    id: 1,
    name: 'Legend Emmanuel',
    email: 'ababuoturi@gmail.com',
    phone: '+254714205641',
    mfaEnabled: true,
    mfaMethod: 'SMS',
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => {
    setEditing(!editing);
    setFormData({ ...user });
  };

  const handleSaveProfile = () => {
    // Simulate API call to update user profile
    // Replace with actual backend integration
    setUser({ ...formData });
    setEditing(false);
    setError('');
    // Simulate success or error handling
    // setError('An error occurred while saving profile.');
  };

  const handleToggleMFA = () => {
    // Simulate API call to toggle MFA status
    // Replace with actual backend integration
    setUser((prevUser) => ({ ...prevUser, mfaEnabled: !prevUser.mfaEnabled }));
    // Simulate success or error handling
    // setError('An error occurred while toggling MFA.');
  };

  const handleMFAChange = (method) => {
    // Simulate API call to change MFA method
    // Replace with actual backend integration
    setUser((prevUser) => ({ ...prevUser, mfaMethod: method }));
    // Simulate success or error handling
    // setError('An error occurred while changing MFA method.');
  };

  const handleResetMFA = () => {
    // Simulate API call to reset MFA settings
    // Replace with actual backend integration
    setUser((prevUser) => ({ ...prevUser, mfaEnabled: false, mfaMethod: null }));
    // Simulate success or error handling
    // setError('An error occurred while resetting MFA.');
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
      <main>
      <h2>User Profile</h2>
      <div className="profile-details">
        {!editing ? (
          <div>
            <p><strong className='style1'>Name:</strong> {user.name}</p>
            <p><strong className='style1'>Email:</strong> {user.email}</p>
            <p><strong className='style1'>Phone:</strong> {user.phone}</p>
            <p><strong className='style1'>MFA Enabled:</strong> {user.mfaEnabled ? 'Yes' : 'No'}</p>
            {user.mfaEnabled && <p><strong className='style1'>MFA Method:</strong> {user.mfaMethod}</p>}
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <button onClick={handleSaveProfile}>Save</button>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>

      <div className="mfa-management">
        <h3>MFA Management</h3>
        <p><strong className='style1'>MFA Enabled:</strong> {user.mfaEnabled ? 'Yes' : 'No'}</p>
        <button onClick={handleToggleMFA}>
          {user.mfaEnabled ? 'Disable MFA' : 'Enable MFA'}
        </button>

        {user.mfaEnabled && (
          <div>
            <p><strong className='style1'>Current Method:</strong > {user.mfaMethod}</p>
            <button onClick={() => handleMFAChange('SMS')}>Change Method to SMS</button>
            <button onClick={() => handleMFAChange('Email')}>Change Method to Email</button>
            <button onClick={handleResetMFA}>Reset MFA</button>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>
      </main>
    </div>
    </div>
  );
};

export default ProfilePage;
