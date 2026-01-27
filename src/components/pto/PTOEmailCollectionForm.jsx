import { useState } from "react";

export default function PTOEmailCollectionForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setError("");
    // TODO: Save email to database or mailing list
    setSubmitted(true);
  };

  return (
    <div
      className="bg-gray-100 py-20 px-4"
      style={{ fontFamily: "Georgia, serif" }}
    >
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">PTO Updates</h2>
        <p className="text-gray-600 mb-6">
          Enter your email address to receive important PTO announcements from{" "}
          <strong>Houston Quran Academy</strong>.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Subscribe
            </button>

            <p className="text-xs text-gray-500">
              By submitting, you agree to receive PTO-related email
              communications from Houston Quran Academy.
            </p>
          </form>
        ) : (
          <div className="py-6">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              JazakAllah Khair!
            </h3>
            <p className="text-gray-700">
              Your email has been successfully added. You will now receive PTO
              updates and messages.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
