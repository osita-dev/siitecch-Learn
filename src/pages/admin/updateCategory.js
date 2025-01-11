// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Editor, EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import { Link } from 'react-router-dom';

// const UpdateCategory = ({ languageId, categoryId }) => {
//   const [category, setCategory] = useState({
//     name: '',
//     content: '',
//     video_link: '',
//   });
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [loading, setLoading] = useState(false);

//   // Fetch category data when component mounts or languageId/categoryId changes
//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(`/api/languages/${languageId}/categories/${categoryId}`);
//         const fetchedCategory = response.data;
//         setCategory(fetchedCategory);
        
//         // Initialize editor with existing content
//         const contentState = EditorState.createWithContent(fetchedCategory.content);
//         setEditorState(contentState);
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//       }
//     };
//     fetchCategory();
//   }, [languageId, categoryId]);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCategory((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle editor content change
//   const handleEditorChange = (state) => {
//     setEditorState(state);
//   };

//   // Handle form submission (final update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const contentHtml = draftToHtml(convertToRaw(editorState.getCurrentContent())); // Convert editor content to HTML
//       const response = await axios.put(`/api/languages/${languageId}/categories/${categoryId}`, {
//         ...category,
//         content: contentHtml, // Save HTML content
//       });
//       alert(response.data.message); // Notify user of success
//     } catch (error) {
//       console.error('Error updating category:', error);
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div>
//       <h2>Update Category</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={category.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Video Link</label>
//           <input
//             type="text"
//             name="video_link"
//             value={category.video_link}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Editor for content */}
//         <div>
//           <label>Content</label>
//           <Editor
//             editorState={editorState}
//             onChange={handleEditorChange}
//             placeholder="Write your content here..."
//           />
//         </div>

//         <div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Updating...' : 'Update Category'}
//           </button>
//         </div>
//       </form>
//       <Link to="/admin/updateExample">
//         <button className="">
//           NEXT
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default UpdateCategory;
