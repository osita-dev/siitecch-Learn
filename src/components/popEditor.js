import React, { useState, useEffect, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { FaEdit } from "react-icons/fa";

const PopupEditor = () => {
    const storedCode = localStorage.getItem("editorCode");
    const storedPreview = localStorage.getItem("editorPreview");
    const storedPopup = localStorage.getItem("popupState") === "true";

    const [showPopup, setShowPopup] = useState(storedPopup);
    const [code, setCode] = useState(
        storedCode ||
        `<!DOCTYPE html>
<html>
<head>
  <style>body { font-family: Arial; }</style>
</head>
<body>
  <h2>Hello, Siitecch!</h2>
  <script>console.log("JS works!")</script>
</body>
</html>`
    );
    const [previewContent, setPreviewContent] = useState(storedPreview || code);

    // Function to update the iframe & store preview in localStorage
    const updatePreview = useCallback(() => {
        setPreviewContent(code);
        localStorage.setItem("editorPreview", code);
    }, [code]);

    // Store code in localStorage when changed
    useEffect(() => {
        localStorage.setItem("editorCode", code);
    }, [code]);

    // Store popup state in localStorage
    useEffect(() => {
        localStorage.setItem("popupState", showPopup);
    }, [showPopup]);

    // Function to handle close button click
    const handleClose = () => {
        setShowPopup(false);
        localStorage.removeItem("popupState"); // Remove the popup state from localStorage
    };

    return (
        <div>
            {/* Button to open the popup */}
            <button
                onClick={() => setShowPopup(true)}
                style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    fontSize: "20px",
                    cursor: "pointer",
                    zIndex: 1000,
                }}
            >
                <FaEdit />
            </button>

            {/* Popup Editor */}
            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            width: "100%",
                            maxWidth: "800px",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            style={{
                                alignSelf: "flex-end",
                                background: "red",
                                color: "#fff",
                                border: "none",
                                padding: "5px 10px",
                                cursor: "pointer",
                            }}
                        >
                            X
                        </button>

                        {/* Preview Area */}
                        <iframe
                            id="preview"
                            title="Live Code Preview"
                            style={{
                                width: "100%",
                                height: "30%",
                                border: "1px solid #ccc",
                                background: "#fff",
                            }}
                            srcDoc={previewContent} // Uses stored preview content
                        ></iframe>

                        {/* Code Editor */}
                        <CodeMirror
                            value={code}
                            height="300px"
                            extensions={[html(), css(), javascript()]}
                            onChange={(value) => setCode(value)}
                            style={{ flexGrow: 1 }}
                        />

                        {/* Run Button */}
                        <button
                            onClick={updatePreview}
                            style={{
                                background: "#3B82F6",
                                color: "#fff",
                                border: "none",
                                padding: "10px",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginTop: "10px",
                            }}
                        >
                            Run
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupEditor;
