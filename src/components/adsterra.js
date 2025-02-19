import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      window.atOptions = {
       'key' : '6a1e732fc686cc4710fbf36262fe2284',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
      };
    `;
    document.body.appendChild(script);

    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.async = true;
    adScript.src = "//www.highperformanceformat.com/6a1e732fc686cc4710fbf36262fe2284/invoke.js";
    document.body.appendChild(adScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(adScript);
    };
  }, []);

  return <div id="adsterra-container" className="adsterra-container"></div>;
};

export default AdsterraBanner;
