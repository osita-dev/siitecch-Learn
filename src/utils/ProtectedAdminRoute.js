import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Check if user exists and if the user is an admin
  useEffect(() => {
    if (user === null) {
      // If user is null (or undefined), it means we are still loading the user data
      setIsLoading(true);
    } else {
      // If the user is set, check if they are an admin
      if (user.role !== 'admin') {
        navigate('/unauthorized'); // If not admin, redirect to unauthorized page
      }
      setIsLoading(false); // Done checking user
    }
  }, [user, navigate]);

  // If still loading, return null (or a loading spinner if preferred)
  if (isLoading) return null;

  // Render the children if user is logged in and an admin
  return user && user.role === 'admin' ? children : null;
};

export default ProtectedAdminRoute;