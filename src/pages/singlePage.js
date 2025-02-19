import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import SingleHeader from "../components/singleHeader";
import Footer from "../components/footer";
import { FaArrowCircleLeft } from "react-icons/fa";
import DOMPurify from "dompurify";
import Card from "../components/card";
import { storeData, getData } from "../utils/indexedDB";
import AdsterraBanner from "../components/Adsterra"; // 

const PopupEditor = lazy(() => import("../components/popEditor"));

export default function SinglePage() {
  const { theme } = useTheme();
  const { slug } = useParams();
  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchLanguage = async () => {
      const cacheKey = `language-${slug}`;

      const cachedData = await getData(cacheKey);
      if (cachedData) {
        setLanguage(cachedData);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://siitecch.onrender.com/api/languages/${slug}`);
        if (!response.ok) throw new Error("Failed to fetch language");

        const data = await response.json();
        setLanguage(data);
        await storeData(cacheKey, data);
      } catch (error) {
        setErrorMessage("Content Coming Soon...!");
      } finally {
        setLoading(false);
      }
    };

    fetchLanguage();
  }, [slug]);

  useEffect(() => {
    if (language?.categories?.length && window.hljs) {
      setTimeout(() => {
        document.querySelectorAll("pre code").forEach((block) => {
          window.hljs.highlightElement(block);
        });
      }, 300);
    }
  }, [language?.categories]);

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
        <img src="/images/No-Data.svg" alt="No Data Found" className="no-data-image" />
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
        <div className="introduction">
          <h1>{language?.name}</h1>
          <div className="intro-desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language?.description) }}></div>
        </div>

        {/* ✅ Adsterra Banner Placement */}
        <AdsterraBanner />

        <section className="single-container">
          {language?.categories?.map((category) => (
            <Card key={category.id} title={category.name} youtubeUrl={category.video_link}>
              <div className="category-content">
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(category.content) }}></div>
                {category.examples?.map((example, index) => (
                  <div key={index}>
                    <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(example.title) }}></h4>
                    <div>
                      <code dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(example.code) }}></code>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(example.description) }}></div>
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
