import { useTheme } from "../context/themeContext";
import { MdOutlineHorizontalRule } from "react-icons/md";
import {FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Ack() {
    const { theme } = useTheme();
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalVideos, setTotalVideos] = useState(0);

    useEffect(() => {
        async function fetchUserCount() {
            try {
                const response = await fetch('https://siitecch.onrender.com/api/users/count'); // Adjust base URL if needed
                const data = await response.json();
                setTotalUsers(data.totalUsers);

                const videoResponse = await fetch('https://siitecch.onrender.com/count-videos');
                const videoData = await videoResponse.json();
                setTotalVideos(videoData.totalVideos);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        }
        fetchUserCount();
    }, []);
    return (
        <>
            <section className="materials">
                <section className="ends">
                    <h5>Acknowledgments</h5>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">

                        <p>Acknowledging My Supporters and Mentors</p>
                    </div>

                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGG2QFJr5--bg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703783922744?e=1739404800&v=beta&t=_HXQc_EjRWGIX5Lrw_X_dY3wdpl9VtDwtJrxXUcVaZA" alt="Chidiebere Vincent Christopher" />
                            <div className="image_details">
                                <h2>Christopher Vincent</h2>
                                <p>Digital Payment || Data Science || Finance || Consulting.</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>I am proud of what you are doing.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQEKqAJXtxT05Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1733003547293?e=1739404800&v=beta&t=uyCnDOIAJscpmR-ISWJo9pnl5ODGSCgi6Z1JoCZOsVE" alt="Odii Daniel" />
                            <div className="image_details">
                                <h2>Odii Daniel</h2>
                                <p>Backend developer • Building SAAS for individuals, startups and organizations</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Bravo christopher osita, you really did put in a lot to see this particular moment come true;
                                We are stoked and ready to know what’s next!
                                Learn web dev?
                                Learn from Siitecch!</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4E03AQFOXRnDY_lf3g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720720951633?e=1739404800&v=beta&t=_SWpUOrk9ae1a580CnJxLSrej73GLRDNcknp-MtA5cw" alt="Solomon Milan" />
                            <div className="image_details">
                                <h2>Solomon Mlan</h2>
                                <p>CEO Cypress | Digital Marketer | Web Developer | SEO Specialist | Speaker.</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>You’re doing great! Keep soaring high.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFtJwktPB8QOg/profile-displayphoto-shrink_100_100/B4DZQ6zxqaHUAY-/0/1736153449571?e=1743033600&v=beta&t=3ubnjg__RPxFJak922q0OuaDEl2tHAlKd9sKjN8346E" alt="Chibuike christopher" />
                            <div className="image_details">
                                <h2>Chibuike Christopher</h2>
                                <p>Data Analyst | Banking & Finance Building predictive models for customer churn</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>I am so excited to join Siitecch, it is one of my goals to build a website, siitecch has made that very easy and understandable for me.</p>
                        </div>
                    </div>

                </section>
                <section className="total-students">
                    <div className="single">
                        <div className="figure">{totalUsers}+</div>
                        <div className="line"><MdOutlineHorizontalRule /></div>
                        <div className="">Students</div>
                    </div>
                    <div className="single">
                        <div className="figure">{totalVideos}</div>
                        <div className="line"><MdOutlineHorizontalRule /></div>
                        <div className="">Videos</div>
                    </div>
                    <div className="single">
                        <div className="figure">0</div>
                        <div className="line"><MdOutlineHorizontalRule /></div>
                        <div className="">Projects</div>
                    </div>
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