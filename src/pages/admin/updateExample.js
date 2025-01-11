// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Editor, EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import 'draft-js/dist/Draft.css'; // Include Draft.js styles
// import { Link } from 'react-router-dom';

// const UpdateExample = ({ languageId, categoryId, exampleId }) => {
//   const [example, setExample] = useState({
//     title: '',
//     code: '',
//     description: '',
//   });
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [loading, setLoading] = useState(false);

//   // Fetch existing example data when component mounts or parameters change
//   useEffect(() => {
//     const fetchExample = async () => {
//       try {
//         const response = await axios.get(`/api/languages/${languageId}/categories/${categoryId}/examples/${exampleId}`);
//         const fetchedExample = response.data;
//         setExample(fetchedExample);

//         // Initialize editor with existing code
//         const contentState = EditorState.createWithContent(fetchedExample.code);
//         setEditorState(contentState);
//       } catch (error) {
//         console.error('Error fetching example data:', error);
//       }
//     };
//     fetchExample();
//   }, [languageId, categoryId, exampleId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExample((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle editor content change
//   const handleEditorChange = (state) => {
//     setEditorState(state);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const contentHtml = draftToHtml(convertToRaw(editorState.getCurrentContent())); // Convert editor content to HTML
//       const response = await axios.put(`/api/languages/${languageId}/categories/${categoryId}/examples/${exampleId}`, {
//         ...example,
//         code: contentHtml, // Save code as HTML content
//       });
//       alert(response.data.message); // Notify user of success
//     } catch (error) {
//       console.error('Error updating example:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Example</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             name="title"
//             value={example.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             name="description"
//             value={example.description}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Editor for code */}
//         <div>
//           <label>Code</label>
//           <Editor
//             editorState={editorState}
//             onChange={handleEditorChange}
//             placeholder="Write your code here..."
//           />
//         </div>

//         <div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Updating...' : 'Update Example'}
//           </button>
//         </div>
//       </form>
//       <Link to="/admin">
//         <button className="">
//           HomePage
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default UpdateExample;
