import React, { useState, useEffect, useRef } from "react";
import HeaderAdmin from "./headerAdmin";

const Categories = () => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [category, setCategory] = useState({
        name: "",
        content: "",
        video_link: "",
    });

    const quillRef = useRef(null);
    const quillInstance = useRef(null);

    //  Fetch available languages
    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await fetch("https://siitecch.onrender.com/api/languages");
                const data = await response.json();
                setLanguages(data);
            } catch (error) {
                console.error("Error fetching languages:", error);
            }
        };
        fetchLanguages();
    }, []);

    //  Load Highlight.js before initializing Quill
    useEffect(() => {
        const initializeQuill = () => {
            if (window.Quill && quillRef.current && !quillInstance.current) {
                quillInstance.current = new window.Quill(quillRef.current, {
                    theme: "snow",
                    placeholder: "Enter content here...",
                    modules: {
                        syntax: {
                            highlight: (text) =>
                                window.hljs ? window.hljs.highlightAuto(text).value : text,
                        },
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ["bold", "italic", "underline"],
                            ["link", "blockquote", "code-block"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ align: [] }],
                        ],
                    },
                });

                quillInstance.current.on("text-change", () => {
                    setCategory((prev) => ({
                        ...prev,
                        content: quillInstance.current.root.innerHTML, // Store as HTML
                    }));
                });
            }
        };

       initializeQuill();

        return () => {
            if (quillInstance.current) {
                quillInstance.current = null;
            }
        };
    }, []);

    // Handle category input changes
    const handleCategoryChange = (e) => {
        const { name, value } = e.target;
        setCategory((prev) => ({ ...prev, [name]: value }));
    };

    // Handle category submission
    const handleCategorySubmit = async (e) => {
        e.preventDefault();

        if (!selectedLanguage) {
            alert("Please select a language");
            return;
        }

        try {
            const response = await fetch(
                `https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(category),
                }
            );

            if (response.ok) {
                alert("Category added successfully");
                setCategory({ name: "", content: "", video_link: "" });
            } else {
                alert("Failed to add category");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding category");
        }
    };

    return (
        <div className="category-form">
               <HeaderAdmin/>
            <h1>Add Category to Language</h1>
            <form onSubmit={handleCategorySubmit}>
                <div className="form-group">
                    <label>Language:</label>
                    <select
                        className="form-details"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        required
                    >
                        <option value="">Language</option>
                        {languages.map((language) => (
                            <option key={language._id} value={language._id}>
                                {language.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-details"
                        value={category.name}
                        placeholder="Category Name"
                        onChange={handleCategoryChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category Content:</label>
                    <div ref={quillRef}></div>
                </div>
                <button type="submit" className="form-details btn">
                    Add Category
                </button>
            </form>
           
        </div>
    );
};

export default Categories;
