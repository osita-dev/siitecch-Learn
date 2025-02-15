import React, { useState, useEffect } from "react";
import HeaderAdmin from "./headerAdmin";

const Videos = () => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [videoLink, setVideoLink] = useState("");

    useEffect(() => {
        async function fetchLanguages() {
            const response = await fetch("https://siitecch.onrender.com/api/languages");
            const data = await response.json();
            setLanguages(data);
        }
        fetchLanguages();
    }, []);

    useEffect(() => {
        if (!selectedLanguage) return;

        async function fetchCategories() {
            const response = await fetch(
                `https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories`
            );
            const data = await response.json();
            setCategories(data);
        }

        fetchCategories();
    }, [selectedLanguage]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedLanguage || !selectedCategory) {
            alert("Please select a language and category");
            return;
        }

        try {
            const response = await fetch(
                `https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories/${selectedCategory}/videos`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ videoUrl: videoLink }),
                }
            );

            if (response.ok) {
                alert("Video link added successfully");
                setVideoLink("");
            } else {
                alert("Failed to add video link");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding video link");
        }
    };

    return (
        <div className="category-form">
               <HeaderAdmin/>
            <h1>Add Video Link to Category</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Select Language:</label>
                    <select
                        className="form-details"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        required
                    >
                        <option value="">Select a Language</option>
                        {languages.map((language) => (
                            <option key={language._id} value={language._id}>
                                {language.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Select Category:</label>
                    <select
                        className="form-details"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>YouTube Video URL:</label>
                    <input
                        type="url"
                        className="form-details"
                        placeholder="Enter YouTube URL"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        required
                    />
                </div>

                <br />
                <button type="submit" className="form-details btn">
                    Add Video Link
                </button>
            </form>
           
        </div>
    );
};

export default Videos;