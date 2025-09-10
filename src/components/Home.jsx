import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // <-- Add this import
import logo from "../assets/visual-product-matcher-logo.png";

// --- COLOR PALETTE ---
const COLORS = {
  primaryGradient: "linear-gradient(90deg, #6C63FF 0%, #3A0CA3 100%)",
  accent: "#00C9A7",
  accentGradient: "linear-gradient(90deg, #6C63FF 0%, #00C9A7 100%)",
  white: "#FFFFFF",
  offWhite: "#F9FAFB",
  lightGray: "#F3F4F6",
  dark: "#1E1E2F",
  gray: "#6B7280",
  shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
  border: "#6C63FF",
  borderHover: "#00C9A7",
  footerBg: "#1E1E2F",
  footerText: "#D1D5DB",
  footerMuted: "#6B7280",
};

const adminBtnStyle = {
  position: "absolute",
  top: "1.5rem",
  right: "2.5rem",
  background: COLORS.accentGradient,
  color: "#fff",
  border: "none",
  borderRadius: "0.7rem",
  padding: "0.65rem 1.3rem",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,201,167,0.13)",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const smallAdminBtnStyle = {
  position: "absolute",
  top: "1.1rem",
  right: "1.3rem",
  background: COLORS.primaryGradient,
  color: "#fff",
  border: "none",
  borderRadius: "0.4rem",
  padding: "0.18rem 0.7rem",
  fontSize: "0.82rem",
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(108,99,255,0.13)",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.2rem",
  height: "1.7rem",
  lineHeight: "1",
  verticalAlign: "middle",
  zIndex: 20,
};

// --- STYLES ---
const gradientBg = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: COLORS.offWhite,
  fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
};

const headerStyle = {
  background: COLORS.primaryGradient,
  color: COLORS.white,
  padding: "2rem 0 1.5rem 0",
  letterSpacing: "0.02em",
  boxShadow: COLORS.shadow,
  width: "100%",
  borderBottomLeftRadius: "2.5rem",
  borderBottomRightRadius: "2.5rem",
  position: "relative",
  overflow: "hidden",
};

const headerFlexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  maxWidth: "600px",
  margin: "0 auto",
  flexWrap: "wrap",
  position: "relative",
};

const logoStyle = {
  height: "4.5rem",      
  width: "4.5rem",       
  minWidth: "3.5rem",    
  minHeight: "3.5rem",   
  background: COLORS.white,
  borderRadius: "1.3rem",
  boxShadow: COLORS.shadow,
  padding: "0.4rem",
  objectFit: "contain",
  display: "block",
};

const headerTitleStyle = {
  flex: 1,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.2rem",
};

const cardStyle = {
  background: COLORS.white,
  borderRadius: "1.5rem",
  boxShadow: COLORS.shadow,
  padding: "2.5rem 2rem",
  maxWidth: "400px",
  width: "100%",
  margin: "2rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  border: `1.5px solid ${COLORS.border}`,
  transition: "box-shadow 0.2s, border 0.2s",
};

const uploadBoxStyle = {
  width: "100%",
  border: `2px dashed ${COLORS.border}`,
  borderRadius: "1rem",
  background: COLORS.white,
  padding: "2rem 1rem",
  textAlign: "center",
  cursor: "pointer",
  marginBottom: "1.2rem",
  transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
  position: "relative",
  boxSizing: "border-box",
  boxShadow: "0 2px 12px 0 rgba(108,99,255,0.07)",
};

const uploadBoxHoverStyle = {
  borderColor: COLORS.borderHover,
  background: COLORS.offWhite,
  boxShadow: "0 4px 24px 0 rgba(0,201,167,0.10)",
};

const uploadIconStyle = {
  fontSize: "2.5rem",
  color: COLORS.border,
  marginBottom: "0.5rem",
};

const linkInputWrapper = {
  width: "100%",
  position: "relative",
  marginBottom: "1.2rem",
  display: "flex",
  alignItems: "center",
  background: COLORS.offWhite,
  borderRadius: "0.75rem",
  border: `1.5px solid ${COLORS.border}`,
  boxShadow: "0 2px 8px rgba(108,99,255,0.07)",
  boxSizing: "border-box",
};

const linkInputStyle = {
  flex: 1,
  padding: "0.75rem 1rem 0.75rem 2.7rem",
  border: "none",
  borderRadius: "0.75rem",
  fontSize: "1rem",
  outline: "none",
  background: "transparent",
  fontWeight: 500,
  color: COLORS.dark,
  minWidth: 0,
};

const linkIconInputStyle = {
  position: "absolute",
  left: "0.9rem",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "1.3rem",
  color: COLORS.border,
  pointerEvents: "none",
  opacity: 0.85,
};

const pasteButtonStyle = {
  marginLeft: "0.5rem",
  marginRight: "0.3rem",
  background: COLORS.accentGradient,
  color: "#fff",
  border: "none",
  borderRadius: "0.6rem",
  padding: "0.45rem 0.9rem",
  fontSize: "0.98rem",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,201,167,0.13)",
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
  outline: "none",
  height: "2.6rem",
  minWidth: "auto",
  whiteSpace: "nowrap",
};

const pasteIconStyle = {
  fontSize: "1.1rem",
  opacity: 0.93,
};

const buttonStyle = {
  background: COLORS.primaryGradient,
  color: "#fff",
  border: "none",
  borderRadius: "0.75rem",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: "0.5rem",
  fontWeight: 600,
  boxShadow: COLORS.shadow,
  width: "100%",
  maxWidth: "100%",
  transition: "box-shadow 0.2s, transform 0.1s",
};

const analyseButtonStyle = {
  background: COLORS.accentGradient,
  color: "#fff",
  border: "none",
  borderRadius: "0.75rem",
  padding: "0.85rem 2.2rem",
  fontSize: "1.08rem",
  cursor: "pointer",
  margin: "1.2rem auto 0 auto",
  fontWeight: 700,
  boxShadow: "0 2px 8px rgba(0,201,167,0.13)",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  width: "fit-content",
  justifyContent: "center",
  maxWidth: "100%",
};

const previewImgStyle = {
  maxWidth: "100%",
  maxHeight: "220px",
  borderRadius: "1rem",
  margin: "1rem 0 0.5rem 0",
  boxShadow: "0 2px 8px rgba(108,99,255,0.10)",
  border: `1.5px solid ${COLORS.border}`,
  objectFit: "contain",
  background: COLORS.offWhite,
};

const footerStyle = {
  background: COLORS.footerBg,
  color: COLORS.footerText,
  textAlign: "center",
  padding: "1.2rem 0 1rem 0",
  fontSize: "1rem",
  letterSpacing: "0.01em",
  marginTop: "auto",
  borderTopLeftRadius: "1.5rem",
  borderTopRightRadius: "1.5rem",
};

const responsiveStyles = `
@media (max-width: 600px) {
  .vpm-card {
    padding: 1.2rem 0.5rem !important;
    max-width: 98vw !important;
    border-radius: 1rem !important;
  }
  .vpm-upload-box {
    padding: 1.2rem 0.5rem !important;
    font-size: 0.98rem !important;
  }
  .vpm-link-input {
    font-size: 0.97rem !important;
    padding-left: 2.2rem !important;
    padding-right: 0.7rem !important;
  }
  .vpm-paste-btn {
    padding: 0.4rem 0.7rem !important;
    font-size: 0.93rem !important;
    height: 2.2rem !important;
  }
  .vpm-analyse-btn {
    padding: 0.7rem 1.1rem !important;
    font-size: 1rem !important;
  }
  .vpm-preview-img {
    max-height: 140px !important;
    border-radius: 0.7rem !important;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .vpm-preview-img-wrapper {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }
  .vpm-header-flex {
    gap: 0.7rem !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-start !important;
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
  }
  .vpm-logo {
    height: 2.2rem !important;
    width: 2.2rem !important;
    min-width: 2.2rem !important;
    min-height: 2.2rem !important;
    border-radius: 0.7rem !important;
    padding: 0.13rem !important;
  }
  .vpm-header-title h1 {
    font-size: 1.25rem !important;
  }
  .vpm-header-title p {
    font-size: 0.97rem !important;
  }
  .vpm-admin-btn {
    top: 0.7rem !important;
    right: 0.7rem !important;
    padding: 0.13rem 0.5rem !important;
    font-size: 0.75rem !important;
    height: 1.3rem !important;
  }
}
`;

const Home = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const fileInputRef = useRef();
  const linkInputRef = useRef();

  const navigate = useNavigate(); // <-- Add this line

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl("");
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle link input
  const handleLinkChange = (e) => {
    setImage(null);
    setImageUrl(e.target.value);
    setPreview(e.target.value);
  };

  // Paste from clipboard
  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setImage(null);
        setImageUrl(text);
        setPreview(text);
        if (linkInputRef.current) {
          linkInputRef.current.value = text;
        }
      }
    } catch (err) {
      alert("Could not paste from clipboard.");
    }
  };

  // Reset
  const handleReset = () => {
    setImage(null);
    setImageUrl("");
    setPreview(null);
    if (linkInputRef.current) {
      linkInputRef.current.value = "";
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
      setImageUrl("");
      setPreview(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  const handleUploadBoxClick = () => {
    fileInputRef.current.click();
  };

  // Analyse handler
  const handleAnalyse = () => {
    setIsAnalysing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalysing(false);
      alert("Analysis complete! (Demo)");
    }, 1800);
  };

  // Admin button navigation
  const handleAdminClick = () => {
    navigate("/admin"); // <-- Use navigate instead of window.location
  };

  return (
    <div style={gradientBg}>
      <style>{responsiveStyles}</style>
      {/* Header */}
      <header style={{ ...headerStyle, position: "relative" }}>
        {/* Very small admin button only at top right corner */}
        <button
          style={smallAdminBtnStyle}
          className="vpm-admin-btn"
          onClick={handleAdminClick}
          title="Go to Admin"
        >
          <span role="img" aria-label="admin">🛠️</span>
        </button>
        <div className="vpm-header-flex" style={headerFlexStyle}>
          <img
            src={logo}
            alt="Visual Product Matcher Logo"
            style={logoStyle}
            className="vpm-logo"
          />
          <span className="vpm-header-title" style={headerTitleStyle}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: 0, letterSpacing: "0.01em", color: COLORS.white, background: "transparent", textShadow: "0 2px 8px #3A0CA3" }}>
              Visual Product Matcher
            </h1>
            <p style={{ fontSize: "1.15rem", fontWeight: 400, margin: 0, color: "#E0E7FF", background: "transparent" }}>
              Instantly match products by uploading a photo or sharing a link.
            </p>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            ...cardStyle,
            border: dragActive ? `2px solid ${COLORS.accent}` : cardStyle.border,
            boxShadow: dragActive ? "0 4px 24px 0 rgba(0,201,167,0.15)" : cardStyle.boxShadow,
          }}
          className="vpm-card"
        >
          <label style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem", color: COLORS.border }}>
            Upload Image
          </label>
          <div
            style={{
              ...uploadBoxStyle,
              ...(dragActive ? uploadBoxHoverStyle : {}),
            }}
            className="vpm-upload-box"
            onClick={handleUploadBoxClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div style={uploadIconStyle}>📷</div>
            <div style={{ color: COLORS.border, fontWeight: 500, fontSize: "1.05rem" }}>
              Drag &amp; drop your image here<br />
              <span style={{ color: COLORS.gray, fontWeight: 400, fontSize: "0.95rem" }}>
                or <span style={{ textDecoration: "underline", cursor: "pointer" }}>browse</span> to upload
              </span>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          <span style={{ color: COLORS.gray, fontSize: "0.95rem", marginBottom: "1rem" }}>or</span>
          {/* Attractive link input with small paste button inside the white box */}
          <div style={linkInputWrapper}>
            <span style={linkIconInputStyle}>🔗</span>
            <input
              type="url"
              placeholder="Paste image link here"
              value={imageUrl}
              onChange={handleLinkChange}
              style={linkInputStyle}
              ref={linkInputRef}
              className="vpm-link-input"
            />
            <button
              type="button"
              style={pasteButtonStyle}
              onClick={handlePasteClick}
              title="Paste from clipboard"
              className="vpm-paste-btn"
            >
              <span style={pasteIconStyle}>📋</span>
            </button>
          </div>
          {(preview || imageUrl) && (
            <button style={buttonStyle} onClick={handleReset}>
              Clear
            </button>
          )}
          {/* Preview and Analyse Button inside the white box and centered */}
          {preview && (
            <div
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
              className="vpm-preview-img-wrapper"
            >
              <img
                src={preview}
                alt="Uploaded or linked preview"
                style={previewImgStyle}
                className="vpm-preview-img"
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1.2rem" }}>
                <button
                  style={analyseButtonStyle}
                  onClick={handleAnalyse}
                  disabled={isAnalysing}
                  className="vpm-analyse-btn"
                >
                  <span role="img" aria-label="search">🔍</span>
                  {isAnalysing ? "Analysing..." : "Analyse Picture"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <small>
          &copy; {new Date().getFullYear()} Visual Product Matcher &mdash;{" "}
          <span style={{ color: COLORS.footerMuted }}>Crafted with <span style={{ color: "#FF4D6D" }}>♥</span></span>
        </small>
      </footer>
    </div>
  );
};

export default Home;