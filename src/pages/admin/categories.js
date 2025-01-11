// // CategoryForm.jsx
// import React, { useState, useEffect } from 'react';
// import { Editor, EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import 'draft-js/dist/Draft.css';
// import { Link } from 'react-router-dom';

// const Categories = () => {
//     const [languages, setLanguages] = useState([]);
//     const [selectedLanguage, setSelectedLanguage] = useState('');
//     const [category, setCategory] = useState({
//         name: '',
//         content: EditorState.createEmpty(),
//         video_link: '',
//     });

//     // Fetch languages
//     useEffect(() => {
//         async function fetchLanguages() {
//             const response = await fetch('http://localhost:5000/api/languages');
//             const data = await response.json();
//             setLanguages(data);
//         }
//         fetchLanguages();
//     }, []);

//     const handleCategoryChange = (e) => {
//         const { name, value } = e.target;
//         setCategory((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleCategoryEditorChange = (editorState) => {
//         setCategory((prev) => ({ ...prev, content: editorState }));
//     };

//     const handleCategorySubmit = async (e) => {
//         e.preventDefault();
//         if (!selectedLanguage) {
//             alert('Please select a language');
//             return;
//         }

//         const categoryHtmlContent = draftToHtml(convertToRaw(category.content.getCurrentContent()));

//         try {
//             const response = await fetch(`http://localhost:5000/api/languages/${selectedLanguage}/categories`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     name: category.name,
//                     content: categoryHtmlContent,
//                     video_link: category.video_link,
//                 }),
//             });

//             if (response.ok) {
//                 alert('Category added successfully');
//                 setCategory({
//                     name: '',
//                     content: EditorState.createEmpty(),
//                     video_link: '',
//                 });
//             } else {
//                 alert('Failed to add category');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Error adding category');
//         }
//     };

//     return (
//         <div className="category-form">
//             <h1>Add Category to Language</h1>
//             <form onSubmit={handleCategorySubmit}>
//                 <div className="form-group">
//                     <label>Select Language:</label>
//                     <select
//                         value={selectedLanguage}
//                         onChange={(e) => setSelectedLanguage(e.target.value)}
//                         required
//                     >
//                         <option value="">Select a Language</option>
//                         {languages.map((language) => (
//                             <option key={language._id} value={language._id}>
//                                 {language.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label>Category Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={category.name}
//                         onChange={handleCategoryChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Category Content:</label>
//                     <Editor
//                         editorState={category.content}
//                         onChange={handleCategoryEditorChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Video Link:</label>
//                     <input
//                         type="text"
//                         name="video_link"
//                         value={category.video_link}
//                         onChange={handleCategoryChange}
//                     />
//                 </div>
//                 <button type="submit">Add Category</button>
//             </form>
//             <Link to="/admin/examples">
//                 <button className="">
//                     NEXT
//                 </button>
//             </Link>
//         </div>
//     );
// };

// export default Categories;
