import React, { useState, useEffect, useRef } from "react";
import HeaderAdmin from "./headerAdmin";

const Languages = () => {
    const [language, setLanguage] = useState({
        name: "",
        slug: "",
        description: "",
        categories: [],
    });

    const editorRef = useRef(null);

    useEffect(() => {
        // Ensure Quill is globally available
        if (window.Quill && editorRef.current) {
            const quill = new window.Quill(editorRef.current, {
                theme: "snow",
                placeholder: "Enter description here...",
                modules: {
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['bold', 'italic', 'underline'],
                        ['link'],
                        ['blockquote'],
                        [{ 'align': [] }],
                    ],
                },
            });

            // Update description on Quill content change
            quill.on("text-change", () => {
                setLanguage((prev) => ({
                    ...prev,
                    description: quill.root.innerHTML,
                }));
            });
        }
    }, []);

    const handleLanguageChange = (e) => {
        const { name, value } = e.target;
        setLanguage((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!language.name.trim() || !language.slug.trim() || !language.description.trim()) {
            alert("All fields are required.");
            return;
        }

        try {
            const response = await fetch("https://siitecch.onrender.com/api/languages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: language.name,
                    slug: language.slug,
                    description: language.description,
                    categories: language.categories,
                }),
            });

            if (response.ok) {
                alert("Language added successfully");
                setLanguage({
                    name: "",
                    slug: "",
                    description: "",
                    categories: [],
                });

                if (editorRef.current) {
                    editorRef.current.innerHTML = "";
                }
            } else {
                alert("Error adding language.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding language");
        }
    };

    return (
        <div className="category-form">
            <HeaderAdmin/>
            <h1>Add Language</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Language Name"
                        name="name"
                        className="form-details"
                        value={language.name}
                        onChange={handleLanguageChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Slug:</label>
                    <input
                        type="text"
                        name="slug"
                        placeholder="slug"
                        className="form-details"
                        value={language.slug}
                        onChange={handleLanguageChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <div ref={editorRef} style={{ height: "200px" }} />
                </div>
                <br></br>
                <button type="submit" className="form-details btn">Add Language</button>
            </form>
        </div>
    );
};

export default Languages;
