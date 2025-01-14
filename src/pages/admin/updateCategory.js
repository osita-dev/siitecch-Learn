// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const UpdateCategory = ({ languageId, categoryId }) => {
//   const [category, setCategory] = useState({
//     name: '',
//     content: '',
//     video_link: '',
//   });
//   const quillRef = useRef(null); // Reference to Quill editor
//   const [loading, setLoading] = useState(true); // Track loading state for data fetching
//   const [quillLoaded, setQuillLoaded] = useState(false); // Track Quill editor initialization

//   // Fetch the existing category data
//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/languages/${languageId}/categories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch category data');
//         }
//         const data = await response.json();
//         setCategory(data);

//         // Initialize Quill editor once the data is fetched
//         if (window.Quill && !quillLoaded) {
//           const quill = new window.Quill(quillRef.current, {
//             theme: 'snow',
//             modules: {
//               toolbar: [
//                 [{ header: '1' }, { header: '2' }, { font: [] }],
//                 [{ list: 'ordered' }, { list: 'bullet' }],
//                 ['bold', 'italic', 'underline'],
//                 ['link'],
//                 ['blockquote'],
//                 [{ align: [] }],
//               ],
//             },
//           });

//           quill.root.innerHTML = data.content; // Set current content in Quill
//           quill.on('text-change', () => {
//             setCategory((prev) => ({
//               ...prev,
//               content: quill.root.innerHTML, // Update content in the state
//             }));
//           });

//           setQuillLoaded(true); // Set Quill as loaded
//         }
//       } catch (error) {
//         console.error('Error fetching category data:', error);
//         alert('Failed to load category data');
//       } finally {
//         setLoading(false); // Data is fetched, no longer loading
//       }
//     };

//     fetchCategory();
//   }, [languageId, categoryId, quillLoaded]); // Dependency array ensures fetch happens once

//   // Handle input field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCategory((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/languages/${languageId}/categories/${categoryId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(category),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update category');
//       }

//       const result = await response.json();
//       alert(result.message); // Notify user of success
//     } catch (error) {
//       console.error('Error updating category:', error);
//       alert('Failed to update category');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Category</h2>
//       {loading ? (
//         <div>Loading...</div> // Display a loading message while data is being fetched
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={category.name}
//               onChange={handleChange}
//               disabled={loading} // Disable input while loading
//             />
//           </div>
//           <div>
//             <label>Video Link</label>
//             <input
//               type="text"
//               name="video_link"
//               value={category.video_link}
//               onChange={handleChange}
//               disabled={loading} // Disable input while loading
//             />
//           </div>

//           {/* Quill Editor */}
//           <div>
//             <label>Content</label>
//             <div ref={quillRef}></div>
//           </div>

//           <div>
//             <button type="submit" disabled={loading}>
//               {loading ? 'Updating...' : 'Update Category'}
//             </button>
//           </div>
//         </form>
//       )}
//       <Link to="/admin/updateExample">
//         <button disabled={loading}>NEXT</button>
//       </Link>
//     </div>
//   );
// };

// export default UpdateCategory;
