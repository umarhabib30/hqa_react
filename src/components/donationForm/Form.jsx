import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// REPLACE WITH YOUR ACTUAL KEY
const stripePromise = loadStripe(
  "pk_test_51SqoupDRvf5kz0FijFr2DyAkqCtcjzOKie0WevVbAkfewwnpZQQnN4QUMZgkz9vMHSzwyx97KEJCRMDh5S40TX7l00HhsYWYpp",
);

const DonationForm = ({ formData, setStep, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: window.location.href,
          billing_details: { name: formData.name, email: formData.email },
        },
      });

      if (error) {
        setMessage(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        await fetch("https://hquranacademy.com/api/confirm-general-donation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, stripe_id: paymentIntent.id }),
        });
        setStep(3);
      }
    } catch (err) {
      setMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitPayment} style={styles.form}>
      <h3 style={styles.title}>Secure Payment</h3>
      <p style={styles.subtitle}>
        Amount: <b>${formData.amount}</b> / {formData.frequency}
      </p>

      <PaymentElement />

      <button
        type="submit"
        disabled={!stripe || loading}
        style={styles.buttonSuccess}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      <button type="button" onClick={() => setStep(1)} style={styles.backBtn}>
        Go Back
      </button>
      {message && <p style={styles.error}>{message}</p>}
    </form>
  );
};

export default function DonationApp() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "10.00",
    frequency: "once",
  });

  const initializePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://hquranacademy.com/api/process-general-donation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success && data.clientSecret) {
        setClientSecret(data.clientSecret);
        setStep(2);
      } else {
        // This handles the error so you don't get a blank page
        setMessage(
          data.message || "Failed to initialize payment. Check price minimums.",
        );
      }
    } catch (err) {
      setMessage("Connection error. Please check your internet or API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* STEP 1: Form */}
      {step === 1 && (
        <form onSubmit={initializePayment} style={styles.form}>
          <h3 style={styles.title}>General Donation</h3>
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div style={styles.inputGroup}>
            <input
              style={{ ...styles.input, width: "65%" }}
              type="number"
              min="0.50"
              step="0.01"
              value={formData.amount}
              required
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
            <select
              style={{ ...styles.input, width: "30%" }}
              value={formData.frequency}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
            >
              <option value="once">Once</option>
              <option value="month">Monthly</option>
              <option value="year">Yearly</option>
            </select>
          </div>
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Wait..." : "Proceed to Payment"}
          </button>
          {message && <p style={styles.error}>{message}</p>}
        </form>
      )}

      {/* STEP 2: Payment UI (Only if clientSecret exists) */}
      {step === 2 && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <DonationForm
            formData={formData}
            setStep={setStep}
            clientSecret={clientSecret}
          />
        </Elements>
      ) : (
        step === 2 && (
          <div style={styles.form}>
            <p style={styles.error}>Error: Client Secret not found.</p>
            <button onClick={() => setStep(1)} style={styles.button}>
              Go Back
            </button>
          </div>
        )
      )}

      {/* STEP 3: Success */}
      {step === 3 && (
        <div style={styles.form}>
          <h2 style={{ color: "#28a745" }}>Thank You!</h2>
          <p>Your donation was processed successfully.</p>
          <button
            onClick={() => window.location.reload()}
            style={styles.button}
          >
            Donate Again
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "inherit",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    padding: "25px",
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
  },
  title: { margin: "0 0 15px 0", fontSize: "1.25rem", color: "#333" },
  subtitle: { fontSize: "0.9rem", color: "#666", marginBottom: "20px" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  inputGroup: { display: "flex", justifyContent: "space-between" },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  buttonSuccess: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#059669",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "20px",
  },
  backBtn: {
    width: "100%",
    marginTop: "15px",
    background: "none",
    border: "none",
    color: "#6b7280",
    cursor: "pointer",
    textDecoration: "underline",
  },
  error: {
    color: "#dc2626",
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
  },
};
