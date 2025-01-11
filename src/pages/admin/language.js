import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Languages = () => {
    const [language, setLanguage] = useState({
        name: '',
        slug: '',
        description: '<p>Enter description here...</p>',
        categories: [],
    });
    

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
            alert('All fields are required.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/languages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: language.name,
                    slug: language.slug,
                    description: language.description,
                    categories: language.categories,
                }),
            });

            if (response.ok) {
                alert('Language added successfully');
                setLanguage({
                    name: '',
                    slug: '',
                    description: '<p>Enter description here...</p>',
                    categories: [],
                });
            } else {
                alert('Error adding language.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding language');
        }
    };

    const handleDescriptionChange = (event, editor) => {
        const data = editor.getData();
        setLanguage((prev) => ({ ...prev, description: data }));
    };

    return (
        <div className="add-language-form">
            <h1>Add Language</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
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
                        value={language.slug}
                        onChange={handleLanguageChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={language.description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <button type="submit">Add Language</button>
            </form>

            <Link to="/admin/categories">
                <button className="">NEXT</button>
            </Link>
        </div>
    );
};

export default Languages;
