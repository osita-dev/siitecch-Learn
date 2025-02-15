import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './adminStyle.css';
import { ThemeProvider } from './context/themeContext';
import { AuthProvider } from './context/authContext'; // New auth provider
import { CookieProvider } from './context/cookieContext'; // Import the new Cookie Provider
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter should be in index.js

// Register the Service Worker for offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed: ', error);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router> {/* Wrap everything with BrowserRouter here */}
      <ThemeProvider>
        <CookieProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CookieProvider>
      </ThemeProvider>
    </Router>
);
