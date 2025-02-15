import React, { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useTheme } from '../context/themeContext';
import { MdOutlineEmail } from 'react-icons/md';
import SingleHeader from '../components/singleHeader';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { theme } = useTheme();
  const { user, fetchUserProfile, logout } = useAuth();
  const navigate = useNavigate();

  // Fetch user profile on mount if not available
  useEffect(() => {
    if (!user) {
      console.log("User not found, fetching profile...");
      fetchUserProfile();  // Fetch user profile only if not already set
    } else {
      console.log("User already available:", user);
    }
  }, [user, fetchUserProfile]);

  // Handle loading state if user data isn't available yet
  if (!user) {
    return (
      <div className="loader">
        <div className="load">SIITECCH</div>
      </div>
    );
  }

  return (
    <>
      <SingleHeader />
      <section className={`profile ${theme}`}>
        <div className="profile-header">
          <div className="profile-image">
            <img
              src="images/profile.png"
              alt="User Avatar"
              className="avatar"
            />
          </div>
          <div className="profile-info">
            <p>{user.name || 'No Name Available'}</p>
            <p className="student">{user.role || 'No Role Available'}</p> {/* Ensure role is displayed */}
          </div>
        </div>
        <div className="email-section">
          <div className="profile-email">
            <MdOutlineEmail /> &nbsp; Email
          </div>
          <div className="pro-email">{user.email || 'No Email Available'}</div>
        </div>
        <button
          className="btn-logout"
          onClick={() => logout(navigate)}
        >
          Logout
        </button>
      </section>
    </>
  );
};

export default Dashboard;
