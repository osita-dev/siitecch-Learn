import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";

const EditCategory = () => {
    const { id } = useParams(); // Get category ID from URL
    const [languages, setLanguages] = useState([]);
    const [category, setCategory] = useState({ name: "", content: "", video_link: "", language_id: "" });
    const navigate = useNavigate();
    const quillRef = useRef(null);
    const quillInstance = useRef(null);

    // Fetch available languages
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

    // Fetch category details and auto-select the language
    useEffect(() => {
        if (id) {
            const fetchCategory = async () => {
                try {
                    const response = await fetch(`https://siitecch.onrender.com/api/categories/${id}`);
                    const data = await response.json();
                    setCategory({ 
                        name: data.name, 
                        content: data.content, 
                        video_link: data.video_link, 
                        language_id: data.language_id 
                    });

                    // Update Quill editor content after loading
                    if (quillInstance.current) {
                        quillInstance.current.root.innerHTML = data.content || "";
                    }
                } catch (error) {
                    console.error("Error fetching category:", error);
                }
            };
            fetchCategory();
        }
    }, [id]);

    // Initialize Quill editor
    useEffect(() => {
        if (!window.Quill) return; // Ensure Quill is loaded

        quillInstance.current = new window.Quill(quillRef.current, {
            theme: "snow",
            placeholder: "Enter content here...",
            modules: {
                syntax: { highlight: text => (window.hljs ? window.hljs.highlightAuto(text).value : text) },
                toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"], ["link", "blockquote", "code-block"], [{ list: "ordered" }, { list: "bullet" }], [{ align: [] }]],
            },
        });

        quillInstance.current.on("text-change", () => {
            setCategory(prev => ({ ...prev, content: quillInstance.current.root.innerHTML }));
        });

        return () => {
            quillInstance.current = null;
        };
    }, []);

    // Handle input changes
    const handleCategoryChange = (e) => {
        const { name, value } = e.target;
        setCategory(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission (Update)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://siitecch.onrender.com/api/categories/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(category),
            });

            if (response.ok) {
                alert("Category updated successfully");
                navigate("/admin/categories");
            } else {
                alert("Update failed");
            }
        } catch (error) {
            console.error("Error updating category:", error);
            alert("Error updating category");
        }
    };

    return (
        <div className="category-form">
               <HeaderAdmin/>
            <h1>Edit Category</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Language:</label>
                    <select
                        className="form-details"
                        value={category.language_id}
                        onChange={(e) => setCategory(prev => ({ ...prev, language_id: e.target.value }))}
                        required
                    >
                        <option value="">Language</option>
                        {languages.map(language => (
                            <option key={language._id} value={language._id}>{language.name}</option>
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
                <button type="submit" className="form-details btn">Update Category</button>
            </form>
        </div>
    );
};

export default EditCategory;
