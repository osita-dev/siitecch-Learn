import { FaUserCircle } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { useAuth } from '../context/authContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const { user } = useAuth(); // Access the user object from AuthContext

    return (
        <header className={`navbar ${theme}`}>
            <div className="logo">
                <div className="image">
                    <img src="images/siitecch_1.png" alt="siitecch logo" />
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2>SIITECCH</h2>
                </Link>
            </div>

            <div className="social-handle">
                {/* Show Dashboard link if user is authenticated */}
                {user ? (
                    <Link to="/dashboard">
                        <button className="button-hover">
                            <FaUserCircle style={{ color: '#F8FAFC', fontSize: '25px' }} />
                        </button>
                    </Link>
                ) : null}

                <button className="button-hover" onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <MdLightMode style={{ fontSize: '25px', color: '#F8FAFC' }} />
                    ) : (
                        <MdDarkMode style={{ fontSize: '25px', color: '#F8FAFC' }} />
                    )}
                </button>
            </div>
        </header>
    );
}
