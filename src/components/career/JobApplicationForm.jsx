import { useState } from "react";

export default function JobApplicationForm({ jobTitle, location }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔹 Backend API call yahan ayegi
    setSubmitted(true);
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        background: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Job Application</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          {jobTitle} — {location}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                name="firstName"
                placeholder="First Name *"
                required
                onChange={handleChange}
                style={inputStyle}
              />
              <input
                name="lastName"
                placeholder="Last Name *"
                required
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              onChange={handleChange}
              style={inputStyle}
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              onChange={handleChange}
              style={inputStyle}
            />

            {/* Experience */}
            <select
              name="experience"
              required
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Years of Experience *</option>
              <option value="0-1">0–1 Years</option>
              <option value="2-4">2–4 Years</option>
              <option value="5+">5+ Years</option>
            </select>

            {/* Resume */}
            <label style={labelStyle}>Upload Resume (PDF/DOC)*</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
              style={inputStyle}
            />

            {/* Cover Letter */}
            <textarea
              name="coverLetter"
              placeholder="Brief Cover Letter (optional)"
              rows="4"
              onChange={handleChange}
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Submit Application
            </button>

            <p style={noteStyle}>
              Houston Quran Academy is an equal opportunity employer.
            </p>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h3 style={{ color: "#166534" }}>Application Submitted</h3>
            <p>
              Thank you for applying. Our HR team will contact you if selected,
              In shaa Allah.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* Styles */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "#166534",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

const labelStyle = {
  marginTop: "10px",
  display: "block",
  fontWeight: "bold",
};

const noteStyle = {
  fontSize: "12px",
  textAlign: "center",
  color: "#777",
  marginTop: "10px",
};