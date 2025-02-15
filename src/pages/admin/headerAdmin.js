import { Link } from 'react-router-dom';


export default function HeaderAdmin() {

    return (
        <header className="navbar">
            <div className="logo">

                <Link to="/admin" style={{ textDecoration: 'none' }}><h2>SIITECCH</h2></Link>
            </div>
           <div className="admin">
                <Link to="/admin" style={{ textDecoration: 'none' }}><h2>Admin</h2></Link>
                <Link to="/admin/languages" style={{ textDecoration: 'none' }}><h2>Add Languages</h2></Link>
                <Link to="/admin/categories" style={{ textDecoration: 'none' }}><h2>Add categories</h2></Link>
                <Link to="/admin/allcategory" style={{ textDecoration: 'none' }}><h2>Update categories</h2></Link>
                <Link to="/admin/videos" style={{ textDecoration: 'none' }}><h2>Add video</h2></Link>

           </div>
        </header >
    );
}
