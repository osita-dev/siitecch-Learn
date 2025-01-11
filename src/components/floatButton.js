import React from "react";
import { IoMdShareAlt } from "react-icons/io";

export default function FloatButton() {
  const referralLink = "https://siitecch-learn.vercel.app"; // Replace with your actual link

  // Function to copy the referral link to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert("Link copied to clipboard!"); // Optional: Notify the user
    }).catch(err => {
      console.error("Failed to copy the link:", err);
    });
  };

  // Function to share the referral link
  const shareReferralLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Join Siitecch!",
          text: "Discover Siitecch  the ultimate platform to master full-stack development with ease.",
          url: referralLink,
        })
        .catch((err) => console.error("Error sharing:", err));
    } else {
      copyToClipboard(); // Fallback to copy if `navigator.share` is not supported
    }
  };

  return (
    <button className="float-button" onClick={shareReferralLink} >

      <IoMdShareAlt className="share" />
    </button>
  );
}
