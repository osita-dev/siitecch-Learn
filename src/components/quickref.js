export default function Quickref() {
  const openInNewTab = () => {
    const url = "https://quickref.me"; // Replace with your desired URL
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Floating Button */}
      <div className="page-links quick"  onClick={openInNewTab}>
        Check out Quickref
      </div>
    </div>
  );
}
