import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";

const Categories = () => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch available languages
    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await fetch("https://siitecch.onrender.com/api/languages");
                if (!response.ok) throw new Error("Failed to fetch languages.");
                const data = await response.json();
                setLanguages(data);
            } catch (error) {
                console.error("Error fetching languages:", error);
                setError("Failed to load languages.");
            }
        };
        fetchLanguages();
    }, []);

    // Fetch categories based on selected language
    useEffect(() => {
        if (selectedLanguage) {
            setLoading(true);
            setError(null);
            const fetchCategories = async () => {
                try {
                    const response = await fetch(`https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories`);
                    if (!response.ok) throw new Error("Failed to fetch categories.");
                    const data = await response.json();
                    setCategories(data);
                } catch (error) {
                    console.error("Error fetching categories:", error);
                    setError("Failed to load categories.");
                } finally {
                    setLoading(false);
                }
            };
            fetchCategories();
        }
    }, [selectedLanguage]);

    return (
        <div className="category-container">
               <HeaderAdmin/>
            <h1>Select a Language</h1>
            {error && <p className="error-message">{error}</p>}
            <select
                className="form-details"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
            >
                <option value="">Select a Language</option>
                {languages.map((language) => (
                    <option key={language._id} value={language._id}>{language.name}</option>
                ))}
            </select>

            {selectedLanguage && (
                <div className="category-list">
                    <h2>Categories</h2>
                    {loading ? (
                        <p>Loading categories...</p>
                    ) : categories.length > 0 ? (
                        categories.map((category) => (
                            <div key={category._id} className="category-card">
                                <div className="category-title">{category.name}</div>
                                <button className="edit-btn" onClick={() => navigate(`/admin/editcategory/${category._id}`)}>
                                    Edit
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No categories found for this language.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Categories;
