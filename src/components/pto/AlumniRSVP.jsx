import { useState } from "react";

export default function AlumniRSVP() {
  // 🔹 Event config (later backend se ayega)
  const event = {
    title: "HQA Alumni Reunion 2025",
    feeEnabled: true, // false = free event
    feePerPerson: 25,
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    attending: "Yes",
    guests: 0,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const totalPeople = 1 + Number(form.guests);
  const totalAmount = event.feeEnabled ? totalPeople * event.feePerPerson : 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let e = {};
    if (!form.firstName) e.firstName = "First name required";
    if (!form.lastName) e.lastName = "Last name required";
    if (!form.email) e.email = "Email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // 🔹 Backend API call yahan ayegi
    setSubmitted(true);
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        minHeight: "100vh",
        background: "#f3f4f6",
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
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Alumni Event RSVP</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          {event.title} — Houston Quran Academy
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              name="firstName"
              placeholder="First Name *"
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.firstName && errorText(errors.firstName)}

            <input
              name="lastName"
              placeholder="Last Name *"
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.lastName && errorText(errors.lastName)}

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.email && errorText(errors.email)}

            <select name="attending" onChange={handleChange} style={inputStyle}>
              <option value="Yes">Yes, I will attend</option>
              <option value="No">No, I cannot attend</option>
            </select>

            <select name="guests" onChange={handleChange} style={inputStyle}>
              <option value="0">0 Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
            </select>

            {event.feeEnabled && (
              <div style={feeBox}>
                <p>
                  Fee per person: <strong>${event.feePerPerson}</strong>
                </p>
                <p>
                  Total people: <strong>{totalPeople}</strong>
                </p>
                <p style={{ fontSize: "18px", color: "#166534" }}>
                  Total Amount: <strong>${totalAmount}</strong>
                </p>
              </div>
            )}

            <button type="submit" style={buttonStyle}>
              RSVP Now
            </button>

            <p style={{ fontSize: "12px", textAlign: "center", color: "#777" }}>
              RSVP is for alumni event planning purposes only.
            </p>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h3 style={{ color: "#166534" }}>Thank You!</h3>
            <p>
              Your RSVP has been received. We look forward to seeing you, In
              shaa Allah.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* 🔹 Styles */
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

const feeBox = {
  background: "#f9fafb",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "8px",
};

const errorText = (msg) => (
  <p style={{ color: "red", fontSize: "12px" }}>{msg}</p>
);
