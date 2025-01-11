import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';

const AdminHome = () => {
  const { theme } = useTheme();

  return (
    <div className={`admin-container ${theme}`}>
      <div className="admin-content">
        <h1 className="admin-title">Admin Dashboard</h1>
        <div className="admin-cards">
          {/* <Link to="/admin/users" className="admin-card">
            <h3>All Users</h3>
          </Link> */}
          <Link to="/admin/languages" className="admin-card">
            <h3>Add Languages</h3>
          </Link>
          <Link to="/admin/categories" className="admin-card">
            <h3>Categories</h3>
          </Link>
          <Link to="/admin/examples" className="admin-card">
            <h3>Examples</h3>
          </Link>
          <Link to="/admin/updateLanguage" className="admin-card">
            <h3>Update Lang</h3>
          </Link>
          <Link to="/admin/updateCategory" className="admin-card">
            <h3>Update Category</h3>
          </Link>
          <Link to="/admin/updateExample" className="admin-card">
            <h3>Update Examples</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;



// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTheme } from '../../context/themeContext';
// import { useAuth } from '../../context/authContext';

// const AdminHome = () => {
//   const { theme } = useTheme();
//   const { logout } = useAuth();
//   const [user, setUser] = useState(null); // Local state for user
//   const navigate = useNavigate();

//   // Fetch user data from localStorage on component mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser); // Parse the user data from localStorage
//       if (parsedUser.role === 'admin') {
//         setUser(parsedUser); // If user is admin, set it in state
//       } else {
//         navigate('/login'); // If not admin, redirect to login
//       }
//     } else {
//       navigate('/login'); // If no user in localStorage, redirect to login
//     }
//   }, [navigate]);

//   // Handle logout functionality
//   const handleLogout = () => {
//     localStorage.removeItem('user'); // Remove user data from localStorage
//     logout(); // Call logout function from authContext
//     navigate('/login'); // Redirect to login page
//   };

//   // Display loader while fetching user data
//   if (!user) {
//     return (
//       <div className="loader">
//         <div className="load">SIITECCH</div>
//       </div>
//     );
//   }

//   return (
//     <div className={`admin-container ${theme}`}>
//       <div className="admin-content">
//         <h1 className="admin-title">Admin Dashboard</h1>
//         <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button>
//         <div className="admin-cards">
//           <Link to="/admin/users" className="admin-card">
//             <h3>All Users</h3>
//           </Link>
//           <Link to="/admin/languages" className="admin-card">
//             <h3>Add Languages</h3>
//           </Link>
//           <Link to="/admin/categories" className="admin-card">
//             <h3>Categories</h3>
//           </Link>
//           <Link to="/admin/examples" className="admin-card">
//             <h3>Examples</h3>
//           </Link>
//           <Link to="/admin/updateLanguage" className="admin-card">
//             <h3>Update Lang</h3>
//           </Link>
//           <Link to="/admin/updateCategory" className="admin-card">
//             <h3>Update Category</h3>
//           </Link>
//           <Link to="/admin/updateExample" className="admin-card">
//             <h3>Update Examples</h3>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;
