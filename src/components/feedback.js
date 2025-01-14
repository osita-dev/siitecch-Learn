import { useState, useEffect } from "react";

export default function FeedbackPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Check if the popup has already been shown
    useEffect(() => {
        const popupShown = localStorage.getItem("feedbackPopupShown");

        if (!popupShown) {
            // Timer to show the popup after 5 minutes (300000 ms)
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 3600000); // 1 hour

            // Cleanup the timer if the user leaves the page
            return () => clearTimeout(timer);
        }
    }, []);

    // Handle feedback submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Pre-populate the message with user feedback
        const message = `Feedback: ${encodeURIComponent(feedback)}`;

        // Replace '<YOUR_PHONE_NUMBER>' with your WhatsApp number
        const whatsappLink = `https://wa.me/2347016361129?text=${message}`;

        // Open WhatsApp with the feedback message
        window.open(whatsappLink, "_blank");

        // Mark as submitted and store it in localStorage to prevent showing popup again
        setSubmitted(true);
        localStorage.setItem("feedbackPopupShown", "true");
    };

    // Handle cancel/close popup
    const handleCancel = () => {
        setShowPopup(false); // Hide the popup
        setSubmitted(false); // Reset submitted state
    };

    return (
        <>
            {/* Popup before submission */}
            {showPopup && !submitted && (
                <section className="popup">
                    <div className="popup-content">
                        <h2>We value your feedback!</h2>
                        <textarea
                            className="feedText"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Share your thoughts about the Siitecch learning platform."
                        ></textarea>
                        <div className="button-container">
                            <button onClick={handleSubmit}>Submit</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </section>
            )}

            {/* Thank you popup after submission */}
            {showPopup && submitted && (
                <section className="popup">
                    <div className="popup-content">
                        <h2>Thank you for your feedback!</h2>
                        <div className="button-container thankYou">
                            <button onClick={handleCancel}>Close</button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
