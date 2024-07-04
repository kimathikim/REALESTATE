import React, { useState, useEffect } from 'react';
import './styles/DashboardPage.css'; // Ensure the path is correct

const DashboardPage = () => {
  // Sample user data (replace with actual user data fetched from backend)
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    activities: [
      { id: 1, action: 'Logged in', timestamp: '2024-07-04T09:00:00Z' },
      { id: 2, action: 'Updated profile', timestamp: '2024-07-03T15:30:00Z' },
    ],
    mfaEnabled: true, // Change to false to simulate MFA setup prompt
  });

  const [mfaSetupPending, setMfaSetupPending] = useState(false);

  useEffect(() => {
    // Simulate checking MFA setup status on component mount
    if (!user.mfaEnabled) {
      setMfaSetupPending(true); // Prompt user to set up MFA if not enabled
    }
  }, [user.mfaEnabled]);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}!</h2>
      
      <div className="overview">
        <h3>Overview of User Activities</h3>
        <ul>
          {user.activities.map((activity) => (
            <li key={activity.id}>
              <p><strong>{activity.action}</strong> - {new Date(activity.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="quick-access">
        <h3>Quick Access to Key Features</h3>
        <ul>
          <li><a href="#profile">Update Profile</a></li>
          <li><a href="#mfa">Manage MFA</a></li>
          {/* Add more quick access links as needed */}
        </ul>
      </div>

      <div className="mfa-status">
        <h3>MFA Status</h3>
        <p><strong>MFA Enabled:</strong> {user.mfaEnabled ? 'Yes' : 'No'}</p>
        {!user.mfaEnabled && mfaSetupPending && (
          <div className="mfa-setup">
            <p>Set up Multi-Factor Authentication (MFA) to enhance account security:</p>
            <button>Set up MFA</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
