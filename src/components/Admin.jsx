import React, { useRef, useState } from "react";
import logo from "../assets/visual-product-matcher-logo.png";

// --- COLOR PALETTE ---
const COLORS = {
  primaryGradient: "linear-gradient(90deg, #6C63FF 0%, #3A0CA3 100%)",
  accent: "#00C9A7",
  accentGradient: "linear-gradient(90deg, #6C63FF 0%, #00C9A7 100%)",
  white: "#FFFFFF",
  offWhite: "#F9FAFB",
  gray: "#6B7280",
  border: "#6C63FF",
  borderHover: "#00C9A7",
  shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
  footerBg: "#1E1E2F",
  footerText: "#D1D5DB",
  footerMuted: "#6B7280",
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
  marginBottom: "2rem",
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
  justifyContent: "center",
};

const h1Style = {
  fontSize: "2.2rem",
  fontWeight: 700,
  letterSpacing: "0.01em",
  margin: 0,
  color: COLORS.white,
  textShadow: "0 2px 8px #3A0CA3",
  width: "100%",
  textAlign: "center",
};

const cardStyle = {
  background: COLORS.white,
  borderRadius: "1.5rem",
  boxShadow: COLORS.shadow,
  padding: "2.5rem 2rem",
  maxWidth: "400px",
  width: "100%",
  margin: "2rem auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1.5px solid ${COLORS.border}`,
};

const labelStyle = {
  fontWeight: 600,
  fontSize: "1.05rem",
  color: COLORS.border,
  marginBottom: "0.5rem",
  alignSelf: "flex-start",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: `1.5px solid ${COLORS.border}`,
  fontSize: "1rem",
  outline: "none",
  marginBottom: "1.2rem",
  background: COLORS.offWhite,
  fontWeight: 500,
  color: "#1E1E2F",
  boxSizing: "border-box",
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

const buttonStyle = {
  background: COLORS.accentGradient,
  color: "#fff",
  border: "none",
  borderRadius: "0.75rem",
  padding: "0.85rem 2.2rem",
  fontSize: "1.08rem",
  cursor: "pointer",
  fontWeight: 700,
  boxShadow: "0 2px 8px rgba(0,201,167,0.13)",
  transition: "background 0.2s, box-shadow 0.2s",
  marginTop: "1rem",
  width: "100%",
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
  .vpm-card {
    padding: 1.2rem 0.5rem !important;
    max-width: 98vw !important;
    border-radius: 1rem !important;
  }
  .vpm-upload-box {
    padding: 1.2rem 0.5rem !important;
    font-size: 0.98rem !important;
  }
}
`;

const Admin = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
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
      setPreview(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  const handleUploadBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Name: ${name}\nCategory: ${category}\nImage: ${image ? image.name : "No image"}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: COLORS.offWhite, display: "flex", flexDirection: "column" }}>
      <style>{responsiveStyles}</style>
      <header style={headerStyle}>
        <div className="vpm-header-flex" style={headerFlexStyle}>
          <img
            src={logo}
            alt="Visual Product Matcher Logo"
            style={logoStyle}
            className="vpm-logo"
          />
          <span className="vpm-header-title" style={headerTitleStyle}>
            <h1 style={h1Style}>Admin</h1>
          </span>
        </div>
      </header>
      <form style={cardStyle} className="vpm-card" onSubmit={handleSubmit}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Category</label>
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Image</label>
        <div
          style={{
            ...uploadBoxStyle,
            ...(dragActive ? uploadBoxHoverStyle : {}),
            marginBottom: image || preview ? "0.7rem" : "1.2rem"
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
        {preview && (
          <div style={{ width: "100%", textAlign: "center" }}>
            <img
              src={preview}
              alt="Preview"
              style={previewImgStyle}
              className="vpm-preview-img"
            />
            <button
              type="button"
              style={{ ...buttonStyle, background: "#fff", color: COLORS.gray, border: `1px solid ${COLORS.gray}`, marginTop: "0.5rem" }}
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
        )}

        <button type="submit" style={buttonStyle}>
          Upload Image
        </button>
      </form>
      <footer style={footerStyle}>
        <small>
          &copy; {new Date().getFullYear()} Visual Product Matcher &mdash;{" "}
          <span style={{ color: COLORS.footerMuted }}>Crafted with <span style={{ color: "#FF4D6D" }}>♥</span></span>
        </small>
      </footer>
    </div>
  );
};

export default Admin;