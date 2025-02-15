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
          {/* <Link to="/admin/admincategory" className="admin-card">
            <h3>AdminCategory</h3>
          </Link> */}
          <Link to="/admin/languages" className="admin-card">
            <h3>Add Languages</h3>
          </Link>
          <Link to="/admin/categories" className="admin-card">
            <h3>Categories</h3>
          </Link>
          <Link to="/admin/allcategory" className="admin-card">
            <h3>All categories</h3>
          </Link>
          <Link to="/admin/videos" className="admin-card">
            <h3>Add video Link</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;