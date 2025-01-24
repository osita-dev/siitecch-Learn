import Footer from "../components/footer";
import Header from "../components/header";

export default function Cookie() {

    return (
        <>
            <Header />
            <section className="privacy">
                <div>
                    <h1>Cookie Policy</h1>
                    <p>
                        <strong>Siitecch</strong> uses cookies to enhance your browsing experience, analyze website traffic, and improve our services. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookie usage.
                    </p>

                    <h2>What Are Cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device when you visit a website. They allow the website to remember your actions and preferences over time.
                    </p>

                    <h2>Types of Cookies We Use</h2>
                    <ul>
                        <li>
                            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly, such as managing user sessions and authentication (e.g., JWT tokens or session cookies).
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> Used to track user interactions with the site and gather data to improve performance (e.g., Google Analytics).
                        </li>
                        <li>
                            <strong>Preferences Cookies:</strong> Store user preferences like dark/light mode or selected languages.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> These cookies may be used to show relevant ads and track their performance.
                        </li>
                        <li>
                            <strong>Third-Party Cookies:</strong> Cookies set by services we integrate, such as YouTube or Google Sign-In.
                        </li>
                    </ul>

                    <h2>Your Choices</h2>
                    <p>
                        You can control cookie usage by customizing your preferences in the cookie popup or through your browser settings. Please note that disabling certain cookies may affect your experience on the site.
                    </p>

                    <h2>Third-Party Cookies</h2>
                    <p>
                        We may use cookies set by third-party services to provide additional functionality, such as:
                    </p>
                    <ul>
                        <li>
                            <strong>Google Analytics:</strong> For analyzing website traffic and user behavior.
                        </li>
                        <li>
                            <strong>Google OAuth:</strong> For user authentication via Google.
                        </li>
                        <li>
                            <strong>YouTube:</strong> For embedding video content.
                        </li>
                    </ul>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Cookie Policy, contact us at <a href="mailto:siitecch@gmail.com">siitecch@gmail.com</a>.
                    </p>
                </div>

            </section>
            <Footer/>
        </>
    )
}