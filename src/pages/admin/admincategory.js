import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminCategoriesPage = ({ languageId }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://siitecch.onrender.com/api/languages/${languageId}/categories`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [languageId]);

  const handleDelete = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const response = await fetch(`https://siitecch.onrender.com/api/languages/${languageId}/categories/${categoryId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete category');
        }

        const result = await response.json();
        alert(result.message);
        setCategories(categories.filter((category) => category.id !== categoryId));
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Failed to delete category');
      }
    }
  };

  return (
    <div>
      <h2>Categories for Language {languageId}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.video_link}</p>
              <Link to={`/admin/updateCategory/${languageId}/${category.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(category.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminCategoriesPage;
