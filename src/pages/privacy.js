import Footer from "../components/footer";
import Header from "../components/header";

export default function Privacy() {

    return (
        <>
        <Header />
            <section className="privacy">
            <div>
                    <h1>Privacy Policy</h1>
                    <p>
                        Welcome to <strong>Siitecch</strong>. Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.
                    </p>

                    <h2>What We Collect</h2>
                    <ul>
                        <li>
                            <strong>User Authentication:</strong> Information you provide when signing up, including your name, email address, and any data shared during Google authentication.
                        </li>
                        <li>
                            <strong>Analytics Data:</strong> Information about how you interact with our website (e.g., pages visited, time spent) using tools like Google Analytics.
                        </li>
                        <li>
                            <strong>Cookies:</strong> Small data files stored on your device to remember preferences, improve your experience, and analyze user behavior.
                        </li>
                        <li>
                            <strong>Preferences:</strong> Information about your site preferences, such as dark/light mode or selected languages.
                        </li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To personalize your experience on Siitecch.</li>
                        <li>To improve our website based on analytics data.</li>
                        <li>To ensure a secure and functional user authentication process.</li>
                        <li>To comply with legal obligations where required.</li>
                    </ul>

                    <h2>Your Rights</h2>
                    <p>
                        You can control the data we collect by customizing your cookie preferences and managing your account settings. You also have the right to request access, correction, or deletion of your personal data.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:siitecch@gmail.com">siitecch@gmail.com</a>.
                    </p>
                </div>

            </section>
            <Footer/>
        </>
    )
}