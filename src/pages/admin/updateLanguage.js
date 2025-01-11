// import React, { useState, useEffect } from 'react';
// import { Editor, EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import 'draft-js/dist/Draft.css';
// import { Link } from 'react-router-dom';

// const UpdateLanguage = ({ languageId }) => {
//   const [language, setLanguage] = useState({
//     name: '',
//     slug: '',
//     description: EditorState.createEmpty(),

//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch existing language data
//     const fetchLanguage = async () => {
//       try {
//         const response = await fetch(`/api/languages/${languageId}`);
//         const data = await response.json();

//         if (response.ok) {
//           setLanguage({
//             name: data.name,
//             slug: data.slug,
//             description: EditorState.createWithContent(draftToHtml(data.description)),

//           });
//         } else {
//           console.error('Failed to fetch language data:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching language data:', error);
//       }
//     };
//     fetchLanguage();
//   }, [languageId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLanguage((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleEditorChange = (editorState) => {
//     setLanguage((prevState) => ({
//       ...prevState,
//       description: editorState
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const descriptionHtml = draftToHtml(convertToRaw(language.description.getCurrentContent()));

//     try {
//       const response = await fetch(`/api/languages/${languageId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: language.name,
//           slug: language.slug,
//           description: descriptionHtml,
//           categories: language.categories || []
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//       } else {
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error updating language:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Language</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={language.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Slug</label>
//           <input
//             type="text"
//             name="slug"
//             value={language.slug}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <Editor
//             editorState={language.description}
//             onChange={handleEditorChange}
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? 'Updating...' : 'Update Language'}
//         </button>
//       </form>
//       <Link to="/admin/updateCategory">
//         <button className="">
//           NEXT
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default UpdateLanguage;
