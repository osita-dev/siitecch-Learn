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
          <Link to="/admin/examples" className="admin-card">
            <h3>Examples</h3>
          </Link>
          {/* <Link to="/admin/updateLanguage" className="admin-card">
            <h3>Update Lang</h3>
          </Link>
          <Link to="/admin/updateCategory" className="admin-card">
            <h3>Update Category</h3>
          </Link>
          <Link to="/admin/updateExample" className="admin-card">
            <h3>Update Examples</h3>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;