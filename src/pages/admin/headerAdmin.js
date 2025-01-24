import { Link } from 'react-router-dom';


export default function HeaderAdmin() {

    return (
        <header className="navbar">
            <div className="logo">

                <Link to="/" style={{ textDecoration: 'none' }}><h2>SIITECCH</h2></Link>
            </div>
            <div className="social-handle">
               
            </div>
        </header >
    );
}
