import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Include Quill.js from CDN
const Categories = () => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [category, setCategory] = useState({
        name: '',
        content: '',
        video_link: '',
    });

    const quillRef = useRef(null); // Reference to the Quill editor

    // Fetch languages
    useEffect(() => {
        async function fetchLanguages() {
            const response = await fetch('https://siitecch.onrender.com/api/languages');
            const data = await response.json();
            setLanguages(data);
        }
        fetchLanguages();

        // Initialize Quill editor
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
                setCategory((prev) => ({
                    ...prev,
                    content: quill.root.innerHTML,
                }));
            });
        }

    }, []);

    const handleCategoryChange = (e) => {
        const { name, value } = e.target;
        setCategory((prev) => ({ ...prev, [name]: value }));
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();

        if (!selectedLanguage) {
            alert('Please select a language');
            return;
        }

        try {
            const response = await fetch(`https://siitecch.onrender.com/api/languages/${selectedLanguage}/categories`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: category.name,
                    content: category.content,  // Quill content stored as HTML
                    video_link: category.video_link,
                }),
            });

            if (response.ok) {
                alert('Category added successfully');
                setCategory({
                    name: '',
                    content: '',
                    video_link: '',
                });
            } else {
                alert('Failed to add category');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding category');
        }
    };

    return (
        <div className="category-form">
            <h1>Add Category to Language</h1>
            <form onSubmit={handleCategorySubmit}>
                <div className="form-group">
                    <label>Language:</label>
                    <select className="form-details"
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
                        placeholder='Catergory Name'
                        onChange={handleCategoryChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category Content:</label>
                    <div ref={quillRef}></div> 
                </div>
                <div className="form-group">
                    <label>Video Link:</label>
                    <input
                        type="text"
                         className="form-details vid"
                        name="video_link"
                        placeholder="YouTube Video Link"
                        value={category.video_link}
                        onChange={handleCategoryChange}
                    />
                </div>
                <button type="submit"  className="form-details btn">Add Category</button>
            </form>
            <br/>
            <Link to="/admin/examples">
                <button  className="form-details btn">NEXT</button>
            </Link>
        </div>
    );
};

export default Categories;
