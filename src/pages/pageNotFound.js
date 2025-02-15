import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function PageNotFound() {
    const { theme } = useTheme();


    return (
        <>
            <section className={`profile ${theme}`}>
                <div className="profile-404">
                    <img src="images/notfound.svg" alt="404 page not found" />
                    <h2>PAGE NOT FOUND</h2>
                    <button className="backtophome"><Link to="/" className="backtophome"><FaArrowCircleLeft className="span"/><span>Home</span></Link></button>
                </div>

            </section>
        </>
    )



}