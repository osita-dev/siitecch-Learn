// src/components/Ping.js
import { useEffect } from "react";

const Ping = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Ping your backend every 5 minutes to keep the DB alive
      fetch("https://siitecch.onrender.com/api/ping")
        .then((response) => response.text())
        .then((data) => {
          console.log(data); // Logs "Database connection is active"
        })
        .catch((error) => {
          console.error("Error pinging database:", error);
        });
    }, 4 * 60 * 1000); // 2 minutes in milliseconds

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything, just handles the background task
};

export default Ping;
