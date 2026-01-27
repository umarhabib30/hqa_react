import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideRight } from "../../../utility/animation";

export default function SubscribeSection() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submitEmail = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("https://hquranacademy.com/api/ptoSubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.status) {
        setSuccess("Subscribed successfully 🎉");
        setEmail("");
      } else {
        setError(data.message || "Subscription failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SECTION */}
      <section className="w-full flex justify-center px-10 py-16 font-serif bg-white">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[90%] bg-[#002B5B] rounded-3xl py-10 px-6 flex flex-col items-center text-center shadow-lg"
        >
          <h2 className="text-white h1">Never Miss an Event</h2>

          <p className="text-white p mt-3">
            Subscribe to our monthly newsletter!
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 px-10 py-3 rounded-full text-white p cursor-pointer hover:opacity-90 transition active:scale-95"
            style={{ backgroundColor: "#FFA500" }}
          >
            Subscribe Now
          </button>
        </motion.div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl text-center"
            >
              <h3 className="h2 text-[#002B5B] mb-2">
                Subscribe to Newsletter
              </h3>

              <p className="p text-gray-600 mb-5">
                Enter your email to stay updated
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#002B5B]"
              />

              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

              {success && (
                <p className="text-green-600 text-sm mt-2">{success}</p>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-gray-400 rounded-lg py-2 p hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={submitEmail}
                  disabled={loading}
                  className="flex-1 rounded-lg py-2 text-white p transition active:scale-95 disabled:opacity-60"
                  style={{ backgroundColor: "#002B5B" }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
