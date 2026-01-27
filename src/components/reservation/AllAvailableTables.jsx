import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const STRIPE_PUBLISHABLE_KEY =
  import.meta?.env?.VITE_STRIPE_PUBLISHABLE_KEY ||
  "pk_live_51SeKjzCdQqYPMFRUm7kDkxOQLcLYFqfl4J1QvFlGPow2dk8nvp7ivZNxdgXiRkQbooYwNDOAEFNHfbi20ghmgWGp00dP7IT8Sk";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ selectedSeats, totalAmount, event, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formErr, setFormErr] = useState("");

  const [couponCode, setCouponCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const discountAmount = appliedCoupon ? appliedCoupon.discount_applied : 0;
  const finalPayable = Math.max(totalAmount - discountAmount, 0);
  const isFree = finalPayable === 0;

  const handleChange = (e) => {
    setFormErr("");
    setErrorMsg("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    if (!form.email) {
      setFormErr("Please enter your email first to apply a coupon.");
      return;
    }

    setIsVerifying(true);
    setErrorMsg("");
    setFormErr("");

    try {
      const res = await fetch(`https://hquranacademy.com/api/apply-coupon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          amount: totalAmount,
          coupon_code: couponCode,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setAppliedCoupon(data.data);
      } else {
        setErrorMsg(data.message || "Invalid coupon code");
        setAppliedCoupon(null);
      }
    } catch (err) {
      setErrorMsg("Error validating coupon. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const validate = () => {
    if (!form.first_name?.trim()) return "First name required";
    if (!form.last_name?.trim()) return "Last name required";
    if (!form.email?.trim()) return "Email required";
    if (!form.phone?.trim()) return "Phone required";
    if (!event?.id) return "Event not loaded";
    return "";
  };

  const confirmBooking = async () => {
    setErrorMsg("");
    setFormErr("");

    const v = validate();
    if (v) {
      setFormErr(v);
      return;
    }

    setLoading(true);

    try {
      let paymentMethodId = "free_promo"; // Default for $0 bookings

      // Only talk to Stripe if there is an amount to pay
      if (!isFree) {
        if (!stripe || !elements) {
          setLoading(false);
          return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${form.first_name} ${form.last_name}`,
            email: form.email,
            phone: form.phone,
          },
        });

        if (error) {
          setErrorMsg(error.message || "Card error");
          setLoading(false);
          return;
        }
        paymentMethodId = paymentMethod.id;
      }

      // --- DATA HANDLING ---
      const fullTableCount = Number(selectedSeats?.["FULL_TABLE"] || 0);
      const isFullTable = fullTableCount > 0;

      const seatTypesObj = Object.fromEntries(
        Object.entries(selectedSeats || {}).filter(([key, value]) => {
          const count = Number(value);
          if (count <= 0) return false;
          if (key === "FULL_TABLE") return false;
          if (isFullTable) return key === "Baby Sitting";
          return true;
        }),
      );

      const payload = {
        ...form,
        booking_type: isFullTable ? "full_table" : "seats",
        payment_method: paymentMethodId,
        amount: finalPayable,
        coupon_code: appliedCoupon ? appliedCoupon.coupon_code : null,
        seat_types: seatTypesObj,
        ...(isFullTable && { table_count: fullTableCount }),
      };

      const res = await fetch(
        `https://hquranacademy.com/api/donationBooking/${event.id}/book`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok || !data?.success) {
        setErrorMsg(data?.message || "Booking failed");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => window.location.reload(), 1400);
    } catch (e) {
      setErrorMsg("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-10 w-full max-w-md text-center shadow-xl">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-semibold text-[#00285E] mb-2">
          Booking Confirmed
        </h2>
        <p className="text-gray-600">Processing successful. Reloading page…</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-xl overflow-y-auto max-h-[90vh]">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#00285E] mb-1">
            Customer Information
          </h2>
          <p className="text-sm text-gray-600">
            Enter details to complete booking
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>
      </div>

      {(formErr || errorMsg) && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {formErr || errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <input
          name="first_name"
          placeholder="First Name"
          className="w-full px-4 py-2 rounded-lg border"
          onChange={handleChange}
        />
        <input
          name="last_name"
          placeholder="Last Name"
          className="w-full px-4 py-2 rounded-lg border"
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <input
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg border"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          className="w-full px-4 py-2 rounded-lg border"
          onChange={handleChange}
        />
      </div>

      <div className="mb-6 p-4 border border-blue-100 bg-blue-50/30 rounded-xl">
        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
          Have a Promo Code?
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Code"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00285E] outline-none"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          />
          <button
            type="button"
            onClick={handleApplyCoupon}
            disabled={isVerifying || !couponCode}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition disabled:opacity-50"
          >
            {isVerifying ? "..." : "Apply"}
          </button>
        </div>
        {appliedCoupon && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            ✓ Coupon Applied: {appliedCoupon.coupon_code}
          </p>
        )}
      </div>

      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Subtotal</span>
          <span>${totalAmount}</span>
        </div>
        {discountAmount > 0 && (
          <div className="flex justify-between text-sm mb-1 text-green-700 font-medium">
            <span>Discount Applied</span>
            <span>-${discountAmount}</span>
          </div>
        )}
        <div className="flex justify-between font-bold mt-2 pt-2 border-t text-lg">
          <span>Total</span>
          <span>${finalPayable}</span>
        </div>
      </div>

      {/*  Hide Stripe when total is $0 */}
      {!isFree ? (
        <div className="border rounded-lg p-3 mb-5 bg-white">
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </div>
      ) : (
        <div className="mb-5 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm text-center">
          Promo code covers full amount. No payment details required.
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <button
          onClick={onClose}
          className="px-8 py-3 border rounded-lg hover:bg-gray-50 transition"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          disabled={loading || (!isFree && !stripe)}
          onClick={confirmBooking}
          className="px-8 py-3 bg-[#00285E] text-white rounded-lg hover:opacity-90 transition disabled:opacity-60"
        >
          {loading
            ? "Processing..."
            : isFree
              ? "Confirm Booking"
              : `Pay $${finalPayable}`}
        </button>
      </div>
    </div>
  );
};

const AllAvailableTables = ({ selectedSeats, totalAmount, event }) => {
  const [showModal, setShowModal] = useState(false);
  const disabled = !event?.id || !totalAmount || Number(totalAmount) <= 0;

  return (
    <section className="px-6 py-12">
      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          disabled={disabled}
          className="px-10 py-3 bg-[#00285E] text-white rounded-xl shadow-lg hover:bg-[#001d44] transition disabled:opacity-60"
        >
          Confirm Booking – ${Number(totalAmount || 0)}
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              selectedSeats={selectedSeats}
              totalAmount={totalAmount}
              event={event}
              onClose={() => setShowModal(false)}
            />
          </Elements>
        </div>
      )}
    </section>
  );
};

export default AllAvailableTables;
