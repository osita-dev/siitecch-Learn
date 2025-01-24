import { useTheme } from "../context/themeContext"
import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
export default function FeedBackHome() {
    const { theme } = useTheme();
    return (
        <>
            <section className="materials">
                <section className="ends">
                    <h3>Get in Touch with Siitecch</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">

                        <p>We had love to hear from you! Whether you have questions, feedback, or need assistance with your learning journey, feel free to reach out. Our team is here to support and guide you every step of the way. Let’s connect and make your development path even smoother.</p>
                    </div>

                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <IoLocationOutline />
                            </div>
                            <div className="image_details">
                                <h2>Our Location</h2>
                                <p>Africa, Nigeria.</p>
                            </div>
                        </div>

                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaPhone />
                            </div>
                            <div className="image_details">
                                <h2>Phone Number</h2>
                                <p>+2347016361129</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <TfiEmail />
                            </div>
                            <div className="image_details">
                                <h2>Email Address</h2>
                                <p>Siitecch@gmail.com</p>
                            </div>
                        </div>

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