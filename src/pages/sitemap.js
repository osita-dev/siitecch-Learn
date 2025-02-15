import Header from "../components/header";

export default function Privacy() {

    return (
        <>
            <Header />
            <section className="privacy">
                <div className="sitemap">
                    <h1>Sitemap</h1>
                    <p>Here is a list of important pages on our website for easy navigation:</p>

                    <ul>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/cookie">Cookie Policy</Link></li>
                        <li><Link to="/terms">Terms of Use</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        <li><Link to="/singlePage">Single Page</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        {/* Add other important links here */}
                    </ul>

                    {/* Optional: Link to the XML Sitemap for Search Engines */}
                    <p>For search engines, you can find our XML Sitemap <a href="/sitemap.xml">here</a>.</p>
                </div>
            </section>

        </>
    )
}    