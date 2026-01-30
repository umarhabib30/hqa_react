import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { FaCloudUploadAlt } from "react-icons/fa";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData();
    formData.append("first_name", form.firstName);
    formData.append("last_name", form.lastName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("years_experience", parseInt(form.experience || 0));
    formData.append("cv", form.resume);
    formData.append("description", form.coverLetter);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/job-apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || {});
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check the required fields.",
          confirmButtonColor: "#23335D",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Application Received",
        text: "Thank you for your interest. Our HR team will contact you soon, In shaa Allah.",
        confirmButtonColor: "#23335D",
        timer: 4000,
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Left Side */}
      <div className="md:w-1/3 bg-[#23335D] p-8 text-white flex flex-col justify-between rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
        <div>
          <h2 className="text-3xl font-serif italic mb-2">Join HQA</h2>
          <div className="h-1 w-12 bg-red-500 mb-6"></div>
          <p className="text-blue-100 text-sm leading-relaxed mb-4">
            "The best of you are those who learn the Quran and teach it."
          </p>
          <div className="space-y-4 mt-8">
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
              <p className="text-xs uppercase tracking-widest text-blue-300">
                Position
              </p>
              <p className="font-semibold text-lg">{jobTitle}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
              <p className="text-xs uppercase tracking-widest text-blue-300">
                Location
              </p>
              <p className="font-semibold">{location}</p>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-blue-300/60 mt-8">
          HOUSTON QURAN ACADEMY © 2026
        </p>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-2/3 p-8 bg-white overflow-y-auto scrollbar-hide">
        {/* Note: 'scrollbar-hide' is a Tailwind plugin or custom class */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block">
                FIRST NAME
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#23335D] outline-none transition-colors"
                placeholder="Enter first name"
              />
              {errors.first_name && (
                <p className="text-red-500 text-[10px] mt-1">
                  {errors.first_name[0]}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block">
                LAST NAME
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#23335D] outline-none transition-colors"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* EMAIL & PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#23335D] outline-none transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-[#23335D] outline-none transition-colors"
                placeholder="+1 (000) 000-0000"
              />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1 block">
              EXPERIENCE LEVEL
            </label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-100 py-2 focus:border-[#23335D] outline-none bg-transparent"
            >
              <option value="">Select Experience</option>
              <option value="1">Entry Level (0-1 Years)</option>
              <option value="3">Intermediate (2-4 Years)</option>
              <option value="5">Experienced (5+ Years)</option>
            </select>
          </div>

          {/* RESUME */}
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1 block">
              RESUME / CV
            </label>
            <div className="relative border-2 border-dashed border-gray-100 rounded-xl p-4 text-center hover:border-[#23335D] transition-colors cursor-pointer group">
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <FaCloudUploadAlt className="mx-auto text-2xl text-gray-300 group-hover:text-[#23335D] mb-2" />
              <p className="text-sm text-gray-400 group-hover:text-gray-600">
                {form.resume
                  ? form.resume.name
                  : "Click to upload or drag and drop PDF"}
              </p>
            </div>
          </div>

          {/* COVER LETTER */}
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1 block">
              COVER LETTER
            </label>
            <textarea
              name="coverLetter"
              rows="3"
              value={form.coverLetter}
              onChange={handleChange}
              className="w-full border border-gray-100 rounded-xl p-3 focus:border-[#23335D] outline-none transition-all resize-none bg-gray-50"
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#23335D] cursor-pointer hover:bg-[#1a2646] text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* CUSTOM SCROLLBAR HIDE */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
