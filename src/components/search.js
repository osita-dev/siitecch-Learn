import { FaSearch, FaTimes } from 'react-icons/fa';
export default function Search() {


    return (
        <>
            <header className="navbar search">
                <section className="logo">
                    <section className="image"><FaSearch style={{ color: '#10B981', fontSize: '25px' }} /></section>
                    <input type="text" placeholder="Search...." className="inputSearch"/> 
                </section>
                <section className="social-handle">
                    <button className="button-hover times">
                        <FaTimes style={{ fontSize: '25px' }} />
                    </button>
                </section>
            </header>
        </>
    );
};