import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2"; // Added SweetAlert2

const stripePromise = loadStripe(
  "pk_test_51SqoupDRvf5kz0FijFr2DyAkqCtcjzOKie0WevVbAkfewwnpZQQnN4QUMZgkz9vMHSzwyx97KEJCRMDh5S40TX7l00HhsYWYpp",
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentType, setPaymentType] = useState("recurring");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    amount: "50",
    interval: "month",
  });

  const quickAmounts = ["100", "50", "25", "10"];

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          email: formData.email,
          name: formData.name || undefined,
        },
      });

      if (error) {
        Swal.fire({ icon: "error", title: "Oops...", text: error.message });
        setLoading(false);
        return;
      }

      const endpoint =
        paymentType === "one-time"
          ? "/api/one-time-donation"
          : "/api/recurring-donation";
      const payload = {
        payment_method: paymentMethod.id,
        email: formData.email,
        name: formData.name,
        amount: Math.round(parseFloat(formData.amount) * 100),
        ...(paymentType === "recurring" && { interval: formData.interval }),
      };

      const response = await axios.post(
        `https://hquranacademy.com${endpoint}`,
        payload,
      );
      const data = response.data;

      if (data.client_secret) {
        const { error: confirmError, paymentIntent } =
          await stripe.confirmCardPayment(data.client_secret);
        if (confirmError) {
          Swal.fire({
            icon: "error",
            title: "Payment Failed",
            text: confirmError.message,
          });
        } else if (paymentIntent.status === "succeeded") {
          Swal.fire({
            icon: "success",
            title: "Thank You!",
            text: "Your donation was successful.",
          });
        }
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you for your generous support.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          err.response?.data?.message ||
          "A server error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 font-sans text-[#1A2E56]">
      {/* Responsive Header Section */}
      <div className="text-center max-w-2xl w-full mb-8">
        <span className="inline-block bg-[#E9E1C5] text-[#8B7A47] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Making a Difference
        </span>
        <h1 className="text-3xl md:text-5xl font-serif italic font-bold mb-4 leading-tight">
          Strength in Giving, <br className="hidden sm:block" /> Success in
          Unity
        </h1>
        <p className="text-gray-600 text-sm md:text-base px-4">
          Your generous donations are transforming lives and building the future
          of Islamic education.
        </p>
      </div>

      {/* Main Card: Flexible width, maxes out at 450px */}
      <div className="w-full max-w-[450px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all">
        {/* Card Header */}
        <div className="bg-[#0A2E5C] text-white p-6 text-center">
          <h2 className="text-xl font-semibold">General Donation</h2>
          <p className="text-xs opacity-80 mt-1 uppercase tracking-wider">
            Secure Stripe Payment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {/* Once/Repeat Toggle */}
          <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setPaymentType("one-time")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${paymentType === "one-time" ? "bg-[#E9E1C5] text-black shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              Once
            </button>
            <button
              type="button"
              onClick={() => setPaymentType("recurring")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${paymentType === "recurring" ? "bg-[#E9E1C5] text-black shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              Repeat
            </button>
          </div>

          {/* Repeats Every (Month/Year) */}
          {paymentType === "recurring" && (
            <div className="space-y-2 animate-fadeIn">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                Repeats Every
              </p>
              <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, interval: "month" })
                  }
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${formData.interval === "month" ? "bg-white text-blue-900 shadow-sm" : "text-gray-400"}`}
                >
                  Month
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, interval: "year" })}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${formData.interval === "year" ? "bg-white text-blue-900 shadow-sm" : "text-gray-400"}`}
                >
                  Year
                </button>
              </div>
            </div>
          )}

          {/* Select Amount Grid */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
              Select Amount
            </p>
            <div className="grid grid-cols-2 gap-3">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setFormData({ ...formData, amount: amt })}
                  className={`py-3 border-2 rounded-xl text-lg font-bold transition-all duration-200 ${formData.amount === amt ? "bg-[#E9E1C5] border-[#D4C491] scale-[1.02]" : "bg-white border-gray-100 text-gray-500 hover:border-gray-300"}`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Input Wrapper */}
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                $
              </span>
              <input
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleInput}
                className="w-full pl-8 pr-12 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#FFC107] outline-none text-lg font-bold transition-all"
                placeholder="0.00"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-400">
                USD
              </span>
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 gap-3">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleInput}
              required
              className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#E9E1C5] transition-all"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleInput}
              required
              className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#E9E1C5] transition-all"
            />
          </div>

          {/* Stripe Card Element Container */}
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50 group-focus-within:bg-white group-focus-within:ring-2 group-focus-within:ring-[#E9E1C5] transition-all">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#1A2E56",
                    "::placeholder": { color: "#aab7c4" },
                  },
                },
              }}
            />
          </div>

          {/* Action Button */}
          <button
            disabled={loading}
            className="w-full py-4 bg-[#FFC107] hover:bg-[#EBB106] hover:shadow-lg text-[#1A2E56] font-extrabold rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:active:scale-100 shadow-md"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-[#1A2E56]"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              "Continue to Payment"
            )}
          </button>
        </form>
      </div>

      {/* Trust Footer */}
      <p className="mt-6 text-gray-400 text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        </svg>
        Secure 256-bit SSL Encrypted Payment
      </p>
    </div>
  );
};

export default function DonationPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
