import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    // Create the iframe
    const adFrame = document.createElement("iframe");
    adFrame.src = `https://www.adsterra.com/script/6a1e732fc686cc4710fbf36262fe2284`;
    adFrame.style.width = "100vw"; // Full width
    adFrame.style.height = "50px";
    adFrame.style.border = "none";
    adFrame.style.position = "fixed";
    adFrame.style.bottom = "0";
    adFrame.style.left = "0";
    adFrame.style.zIndex = "9999";

    document.getElementById("adsterra-banner").appendChild(adFrame);

    // Load the external Buttergem script
    const adScript = document.createElement("script");
    adScript.src = "//buttergem.com/6a1e732fc686cc4710fbf36262fe2284/invoke.js";
    adScript.async = true;
    document.body.appendChild(adScript);

    // Cleanup on unmount
    return () => {
      document.getElementById("adsterra-banner").innerHTML = "";
      document.body.removeChild(adScript);
    };
  }, []);

  return <div id="adsterra-banner" style={{ width: "100%", position: "fixed", bottom: 0, left: 0, zIndex: 9999 }} />;
};

export default AdsterraBanner;
