import { Link } from "react-router-dom";
import Card from "../components/card";
import { useTheme } from "../context/themeContext";
export default function Question() {
    const { theme } = useTheme();
    return (
        <>
            <section className="materials">
                <section className="ends">
                    <h3>Have a question? Check out the FAQ</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>


                    <Card title="What is Siitecch?">
                        <p>Siitecch is an online learning platform designed to help beginners master full-stack development using JavaScript. It provides a structured pathway to learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL all in one place. The platform aims to simplify the learning experience and make coding accessible to everyone.</p>
                    </Card>
                    <Card title="Is Siitecch free?">
                        <p>Yes, Siitecch provides free access to most of its content. We may offer exclusive, advanced features or courses in the future for a small fee, but our core mission is to make learning affordable and accessible to everyone.</p>
                    </Card>
                    <Card title="What is the best way to use Siitecch?">
                        <p>To get the most out of Siitecch:</p>
                        <ul>
                            <li>Start with the beginner-friendly courses like HTML, CSS, and JavaScript.</li>
                            <li>Follow the recommended learning path for full-stack development.</li>
                            <li>Practice with the real-world coding examples and projects provided</li>
                            <li>Watch video tutorials for additional clarity.</li>
                        </ul>

                    </Card>
                    <Card title="How do I contact Siitecch for support?">
                        <p>You can reach out to us through:</p>
                        <ul>
                            <li>Email: ositakizito4@gmail.com</li>
                            <li>The Contact Us page on our website.
                                We’re here to help with any questions or issues you may have.</li>
                        </ul>

                    </Card>
                    <Link to="/faq" className="link">See more...</Link>
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