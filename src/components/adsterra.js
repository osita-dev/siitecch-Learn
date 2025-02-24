import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    // Define Adsterra ad settings
    window.atOptions = {
      key: "10ff9d2a16eeb48f638d8af08b400d8f",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    // Create the iframe dynamically
    const adFrame = document.createElement("iframe");
    adFrame.src = `https://www.adsterra.com/script/${window.atOptions.key}`;
    adFrame.style.width = `${window.atOptions.width}px`; // Set width from atOptions
    adFrame.style.height = `${window.atOptions.height}px`; // Set height from atOptions
    adFrame.style.border = "none";
    adFrame.style.position = "fixed";
    adFrame.style.bottom = "0";
    adFrame.style.left = "50%";
    adFrame.style.transform = "translateX(-50%)"; // Center it horizontally
    adFrame.style.zIndex = "9999";

    document.getElementById("adsterra-banner").appendChild(adFrame);

    // Load the external Buttergem script
    const adScript = document.createElement("script");
    adScript.src = "//buttergem.com/6a1e732fc686cc4710fbf36262fe2284/invoke.js";
    adScript.async = true;
    document.body.appendChild(adScript);

    // Cleanup function to remove elements on unmount
    return () => {
      document.getElementById("adsterra-banner").innerHTML = "";
      document.body.removeChild(adScript);
    };
  }, []);

  return <div id="adsterra-banner" style={{ width: "100%", position: "fixed", bottom: 0, left: 0, zIndex: 9999 }} />;
};

export default AdsterraBanner;
