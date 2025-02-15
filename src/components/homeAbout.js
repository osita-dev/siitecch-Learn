import {FaCheck} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HomeAbout() {

    return (
        <>
            <section className="materials">
                <section className="ends">
                    <h3>More About Us</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>
                <section className="flex-container about">
                    <div className="aboutUs head">
                        <h1>SIITECCH</h1>
                        <p> Siitecch is a focused learning platform designed to
                            guide aspiring developers in mastering full-stack development using JavaScript, offering a clear, step-by-step path from frontend to backend all in one place.</p>
                    </div>
                    <div className="about_feature">
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Step-by-Step Learning Path.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Frontend to Backend in One Place.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Clear, Beginner-Friendly Content.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Practical Projects and Real Examples.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">No Scattered Resources.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Stay Motivated and On Track.</div>
                        </div>
                    </div>
                    <div style={{margin: "10px 0"}}>
                        <Link to="/about" className="link">see more...</Link>
                    </div>
                    <section className="code_image">
                        <img src="images/code_pic.webp" alt="code_picture" />
                        <img src="images/code_pic1.webp" alt="code_picture2" />
                    </section>
                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>
        </>
    )
}