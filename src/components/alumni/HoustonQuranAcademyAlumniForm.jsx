import { useState, useEffect } from "react";
import {
  User,
  Mail,
  GraduationCap,
  CloudUpload,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  MapPin,
  Award,
  Camera,
  FileText,
  Send,
} from "lucide-react";

export default function HoustonQuranAcademyAlumniForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    graduation_year: "",
    status: "single",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    college: "",
    degree: "",
    company: "",
    job_title: "",
    achievements: "",
    image: null,
    document: null,
  });

  // Automatically clear specific field errors when user types
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const val = files ? files[0] : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const validateStep = () => {
    let newErrors = {};
    // Match these with your Laravel Request validation
    if (step === 1) {
      if (!formData.first_name) newErrors.first_name = "First name is required";
      if (!formData.last_name) newErrors.last_name = "Last name is required";
      if (!formData.graduation_year)
        newErrors.graduation_year = "Year is required";
    }
    if (step === 2) {
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zipcode) newErrors.zipcode = "Zipcode is required";
    }
    if (step === 3) {
      if (!formData.college) newErrors.college = "College name is required";
      if (!formData.degree) newErrors.degree = "Degree is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      // Append all fields to FormData
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          data.append(key, formData[key]);
        }
      });

      const res = await fetch("http://127.0.0.1:8000/api/alumniForm", {
        method: "POST",
        headers: {
          Accept: "application/json",
          // Note: Do NOT set Content-Type header when sending FormData;
          // the browser sets it automatically with the boundary string.
        },
        body: data,
      });

      const result = await res.json();

      if (res.status === 422) {
        setErrors(result.errors || {});
        // If errors exist in a previous step, jump back to it
        if (result.errors.email || result.errors.phone) setStep(2);
        else if (result.errors.first_name) setStep(1);
        return;
      }

      if (!res.ok) throw new Error(result.message || "Server Error");

      setSubmitted(true);
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, label: "Identity", icon: <User size={18} /> },
    { id: 2, label: "Contact", icon: <MapPin size={18} /> },
    { id: 3, label: "Academic", icon: <GraduationCap size={18} /> },
    { id: 4, label: "Media", icon: <Camera size={18} /> },
    { id: 5, label: "Review", icon: <CheckCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-12 px-4 font-sans text-slate-900">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header Section */}
        <div className="relative bg-[#0a2540] pt-12 pb-20 px-8 text-center text-white">
          <GraduationCap className="mx-auto mb-4 text-amber-400" size={48} />
          <h1 className="text-4xl font-serif tracking-tight mb-2">
            HQA Alumni Portal
          </h1>
          <p className="text-blue-200/80 italic font-light tracking-wide">
            "Strength in Giving, Success in Unity"
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="relative -mt-10 px-4 md:px-12">
          <div className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center border border-slate-50">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    step >= s.id
                      ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {step > s.id ? <CheckCircle size={20} /> : s.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2">
                    <User className="text-amber-500" /> Personal Identity
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <InputGroup
                      label="First Name"
                      name="first_name"
                      value={formData.first_name}
                      error={errors.first_name}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Last Name"
                      name="last_name"
                      value={formData.last_name}
                      error={errors.last_name}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Graduation Year"
                      name="graduation_year"
                      type="number"
                      value={formData.graduation_year}
                      error={errors.graduation_year}
                      onChange={handleChange}
                      placeholder="YYYY"
                    />
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Marital Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 transition-all outline-none"
                      >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2">
                    <Mail className="text-amber-500" /> Contact Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      error={errors.email}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      error={errors.phone}
                      onChange={handleChange}
                    />
                    <div className="md:col-span-2">
                      <InputGroup
                        label="Address"
                        name="address"
                        value={formData.address}
                        error={errors.address}
                        onChange={handleChange}
                      />
                    </div>
                    <InputGroup
                      label="City"
                      name="city"
                      value={formData.city}
                      error={errors.city}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="State"
                      name="state"
                      value={formData.state}
                      error={errors.state}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Zipcode"
                      name="zipcode"
                      value={formData.zipcode}
                      error={errors.zipcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2">
                    <Award className="text-amber-500" /> Academic & Career
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup
                      label="College"
                      name="college"
                      value={formData.college}
                      error={errors.college}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Degree"
                      name="degree"
                      value={formData.degree}
                      error={errors.degree}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <InputGroup
                      label="Job Title"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2">
                    <CloudUpload className="text-amber-500" /> Media Uploads
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FileSelect
                      label="Profile Photo"
                      name="image"
                      icon={<Camera />}
                      sub="JPG/PNG"
                      onChange={handleChange}
                      fileName={formData.image?.name}
                    />
                    <FileSelect
                      label="CV/Document"
                      name="document"
                      icon={<FileText />}
                      sub="PDF/DOC"
                      onChange={handleChange}
                      fileName={formData.document?.name}
                    />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-4">
                  <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-10">
                    <h3 className="text-xl font-serif text-slate-800 mb-4">
                      Confirm Your Details
                    </h3>
                    <p className="text-slate-500 mb-4">
                      You are registering as:
                    </p>
                    <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border border-slate-100 font-bold text-amber-600">
                      {formData.first_name} {formData.last_name} • Class of{" "}
                      {formData.graduation_year}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    step === 1
                      ? "opacity-0 pointer-events-none"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <ChevronLeft size={20} /> Back
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={() => validateStep() && setStep(step + 1)}
                    className="flex items-center gap-2 bg-[#0a2540] cursor-pointer text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#0f365d] transition-all"
                  >
                    Next <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-amber-500 text-white px-12 py-4 rounded-xl font-bold shadow-lg hover:bg-amber-600 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? "Submitting..." : "Submit to Database"}{" "}
                    <Send size={20} />
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="text-center py-16 animate-in zoom-in-90 duration-700">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-slate-800">Success!</h2>
              <p className="text-slate-500 mt-4">
                Your alumni record has been saved.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InputGroup({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  placeholder,
}) {
  const displayError = Array.isArray(error) ? error[0] : error;
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`p-4 bg-slate-50 border rounded-xl outline-none transition-all ${
          displayError
            ? "border-red-400 ring-2 ring-red-50"
            : "border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50"
        }`}
      />
      {displayError && (
        <span className="text-red-500 text-[10px] font-bold">
          ! {displayError}
        </span>
      )}
    </div>
  );
}

function FileSelect({ label, name, icon, sub, onChange, fileName }) {
  return (
    <div className="relative group">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">
        {label}
      </label>
      <div
        className={`relative h-40 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all ${
          fileName
            ? "border-amber-400 bg-amber-50/30"
            : "border-slate-200 hover:border-amber-300"
        }`}
      >
        <div
          className={`mb-2 ${fileName ? "text-amber-500" : "text-slate-300"}`}
        >
          {icon}
        </div>
        <span className="text-sm font-bold text-slate-600 truncate max-w-[150px]">
          {fileName || "Select File"}
        </span>
        <span className="text-[10px] text-slate-400">{sub}</span>
        <input
          type="file"
          name={name}
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}
