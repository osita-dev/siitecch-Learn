import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import SingleHeader from "../components/singleHeader";
import Footer from "../components/footer";
import { FaArrowCircleLeft } from "react-icons/fa";
import DOMPurify from "dompurify";
import Card from "../components/card";

export default function SinglePage() {
    const { theme } = useTheme();
    const { slug } = useParams();
    const [language, setLanguage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchLanguage = async () => {
            try {
                const response = await fetch(`https://siitecch.onrender.com/api/languages/${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch language');
                }
                const data = await response.json();
                setLanguage(data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error.message);
                setErrorMessage('Failed to fetch language details.');
                setLoading(false);
            }
        };

        fetchLanguage();
    }, [slug]);

    if (loading) {
        return (
            <div className="loader">
<<<<<<< HEAD
            <div className="load">SIITECCH</div>
          </div>
=======
                <div className="load">SIITECCH</div>
            </div>
>>>>>>> 8853562 (added more functions)
        );
    }

    if (errorMessage) {
        return (
            <div className="no-data-container">
                <img
                    src="/images/No-Data.svg"
                    alt="No Data Found"
                    className="no-data-image"
                />
                <p>{errorMessage}</p>
                <Link to="/"><button className="buttonback"><FaArrowCircleLeft /></button></Link>
            </div>
        );
    }

    return (
        <>
            <SingleHeader />
            <section className={`singleDisplay ${theme}`}>
                {/* Introduction Section */}
                <div className="introduction">
                    <h1>{language?.name}</h1>
                    <div
                        className="javaScript"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language?.description) }}
                    ></div>
                </div>

                <section className="single-container">
                    {language?.categories?.map((category) => (
                        <Card
                            key={category.id} // Ensure unique ID
                            title={category.name}
                            youtubeUrl={category.video_link}
                        >
                            <div className="category-content">
                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(category.content), }}
                                ></div>
                                {category.examples?.map((example, index) => (
                                    <div key={index}>
                                        <h4 dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(example.title),
                                        }}></h4>
                                        <div><code dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(example.code),
                                        }}></code></div>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(example.description),
                                            }}
                                        ></div>
                                    </div>
                                ))}
                            </div>

                        </Card>
                    ))}
                </section>
            </section>
            <Footer />
        </>
    );
}
