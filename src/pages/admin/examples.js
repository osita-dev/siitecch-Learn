// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Examples = () => {
//     const [languages, setLanguages] = useState([]);
//     const [selectedLanguage, setSelectedLanguage] = useState('');
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [example, setExample] = useState({
//         title: '',
//         code: '',
//         description: '',
//     });

//     // Fetch Languages
//     useEffect(() => {
//         async function fetchLanguages() {
//             const response = await fetch('http://localhost:5000/api/languages');
//             const data = await response.json();
//             setLanguages(data);
//         }
//         fetchLanguages();
//     }, []);

//     // Fetch Categories when Language is Selected
//     useEffect(() => {
//         if (!selectedLanguage) return;

//         async function fetchCategories() {
//             const response = await fetch(`http://localhost:5000/api/languages/${selectedLanguage}/categories`);
//             const data = await response.json();
//             setCategories(data);
//         }

//         fetchCategories();
//     }, [selectedLanguage]);

//     const handleExampleChange = (e) => {
//         const { name, value } = e.target;
//         setExample((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleExampleSubmit = async (e) => {
//         e.preventDefault();

//         if (!selectedLanguage || !selectedCategory) {
//             alert('Please select a language and category');
//             return;
//         }

//         try {
//             const response = await fetch(
//                 `http://localhost:5000/api/languages/${selectedLanguage}/categories/${selectedCategory}/examples`,
//                 {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(example),
//                 }
//             );

//             if (response.ok) {
//                 alert('Example added successfully');
//                 setExample({ title: '', code: '', description: '' });
//             } else {
//                 alert('Failed to add example');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Error adding example');
//         }
//     };

//     return (
//         <div className="example-form">
//             <h1>Add Example to Category</h1>
//             <form onSubmit={handleExampleSubmit}>
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
//                     <label>Select Category:</label>
//                     <select
//                         value={selectedCategory}
//                         onChange={(e) => setSelectedCategory(e.target.value)}
//                         required
//                     >
//                         <option value="">Select a Category</option>
//                         {categories.map((category) => (
//                             <option key={category._id} value={category._id}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label>Example Title:</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={example.title}
//                         onChange={handleExampleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Code:</label>
//                     <textarea
//                         name="code"
//                         value={example.code}
//                         onChange={handleExampleChange}
//                     ></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label>Description:</label>
//                     <textarea
//                         name="description"
//                         value={example.description}
//                         onChange={handleExampleChange}
//                     ></textarea>
//                 </div>
//                 <button type="submit">Add Example</button>
//             </form>
//             <Link to="/admin">
//                 <button className="">
//                     HomePage
//                 </button>
//             </Link>
//         </div>
//     );
// };

// export default Examples;
