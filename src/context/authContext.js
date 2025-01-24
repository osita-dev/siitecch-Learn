import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

// Custom Hook to Access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if user is already authenticated on initial load (fetch from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      const userData = JSON.parse(storedUser);
      // Ensure that role and other properties are still valid
      if (userData && userData.role) {
        setUser(userData);
      } else {
        // If user data is incomplete, clear localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);


  const isAuthenticated = user !== null;

  // Function to refresh access token
  const refreshAccessToken = useCallback(async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return null;

    try {
      const response = await fetch('https://siitecch.onrender.com/api/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token); // Save new access token
        return data.token;
      } else {
        throw new Error('Unable to refresh token');
      }
    } catch (error) {
      console.log('Error refreshing token:', error);
      logout(); // Logout if refresh fails
      return null;
    }
  }, []);

  // sign Up
  const signUp = async (name, email, password, navigate) => {
    setLoading(true);
    try {
      // Set default role
      const role = 'student'; // Define role explicitly here

      const response = await fetch('https://siitecch.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }), // Pass role in the body
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }

      // Save the user and token data to localStorage and state
      setUser(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.user));

      toast.success('Signup successful!');
      navigate('/'); // Navigate to homepage
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  // ✅ Login Function
  const login = async (email, password, navigate) => {
    setLoading(true);
    try {
        const response = await fetch('https://siitecch.onrender.com/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to login');
        }

        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('user', JSON.stringify(data.user));

        toast.success('Login successful!');

        // Redirect based on role
        if (data.user.role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/');
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};


  // ✅ Logout Function
  const logout = (navigate) => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setUser(null);
      toast.success('Logout successful!');
      navigate('/login');
    } catch (error) {
      toast.error('Error during logout, please try again.');
    }
  };

  // Fetch User Profile
  const fetchUserProfile = useCallback(async () => {
    let token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await fetch('https://siitecch.onrender.com/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Fetched user data:', data); // Check the format of the data
        setUser(data);  // Make sure 'setUser' works with the data format
      } else if (response.status === 401) {
        console.log('Token expired, attempting to refresh...');
        token = await refreshAccessToken();
        if (token) {
          localStorage.setItem('token', token);  // Save the new token
          await fetchUserProfile();  // Retry the request with the new token
        } else {
          console.error('Token refresh failed');
        }
      } else {
        console.error('Failed to fetch user profile', response.status);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }, [refreshAccessToken]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signUp,
        login,
        logout,
        refreshAccessToken,
        fetchUserProfile,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
