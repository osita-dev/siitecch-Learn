import {
    SiCss3,
    SiDatabricks,
    SiExpress,
    SiGit,
    SiGooglechrome,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNodedotjs,
    SiReact,
    SiVisualstudiocode
} from "react-icons/si";
import { Link } from "react-router-dom";
import { FaGlobeAfrica, FaPlayCircle } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function FrontBack() {
    const { theme } = useTheme();
    const [showVideo, setShowVideo] = useState(false);
    const { isAuthenticated } = useAuth();

    const openVideo = () => setShowVideo(true);
    const closeVideo = () => setShowVideo(false);
    return (
        <>
            <nav className={`navbar ${theme}`}>
                <div className="nav2">
                    <h1>Master Full-stack Development with JavaScript! </h1>
                    <p>From Frontend to Backend, Everything You Need in One Place, perfect for Those who Love JavaScript.</p>
                    <img src="images/programing.svg" alt="" />

                </div>
                <div className="bottomBtn">
                    {isAuthenticated ? (
                        <button className="start-learning-btn">
                            <a
                                href="https://www.youtube.com/@siitecch"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", textDecoration: "none", fontSize: "12px", }}
                            >

                                YouTube Channel
                            </a>
                        </button>
                    ) : (
                        <button>
                            <Link to="register" className="link">Get Started</Link>
                        </button>
                    )}
                    <button className="playbtn" onClick={openVideo}>
                        <FaPlayCircle style={{ fontSize: '25px' }} /> &nbsp;&nbsp;
                        <span style={{ fontSize: '12px' }}> Play Video</span>
                    </button>
                </div>
            </nav>
            {/* Video Popup Modal */}
            {showVideo && (
                <div className="video-modal">
                    <div className="video-content">
                        <button className="close-btn" onClick={closeVideo}>✖</button>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ag2vykk9r1I?si=2h43tlTmiTi51YmT"
                            title="Siitecch Introduction Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
            <br></br>
            <section className="materials">
                <section className="ends">
                    <h3>Tools</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className="flex-container">
                    <button className="language vs"><Link to="/language/vscode" className="button-link"><SiVisualstudiocode className="proIcon" />&nbsp;VsCode</Link></button>
                    <button className="language ch"><Link to="/language/browser" className="button-link"><SiGooglechrome className="proIcon" />&nbsp;Browser</Link></button>
                    {/* <button className="language btn"></button>                 */}
                </section>
            </section>
            <section className="materials">
                <section className="ends">
                    <h3>Frontend</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className="flex-container">
                    <button className="language overview"><Link to="/language/overview" className="button-link"><FaGlobeAfrica className="proIcon" />&nbsp;Overview</Link></button>
                    <button className="language html"><Link to="/language/html" className="button-link"><SiHtml5 className="proIcon" />&nbsp;HTML</Link></button>
                    <button className="language css"><Link to="/language/css" className="button-link"><SiCss3 className="proIcon" /> &nbsp;CSS</Link></button>
                    <button className="language git"><Link to="/language/git" className="button-link"><SiGit className="proIcon" /> &nbsp;Git & GitHub</Link></button>
                    <button className="language js"><Link to="/language/javascript" className="button-link"><SiJavascript className="proIcon" /> &nbsp; JavaScript</Link></button>
                    <button className="language rjs"><Link to="/language/react" className="button-link"><SiReact className="proIcon" />&nbsp;ReactJS</Link></button>
                </section>
            </section>
            <section className="materials">
                <section className="ends">
                    <h3>Backend</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>
                <section className="flex-container">
                    <button className="language node"><Link to="/language/node" className="button-link"><SiNodedotjs className="proIcon" />&nbsp;NodeJS</Link></button>
                    <button className="language ex"><Link to="language/express" className="button-link"><SiExpress className="proIcon" /> &nbsp;ExpressJS</Link></button>
                    <button className="language db"><Link to="language/sql" className="button-link"><SiDatabricks style={{ fontSize: '20px' }} className="proIcon" /> &nbsp;Sql</Link></button>
                    <button className="language db"><Link to="language/mysqldb" className="button-link"><SiMysql style={{ fontSize: '30px' }} className="proIcon" /> &nbsp;MySql DB</Link></button>
                    <button className="language mo"><Link to="language/mongoose" className="button-link"><SiMongoose style={{ fontSize: '30px' }} className="proIcon" /> &nbsp;Mongoose</Link></button>
                    <button className="language modb"><Link to="language/mongodb" className="button-link"><SiMongodb style={{ fontSize: '30px' }} /> &nbsp;MongoDB</Link></button>
                    <button className="language btn"></button>
                </section>

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