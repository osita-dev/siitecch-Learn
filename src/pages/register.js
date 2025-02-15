import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { signUp, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim all inputs to remove unnecessary spaces
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();
    const trimmedConfirmPassword = formData.confirmPassword.trim();

    // Validation for Full Name
    if (trimmedName.length < 4) {
      toast.error('Full Name must be at least 4 characters long');
      return;
    }

    // Validation for Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(trimmedEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Validation for Password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(trimmedPassword)) {
      toast.error(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
      );
      return;
    }

    // Confirm Password Validation
    if (trimmedPassword !== trimmedConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Proceed with signup
    try {
      await signUp(trimmedName, trimmedEmail, trimmedPassword, navigate);
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Failed to register. Please try again.');
    }
  };


  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trimStart(), // Prevent leading spaces while typing
    }));
  };



  return (
    <>
      <Header />
      <form className={`user ${theme}`} onSubmit={handleSubmit}>
        <img src="images/signup.svg" alt="Register logo" />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="inputStyle"
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className="inputStyle"
          value={formData.email}
          onChange={handleInputChange}

        />

        {/* Password Field */}
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
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="password-container">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="inputStyle"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <div
            className="eye"
            aria-label="Toggle confirm password visibility"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <input
          type="submit"
          value={loading ? 'Registering...' : 'Register'}
          className="inputStyle btn"
          disabled={loading}
        />

        <div className="lines">
          <Link to="/login" className="linked">Already have an account? Login</Link>
        </div>

        {/* <button className="inputStyle google">
          <FaGoogle /> &nbsp;Sign Up with Google
        </button> */}
        <div className="term">
          <p>
            By signing up you acknowledge that you agree to our{" "}
            <Link to="/terms" className="linked">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="linked">
              Privacy policy.
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
