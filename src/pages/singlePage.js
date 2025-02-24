import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import SingleHeader from "../components/singleHeader";
import Footer from "../components/footer";
import { FaArrowCircleLeft } from "react-icons/fa";
import DOMPurify from "dompurify";
import Card from "../components/card";
import { storeData, getData } from "../utils/indexedDB";
const PopupEditor = lazy(() => import("../components/popEditor"));

export default function SinglePage() {
    const { theme } = useTheme();
    const { slug } = useParams();
    const [language, setLanguage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchLanguage = async () => {
            const cacheKey = `language-${slug}`; // Unique key for caching per slug

            // Check IndexedDB for cached data
            const cachedData = await getData(cacheKey);
            if (cachedData) {
                setLanguage(cachedData);
                setLoading(false);
                console.log("Loaded language from cache");
                return;
            }

            // Fetch from API and cache the result
            try {
                const response = await fetch(`https://siitecch.onrender.com/api/languages/${slug}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch language");
                }
                const data = await response.json();
                setLanguage(data);
                await storeData(cacheKey, data); // Cache data in IndexedDB
                console.log("Fetched language from API and cached");
            } catch (error) {
                console.error("Error:", error.message);
                setErrorMessage("Content Coming Soon...!");
            } finally {
                setLoading(false);
            }
        };

        fetchLanguage();
    }, [slug]);

    useEffect(() => {
        if (language?.categories?.length && window.hljs) { //  Ensure hljs exists & categories are loaded
            setTimeout(() => {
                document.querySelectorAll("pre code").forEach((block) => {
                    window.hljs.highlightElement(block); //  Apply syntax highlighting
                });
            }, 300); // Increased delay to ensure content is fully loaded
        }
    }, [language?.categories]); // Trigger effect when categories change


    if (loading) {
        return (
            <div className="loadertotal">
                <div className="loadtotal"></div>
            </div>
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
                <Link to="/">
                    <button className="buttonback">
                        <FaArrowCircleLeft />
                    </button>
                </Link>
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
                        className="intro-desc"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(language?.description),
                        }}
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
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(category.content),
                                    }}
                                ></div>
                                {category.examples?.map((example, index) => (
                                    <div key={index}>
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(example.title),
                                            }}
                                        ></h4>
                                        <div>
                                            <code
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(example.code),
                                                }}
                                            ></code>
                                        </div>
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
            <Suspense fallback={<div>Loading...</div>}>
                <PopupEditor />
            </Suspense>
        </>
    );
}
