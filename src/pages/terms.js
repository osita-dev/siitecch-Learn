import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
export default function Terms() {

    return (
        <>
            <Header />
            <section className="privacy">
                <h1>Introduction</h1>
                <p>
                    Welcome to <strong>Siitecch!</strong> These Terms of Service ("Terms") govern your use of our platform and services.
                    By accessing or using Siitecch, you agree to these Terms, including any updates. If you do not agree with these Terms, please do not use our platform.
                </p>

                <h2>Services Provided</h2>
                <p>
                    Siitecch is an online platform that offers educational content for learning full-stack development,
                    including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL. The platform also provides video tutorials, documentation, quizzes, and projects to help users advance their skills.
                </p>

                <h2>Eligibility</h2>
                <p>To use Siitecch, you must:</p>
                <ul>
                    <li>Be at least 13 years old or have the legal capacity to enter into a contract in your jurisdiction.</li>
                    <li>Agree to comply with all applicable laws and regulations.</li>
                </ul>
                
                <p>If you are under 13 years old, please do not attempt to access or use the platform.</p>
                <h2>Account Registration</h2>
                <p>
                    In order to access certain features of Siitecch, you may be required to create an account.
                    You must provide accurate and complete information during the registration process and are responsible for maintaining the confidentiality of your account details, including your password.
                </p>
                <ul>
                    <li>You must notify Siitecch immediately if you suspect any unauthorized use of your account.</li>
                    <li>You are responsible for all activities that occur under your account, whether or not you authorized them.</li>
                </ul>
                <h2>User Conduct</h2>
                <p>
                    By using Siitecch, you agree not to engage in any of the following activities:
                </p>
                <ul>
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Posting or sharing harmful, offensive, or inappropriate content.</li>
                    <li>Attempting to disrupt or interfere with the operation of the platform.</li>
                    <li>Using the platform to impersonate any person or entity.</li>
                </ul>

                <h2>Content Ownership</h2>
                <ul>
                    <li><strong>Siitecch Content:</strong> All content provided on Siitecch, including text, videos, code samples, and other educational materials,
                        is owned by Siitecch or its content creators. You may access and use this content for personal, non-commercial purposes only.</li>
                    <li><strong>User Content:</strong> By submitting any content to Siitecch (e.g., forum posts, code submissions), you grant Siitecch a non-exclusive,
                        worldwide, royalty-free license to use, display, and distribute your content on the platform.</li>
                </ul>
                <h2>Termination</h2>
                <p>Siitecch reserves the right to suspend or terminate your account for any reason, including if you violate these Terms.
                    You may also terminate your account at any time by contacting us. Upon termination, you will lose access to certain services.
                </p>
                <h2> Privacy and Data Collection</h2>
                <p>
                    Your use of Siitecch is subject to our <Link to="/privacy">Privacy Policy</Link>.
                    This document explains how we collect, use, and protect your personal information.
                </p>
                <h2>Disclaimers and Limitations of Liability</h2>
                <li><strong>No Warranty:</strong> Siitecch provides the platform and services "as is" without any
                    warranties or representations, express or implied.</li>
                <li><strong>Limitation of Liability:</strong> Siitecch is not liable for any damages,
                    losses, or expenses arising from your use of the platform, including but not limited to any errors or interruptions in service.</li>
                <p>You agree to use Siitecch at your own risk, and we do not guarantee that the platform will always be available or error-free.</p>

                <h2>Changes to Terms </h2>
                <p> Siitecch may update these Terms from time to time. We will notify you of any changes by updating the "Last Updated"
                    date at the top of this document. It is your responsibility to review these Terms periodically for updates.</p>

                <h2>Governing Law </h2>
                <p>These Terms are governed by and construed in accordance with the laws of your jurisdiction,
                    and any disputes will be resolved in the courts of that jurisdiction.</p>

                <h2> Contact Information </h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <li>Email: siitecch@gmail.com</li>
                <li>Phone: +2347016361129</li>

                <h2> Acceptance of Terms</h2>
                <p>By using Siitecch, you acknowledge that you have read,
                     understood, and agree to abide by these Terms of Service. If you do not agree with any part of these Terms, you should discontinue using Siitecch immediately.</p>



            </section>
            <Footer/>
        </>
    )
}