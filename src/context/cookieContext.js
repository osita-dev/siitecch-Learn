import { createContext, useState, useEffect } from 'react';
import { getCookie, setCookie } from '../utils/cookieUtils';

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true since essential cookies are required
    analytics: true,
    advertising: true,
    preferences: true,
  });

  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const savedPreferences = getCookie('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
      setHasConsented(true);
    }
  }, []);

  const savePreferences = (preferences) => {
    setCookie('cookiePreferences', JSON.stringify(preferences), 365);
    setCookiePreferences(preferences);
    setHasConsented(true);
  };

  return (
    <CookieContext.Provider value={{ cookiePreferences, hasConsented, savePreferences }}>
      {children}
    </CookieContext.Provider>
  );
};
