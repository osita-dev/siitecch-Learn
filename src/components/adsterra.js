import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      window.atOptions = {
        key: "10ff9d2a16eeb48f638d8af08b400d8f",
        format: "iframe",
        height: 90,
        width: 728,
        params: {}
      };
    `;
    document.body.appendChild(script);

    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.async = true;
    adScript.src = "//buttergem.com/6a1e732fc686cc4710fbf36262fe2284/invoke.js";
    document.body.appendChild(adScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(adScript);
    };
  }, []);

  return <div id="adsterra-container"></div>;
};

export default AdsterraBanner;
