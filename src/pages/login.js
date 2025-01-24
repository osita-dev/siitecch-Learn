import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { login, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle Input Change
// Handle Input Change
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value.trimStart(), // Prevent leading spaces while typing
  }));
};


  // Handle Submit
// Handle Submit
const handleSubmit = async (e) => {
  e.preventDefault();

  // Trim email and password to remove unnecessary spaces
  const trimmedEmail = formData.email.trim();
  const trimmedPassword = formData.password.trim();

  if (!trimmedEmail || !trimmedPassword) {
    toast.error('Both email and password are required');
    return;
  }

  try {
    await login(trimmedEmail, trimmedPassword, navigate); // Call login from AuthContext
  } catch (error) {
    console.error('Login error:', error);
  }
};

  

  return (
    <>
      <Header />
      <form className={`user ${theme}`} onSubmit={handleSubmit}>
        <img src="images/login.svg" alt="Login logo" />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className="inputStyle"
          value={formData.email}
          onChange={handleInputChange}
        />

        {/* Password Input */}
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="inputStyle"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div
            className="eye" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value={loading ? 'Logging in...' : 'Login'}
          className="inputStyle btn"
          disabled={loading}
        />

        <div className="lines">
          <Link to="/register" className="linked">Not Registered?</Link>
          <div className="line two">OR</div>
          <Link to="/forgot" className="linked">Forgot password?</Link>
        </div>

        {/* Google Login Button */}
        {/* <button className="inputStyle google">
          <FaGoogle /> &nbsp;Sign In with Google
        </button> */}
      </form>
    </>
  );
}
