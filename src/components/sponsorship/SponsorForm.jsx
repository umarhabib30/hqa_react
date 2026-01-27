import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

// Replace with your actual Stripe Publishable Key
const stripePromise = loadStripe(
  "pk_test_51SqoupDRvf5kz0FijFr2DyAkqCtcjzOKie0WevVbAkfewwnpZQQnN4QUMZgkz9vMHSzwyx97KEJCRMDh5S40TX7l00HhsYWYpp",
);

const CheckoutForm = ({ sponsor, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    image: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setForm({ ...form, image: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      // --- STAGE 1: Get Client Secret from Laravel ---
      const intentRes = await fetch(
        "https://hquranacademy.com/api/sponserIntent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            amount: sponsor.price_per_year,
            user_email: form.user_email,
            sponsor_type: sponsor.title,
          }),
        },
      );

      const intentData = await intentRes.json();
      if (!intentData.status)
        throw new Error(intentData.message || "Failed to initialize payment.");

      // --- STAGE 2: Confirm Payment with Stripe ---
      const cardElement = elements.getElement(CardElement);
      const { paymentIntent, error: stripeError } =
        await stripe.confirmCardPayment(intentData.clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: { name: form.user_name, email: form.user_email },
          },
        });

      if (stripeError) throw new Error(stripeError.message);

      if (paymentIntent.status === "succeeded") {
        // --- STAGE 3: Save to Database via Laravel ---
        const formData = new FormData();
        formData.append("user_name", form.user_name);
        formData.append("user_email", form.user_email);
        formData.append("user_phone", form.user_phone);
        formData.append("sponsor_type", sponsor.title);
        formData.append("amount", sponsor.price_per_year);
        formData.append("payment_id", paymentIntent.id);
        if (form.image) formData.append("image", form.image);

        const saveRes = await fetch(
          "https://hquranacademy.com/api/sponserSubscriber",
          {
            method: "POST",
            headers: { Accept: "application/json" }, // Important: Browser sets Content-Type for FormData
            body: formData,
          },
        );

        const saveData = await saveRes.json();

        if (saveData.status) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: `Thank you for sponsoring the ${sponsor.title} package.`,
            confirmButtonColor: "#00285E",
            customClass: { popup: "rounded-[20px]" },
          });
          onClose();
        } else {
          throw new Error(
            saveData.message || "Payment succeeded but record failed.",
          );
        }
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        confirmButtonColor: "#00285E",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00285E]/20 focus:border-[#00285E] outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <div className="space-y-4">
        <input
          name="user_name"
          placeholder="Full Name"
          required
          className={inputStyle}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            required
            className={inputStyle}
            onChange={handleChange}
          />
          <input
            name="user_phone"
            placeholder="Phone"
            required
            className={inputStyle}
            onChange={handleChange}
          />
        </div>

        {/* File Upload UI */}
        <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-[#00285E] transition-colors cursor-pointer bg-gray-50">
          <input
            type="file"
            onChange={handleFile}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <span className="text-sm text-gray-500 font-medium">
            {form.image ? form.image.name : "Upload Company Logo"}
          </span>
        </div>

        {/* Stripe Card Input */}
        <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">
            Card Information
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#00285E",
                  "::placeholder": { color: "#aab7c4" },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-[#00285E]/5 p-4 rounded-xl flex justify-between items-center border border-blue-100">
        <span className="text-sm font-medium text-gray-600">
          Total Contribution
        </span>
        <span className="text-xl font-bold text-[#00285E]">
          ${Math.floor(sponsor.price_per_year)}
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={loading || !stripe}
          className="w-full bg-[#00285E] hover:bg-[#001a3d] cursor-pointer text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all disabled:opacity-70"
        >
          {loading ? "Processing Payment..." : "Complete Sponsorship"}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2 text-sm cursor-pointer text-gray-400 hover:text-gray-600 font-medium transition-colors"
        >
          Go Back
        </button>
      </div>
    </form>
  );
};

// Main Export
export default function SponsorFormWrapper({ sponsor, onClose }) {
  return (
    <div className="fixed inset-0 bg-[#001533]/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in duration-300">
        <div className="bg-[#00285E] p-8 text-center">
          <h2 className="text-white text-2xl font-serif italic mb-1">
            {sponsor.title}
          </h2>
          <p className="text-blue-100/80 text-xs uppercase tracking-widest font-medium">
            Premium Sponsorship Registration
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm sponsor={sponsor} onClose={onClose} />
        </Elements>
      </div>
    </div>
  );
}
