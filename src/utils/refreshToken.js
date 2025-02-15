const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
  
    const response = await fetch('/api/refresh-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });
  
    const data = await response.json();
  
    if (data.newAccessToken) {
      // Save the new access token in localStorage
      localStorage.setItem('token', data.newAccessToken);
      return data.newAccessToken;
    }
  
    throw new Error('Unable to refresh token');
  };
export default refreshAccessToken;  