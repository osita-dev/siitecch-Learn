import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const navigate = useNavigate();  // You are correctly using the hook for navigation

  useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  console.log('Token from URL:', token); // Debugging log
  if (token) {
    localStorage.setItem('token', token);
    navigate('/profile');
  } else {
    console.warn('No token found! Navigating to /about'); // Debugging log
    navigate('/about');
  }
}, [navigate]); // make sure the hook only runs once on component mount

  return <div>Processing login...</div>;  // Loading indicator or placeholder
};

export default GoogleCallback;
