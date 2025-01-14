import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Examples = () => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [example, setExample] = useState({
        description: '',
    });

    const quillRef = useRef(null); // Reference to the Quill editor

    // Fetch Languages
    useEffect(() => {
        async function fetchLanguages() {
            const response = await fetch('https://siitecch.onrender.com/api/languages');
            const data = await response.json();
            setLanguages(data);
        }
        fetchLanguages();
    }, []);

    // Fetch Categories when Language is Selected
    useEffect(() => {
        if (!selectedLanguage) return;

        async function fetchCategories() {
            const response = await fetch(`https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories`);
            const data = await response.json();
            setCategories(data);
        }

        fetchCategories();
    }, [selectedLanguage]);

    useEffect(() => {
        if (window.Quill) {
            const quill = new window.Quill(quillRef.current, {
                theme: 'snow',
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

            // Sync Quill's content with local state
            quill.on('text-change', () => {
                setExample((prev) => ({
                    ...prev,
                    description: quill.root.innerHTML, // Use description for Quill's HTML content
                }));
            });

        }
    }, []);

    const handleExampleSubmit = async (e) => {
        e.preventDefault();

        // Debugging line: log the selectedCategory
        console.log('Selected Category:', selectedCategory);

        if (!selectedLanguage || !selectedCategory) {
            alert('Please select a language and category');
            return;
        }

        try {
            const response = await fetch(
                `https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories/${selectedCategory}/examples`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(example),
                }
            );

            if (response.ok) {
                alert('Example added successfully');
                setExample({ title: '', code: '', description: '' });
            } else {
                alert('Failed to add example');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding example');
        }
    };

    return (
        <div className="category-form">
            <h1>Add Example to Category</h1>
            <form onSubmit={handleExampleSubmit}>
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
                    <label>Description:</label>
                    <div ref={quillRef}></div> {/* Quill editor */}
                </div>
                <br/>
                <button type="submit" className="form-details btn">Add Example</button>
            </form>
            <Link to="/admin">
                <button className="form-details btn">HomePage</button>
            </Link>
        </div>
    );
};

export default Examples;
