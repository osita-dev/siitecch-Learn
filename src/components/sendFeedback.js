import { useTheme } from "../context/themeContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SendFeedBack() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for message character count
  const [charCount, setCharCount] = useState(0);

  // Character limit for message
  const MAX_CHARS = 200;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict name input to 20 characters
    if (name === "name" && value.length > 20) {
      toast.warning("Name should not exceed 20 characters");
      return;
    }

    // Restrict message input to 200 characters
    if (name === "message") {
      if (value.length > MAX_CHARS) {
        toast.warning(`Message should not exceed ${MAX_CHARS} characters`);
        return;
      }
      setCharCount(value.length); // Update character count
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://siitecch.onrender.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send feedback");
      }

      toast.success("Feedback sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setCharCount(0); // Reset character count
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <>
      <section className="materials">
        <section className="ends">
          <h3>Send Us Feedback</h3>
          <div className="line-width">
            <div className="line-color"></div>
          </div>
        </section>

        <section className={`flex-container about ${theme}`}>
          <div className="aboutUs feature">
            <p>We Value Your Feedback. Help Us Improve!</p>
          </div>

          <div className="feature_box three">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="inputStyle"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="inputStyle"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
                className="inputStyle"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <p style={{ fontSize: "0.9rem", color: "#666", padding: "0px 5px" }}>
                {charCount}/{MAX_CHARS} characters remaining
              </p>
              
              <button
                type="submit"
                className="inputStyle btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        <br />
        <section className="ends">
          <div className="line-width none">
            <div className="line-color center"></div>
          </div>
          <div className=""></div>
        </section>
      </section>
    </>
  );
}
