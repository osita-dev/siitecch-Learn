import { useTheme } from "../context/themeContext";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Quickref from "./quickref";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  // Social media and external links
  const youTube = "https://youtube.com/@siitecch?si=ngX7lFMF0IWnU8X0";
  const faceBook = "https://web.facebook.com/profile.php?id=100076062997043";
  const Twitter = "https://x.com/siitecch";
  const linkedIn = "https://www.linkedin.com/in/christopher-osita-46b4b6202/";
  const GitHub = "https://github.com/osita-dev";

  // State for PWA install prompt
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  // Check if the app is installed
  const checkAppInstallation = () => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      navigator.standalone;

    if (isStandalone) {
      setIsAppInstalled(true);
      localStorage.setItem("isAppInstalled", "true");
    } else {
      setIsAppInstalled(false);
      localStorage.removeItem("isAppInstalled");
    }
  };

  // Browser compatibility check
  const checkBrowserCompatibility = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      alert("PWA installation is not available on iOS at the moment.");
      return false;
    }

    if (userAgent.includes("chrome")) {
      const chromeVersion = parseInt(
        userAgent.match(/chrome\/(\d+)/)?.[1] || "0",
        10
      );
      if (chromeVersion < 76) {
        alert(
          "Your Chrome browser version is outdated. Please update to the latest version to install the app."
        );
        return false;
      }
      return true;
    }

    alert("Your browser is not supported for PWA installation.");
    return false;
  };

  // Handle PWA installation
  const handleInstall = () => {
    if (!checkBrowserCompatibility()) return;

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          setIsAppInstalled(true);
          localStorage.setItem("isAppInstalled", "true");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    } else {
      alert("App installation is not available at the moment.");
    }
  };

  // Effect to handle PWA events
  useEffect(() => {
    checkAppInstallation();

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      console.log("App successfully installed!");
      setIsAppInstalled(true);
      localStorage.setItem("isAppInstalled", "true");
    };

    const handleFocus = () => {
      checkAppInstallation();
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
  return (
    <>
      <footer className={`footer ${theme}`}>
        <div className="site-name"></div>
        <div className="about-page">
          <div className="about-write"></div>
        </div>
        <div className="footer-link">
          <div className="contact">Link Up With Us</div>
          <div className="socials">
            <button
              onClick={() =>
                window.open(GitHub, "_blank", "noopener,noreferrer")
              }
            >
              <FaGithub style={{ color: "#070B15", fontSize: "25px" }} />
            </button>
            <button
              onClick={() =>
                window.open(youTube, "_blank", "noopener,noreferrer")
              }
            >
              <FaYoutube style={{ color: "#ff0000", fontSize: "25px" }} />
            </button>
            <button
              onClick={() =>
                window.open(linkedIn, "_blank", "noopener,noreferrer")
              }
            >
              <FaLinkedin style={{ color: "#4D9FEB", fontSize: "25px" }} />
            </button>
            <button
              onClick={() =>
                window.open(Twitter, "_blank", "noopener,noreferrer")
              }
            >
              <FaTwitter style={{ color: "#4D9FEB", fontSize: "25px" }} />
            </button>
            <button
              onClick={() =>
                window.open(faceBook, "_blank", "noopener,noreferrer")
              }
            >
              <FaFacebook style={{ color: "#4D9FEB", fontSize: "25px" }} />
            </button>
          </div>
          <div className="help">
            <div className="page-links">
              <Link to="/" className="linked">
                Home
              </Link>
            </div>
            <div className="page-links">
              <Link to="/support" className="linked">
                Support
              </Link>
            </div>
            <div className="page-links">
              <Link to="/about" className="linked">
                About Us
              </Link>
            </div>
            <div className="page-links">
              <Link to="/faq" className="linked">
                FAQ
              </Link>
            </div>
            <div className="page-links">
              <Link to="/developer" className="linked">
                About Developer
              </Link>
            </div>
            <Quickref />

            <div className="copy" />
            <div className="page-links">
              <Link to="/privacy" className="linked">
                Privacy Policy
              </Link>
            </div>
            <div className="page-links">
              <Link to="/terms" className="linked">
                Terms of Service
              </Link>
            </div>
            <div className="page-links">
              <Link to="/cookie" className="linked">
                Cookie Policy
              </Link>
            </div>
            <div className="copy" />

            <div className="page-links">
              <Link to="/sitemap" className="linked">
                Sitemap
              </Link>
            </div>
            <button
              className="install-app"
              onClick={handleInstall}
              disabled={isAppInstalled}
            >
              {isAppInstalled ? "App Already Installed" : "Download App"}
            </button>
          </div>
          <div className="globe">
            <FaGlobe />
            <span>English</span>
          </div>
        </div>
        <div className="copy">
          &copy; {new Date().getFullYear()} siitecch, All rights reserved.
        </div>
      </footer>
    </>
  );
}
