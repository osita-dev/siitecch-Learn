import jwtDecode from 'jwt-decode';
import { refreshAccessToken } from './refreshAccessToken';

const checkAndRefreshToken = async () => {
  const accessToken = localStorage.getItem('token');
  
  // If no access token, return early
  if (!accessToken) return;

  const decodedToken = jwtDecode(accessToken); // Decode the JWT
  const tokenExpiry = decodedToken.exp; // Expiry time in seconds from the token
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  if (tokenExpiry < currentTime) {
    // If the token has expired, refresh it
    try {
      const newAccessToken = await refreshAccessToken(); // Call the function to get a new token
      console.log('Token refreshed:', newAccessToken); // Handle the new token (e.g., save it)
    } catch (error) {
      console.log('Error refreshing token:', error);
      // Optionally, handle the logout logic here if the refresh fails
    }
  }
};
export default checkAndRefreshToken;