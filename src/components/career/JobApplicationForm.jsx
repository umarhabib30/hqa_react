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
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔹 API CALL HERE
    setSubmitted(true);
  };

  return (
    <div className="p-8 font-serif">
      <h2 className="text-2xl font-semibold text-center">Job Application</h2>
      <p className="text-center text-gray-600 mb-6">
        {jobTitle} — {location}
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              name="firstName"
              required
              placeholder="First Name *"
              onChange={handleChange}
              className="input"
            />
            <input
              name="lastName"
              required
              placeholder="Last Name *"
              onChange={handleChange}
              className="input"
            />
          </div>

          <input
            type="email"
            name="email"
            required
            placeholder="Email *"
            onChange={handleChange}
            className="input"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone *"
            onChange={handleChange}
            className="input"
          />

          <select
            name="experience"
            required
            onChange={handleChange}
            className="input"
          >
            <option value="">Years of Experience *</option>
            <option value="0-1">0–1 Years</option>
            <option value="2-4">2–4 Years</option>
            <option value="5+">5+ Years</option>
          </select>

          <input
            type="file"
            name="resume"
            required
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="coverLetter"
            rows="4"
            placeholder="Cover Letter (optional)"
            onChange={handleChange}
            className="input"
          />

          <button className="w-full bg-[#166534] text-white py-3 rounded-lg font-bold">
            Submit Application
          </button>

          <p className="text-xs text-center text-gray-500">
            Houston Quran Academy is an equal opportunity employer.
          </p>
        </form>
      ) : (
        <div className="text-center py-8">
          <h3 className="text-green-700 text-xl font-semibold">
            Application Submitted
          </h3>
          <p className="mt-2">
            Thank you. Our HR team will contact you, In shaa Allah.
          </p>
        </div>
      )}
    </div>
  );
}
