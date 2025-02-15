import { useTheme } from "../context/themeContext";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
export default function Services() {
    const { theme } = useTheme();
    return (
        <>
            <section className="materials">
                <section className="ends">
                    <h3>services</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">

                        <p> Bringing Your Ideas to Life with Design, Development, and Programming</p>
                    </div>

                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaPaintBrush />
                            </div>
                            <div className="image_details">
                                <h2>Web Design</h2>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Craft visually appealing and user-friendly designs that bring ideas to life with creativity and precision.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaCode/>
                            </div>
                            <div className="image_details">
                                <h2>Web Development</h2>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Build fast, scalable, and dynamic websites that deliver seamless user experiences and robust functionality.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaLaptopCode/>
                            </div>
                            <div className="image_details">
                                <h2>Programming</h2>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Master the art of coding with clean, efficient, and maintainable solutions tailored to modern development needs.</p>
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