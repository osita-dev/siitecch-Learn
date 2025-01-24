import Header from "../components/header";
import { useTheme } from "../context/themeContext";
import Card from "../components/card";
import Footer from "../components/footer";

export default function Faq() {
    const { theme } = useTheme();

    return (
        <>
            <Header />
            <section className={`singleDisplay ${theme}`}>
                <div className="introduction">
                    <h1> (FAQ)</h1>
                    <div style={{textAlign: "center"
                    }}>
                        <p>Frequently Asked Questions</p>
                    </div>
                </div>
                <br />

                {/* Card Example 1 */}
                <Card title="What is Siitecch?" >
                    <p>Siitecch is an online learning platform designed to help beginners master full-stack development using JavaScript. It provides a structured pathway to learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL all in one place. The platform aims to simplify the learning experience and make coding accessible to everyone.</p>
                </Card>

                {/* Add more cards as needed */}
                <Card title="Who is Siitecch for?" >
                    <p>Siitecch is for absolute beginners who want to start their coding journey with JavaScript as their core language. It’s also ideal for anyone looking to transition into full-stack development or learn at their own pace with simple, step-by-step guidance.</p>

                </Card>
                <Card title="What can I learn on Siitecch?">
                    <p>On Siitecch, you can learn:</p>
                    <ul>
                        <li>HTML, CSS, and JavaScript (the foundation of web development).</li>
                        <li>Frontend development with React.js.</li>
                        <li>Backend development using Node.js and Express.js.</li>
                        <li>Database management with MySQL.</li>
                        <li>Advanced topics like Web3, blockchain, and cryptocurrency (coming soon).</li>
                    </ul>

                </Card>
                <Card title="How is Siitecch different from other platforms?">
                    <p>Siitecch focuses on a single, streamlined path for beginners who love JavaScript. Unlike other platforms, we:</p>
                    <ul>
                        <li>Avoid scattered information by covering all tools in one place.</li>
                        <li>Use beginner-friendly language to ensure clarity.</li>
                        <li>Provide a mix of text-based tutorials, video explanations, and real-world examples.</li>
                        <li>Database management with MySQL.</li>
                        <li>Offer unique features like offline access and step-by-step coding projects.</li>
                    </ul>

                </Card>
                <Card title="Is Siitecch free?">
                    <p>Yes, Siitecch provides free access to most of its content. We may offer exclusive, advanced features or courses in the future for a small fee, but our core mission is to make learning affordable and accessible to everyone.</p>

                </Card>

                <Card title="What if I’m completely new to coding?">
                    <p>Siitecch is perfect for you! We start from the basics, assuming no prior knowledge. Every topic is broken down into simple steps, with explanations, examples, and videos to help you follow along easily.</p>

                </Card>
                <Card title="How do I create an account on Siitecch?">
                    <p>To create an account:</p>
                    <ul>
                        <li>Click on the Sign Up button on the homepage.</li>
                        <li>Use beginner-friendly language to ensure clarity.</li>
                        <li>Enter your name, email address, and password.</li>
                        <li>Alternatively, you can sign up using your Google account for quick access.</li>
                       
                    </ul>

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
                <Card title="Can I access Siitecch offline?">
                    <p>Yes, Siitecch provide offline access through PWA (Progressive Web App) features. You’ll be able to download content for offline learning.</p>

                </Card>
                <Card title="Does Siitecch support multiple languages?">
                    <p>Multilingual support is in development. Soon, you’ll be able to use a language switcher to learn in your preferred language, such as Igbo, Yoruba, Hausa,and more.</p>

                </Card>
                <Card title="Can I contribute to Siitecch?">
                    <p>Absolutely! We welcome contributors who share our passion for teaching. If you have suggestions, tutorials, or resources you’d like to share, feel free to contact us through our Support page.</p>

                </Card>
                <Card title="Do I need to subscribe to the Siitecch YouTube channel to access content?">
                    <p>No, subscribing to our YouTube channel is not mandatory. However, subscribing allows you to access exclusive tutorials, tips, and in-depth video explanations that complement the platform’s content.</p>

                </Card>
                <Card title="How do I contact Siitecch for support?">
                    <p>You can reach out to us through:</p>
                    <ul>
                        <li>Email: Siitecch@gmail.com</li>
                        <li>The Contact Us page on our website.
                        We’re here to help with any questions or issues you may have.</li>
                    </ul>

                </Card>
                <Card title="Can I use Siitecch on my mobile device?">
                    <p>Yes, Siitecch is fully responsive and works smoothly on mobile devices. We’re also working on a dedicated app for an even better mobile experience.</p>

                </Card>
                <Card title="Will I receive a certificate after completing courses?">
                    <p>Yes! Upon completing certain courses or projects, you’ll receive a certificate of completion to showcase your skills.</p>

                </Card>
                <Card title="What are the future plans for Siitecch?">
                    <p>We’re constantly working to improve Siitecch. Here’s what’s coming next:</p>
                    <ul>
                        <li>More advanced topics like machine learning and blockchain.</li>
                        <li>Community forums for learners to connect and share knowledge.</li>
                        <li>Interactive quizzes and challenges to test your skills.</li>
                    </ul>

                </Card>

            </section>
            <Footer />
        </>
    );
}
