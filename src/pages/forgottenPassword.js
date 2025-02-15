import { useState } from "react";
import Header from "../components/header";
import { useTheme } from "../context/themeContext";
import { toast } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

export default function Forgot() {
    const { theme } = useTheme();
    const [email, setEmail] = useState(""); // State to store email input

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }), // Sending the email in the body
            });

            const data = await response.json();

            if (response.ok) {
                // Show success toast
                toast.success(data.message || "Password reset link sent successfully.");
            } else {
                // Show error toast
                toast.error(data.error || "Something went wrong.");
            }
        } catch (error) {
            // Show network error toast
            toast.error("Something went wrong with the request.");
        }
    };

    return (
        <>
            <Header />
            <form className={`user ${theme}`} onSubmit={handleSubmit}>
                <img src="images/login.svg" alt="Login logo" />
                <p style={{ textAlign: 'left', padding: '10px 5px' }}>
                    Enter your email and we will send you instructions to reset your password.
                </p>
                <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="inputStyle"
                    value={email} // Bind the email state to the input
                    onChange={(e) => setEmail(e.target.value)} // Update state on input change
                    required
                />

                <input
                    type="submit"
                    value="Send Email"
                    className="inputStyle btn"
                />
                <p style={{ textAlign: 'left', padding: '10px' }}>
                    Do Not Sell My Personal Information.
                </p>
            </form>

            
        </>
    );
}
