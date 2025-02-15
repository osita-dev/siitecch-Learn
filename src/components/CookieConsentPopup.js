import { useContext, useState, useEffect } from 'react';
import { CookieContext } from '../context/cookieContext';
import { useTheme } from '../context/themeContext';

const CookieConsentPopup = () => {
    const { theme } = useTheme();
    const { hasConsented, savePreferences } = useContext(CookieContext);

    const [isReady, setIsReady] = useState(false); // Tracks if consent state is ready

    // Simulate loading the consent state
    useEffect(() => {
        if (hasConsented !== undefined) {
            setIsReady(true); // Consent state is ready
        }
    }, [hasConsented]);

    const handleAcceptAll = () => {
        savePreferences({ essential: true, analytics: true, advertising: true, preferences: true });
    };

    const handleCustomize = () => {
        savePreferences({ essential: true, analytics: true, advertising: true, preferences: true });
    };

    // Don't render until consent state is ready
    if (!isReady || hasConsented) return null;

    return (
        <div className={`popup ${theme}`}>
            <p>
                We use cookies to improve your experience. You can accept all cookies or customize your
                preferences.
            </p>
            <button onClick={handleAcceptAll}>Accept All</button>
            <button onClick={handleCustomize}>Customize</button>
        </div>
    );
};

export default CookieConsentPopup;
