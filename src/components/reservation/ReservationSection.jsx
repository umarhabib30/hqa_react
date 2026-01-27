import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ReservationSection = ({ onChange }) => {
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingMode, setBookingMode] = useState("none");

  useEffect(() => {
    fetch("https://hquranacademy.com/api/donationBooking")
      .then((r) => r.json())
      .then((res) => {
        if (res?.success) setEvent(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const seats = useMemo(() => {
    if (!event) return [];

    const list = (event.ticket_types || []).map((t) => ({
      key: t.name,
      label: t.name,
      desc: "",
      price: Number(t.price),
      isTable: false,
    }));

    if (event.allow_full_table) {
      list.push({
        key: "FULL_TABLE",
        label: "Table",
        desc: `Reserve entire table of ${event.seats_per_table}`,
        price: Number(event.full_table_price),
        isTable: true,
      });
    }

    return list;
  }, [event]);

  const [counts, setCounts] = useState({});

  useEffect(() => {
    const init = {};
    seats.forEach((s) => (init[s.key] = 0));
    setCounts(init);
  }, [seats]);

  const increment = (key, isTable) => {
    setCounts((p) => ({ ...p, [key]: p[key] + 1 }));

    // 🔥 Mode logic: Only change mode if it was "none"
    // This allows baby sitting to be added without switching modes
    if (bookingMode === "none") {
      setBookingMode(isTable ? "full_table" : "seats");
    }
  };

  const decrement = (key) => {
    setCounts((p) => {
      const updated = { ...p, [key]: Math.max(0, p[key] - 1) };
      const hasAnySeat = Object.entries(updated).some(
        ([k, v]) => k !== "FULL_TABLE" && v > 0,
      );
      const hasTable = updated["FULL_TABLE"] > 0;

      if (!hasAnySeat && !hasTable) {
        setBookingMode("none");
      }
      return updated;
    });
  };

  const totalAmount = seats.reduce(
    (sum, s) => sum + s.price * (counts[s.key] || 0),
    0,
  );

  useEffect(() => {
    if (!event) return;
    onChange({
      seats: counts,
      total: totalAmount,
      event,
      bookingType: bookingMode,
    });
  }, [counts, totalAmount, event, bookingMode]);

  if (loading) return null;

  return (
    <div className="flex flex-col items-center font-serif px-4 sm:px-10 py-12">
      <div className="w-full max-w-8xl mb-10">
        <button
          onClick={() => navigate("/donation")}
          className="flex items-center gap-2 bg-white px-3 py-2 rounded-3xl shadow text-[#00285E]"
        >
          <FiArrowLeft /> Back to Event Details
        </button>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-2xl italic text-[#00285E] mb-4">
          Complete Your Reservation
        </h1>
        <p>Choose your booking preference</p>
      </div>

      <div className="bg-[#e8f1fb] rounded-2xl p-6 w-full max-w-8xl">
        <h2 className="text-center text-2xl mb-12 text-[#00285E]">
          How many seats do you need?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {seats
            .filter((seat) => {
              // ✅ NEW HIDE LOGIC
              const isBabySitting = seat.label === "Baby Sitting";

              if (bookingMode === "seats" && seat.isTable) return false;

              // If Table mode is active, hide Adult/Child but KEEP Baby Sitting
              if (
                bookingMode === "full_table" &&
                !seat.isTable &&
                !isBabySitting
              ) {
                return false;
              }

              return true;
            })
            .map((seat) => (
              <div key={seat.key} className="flex flex-col items-center">
                <h3 className="font-semibold text-[#00285E] mb-2">
                  {seat.label}
                </h3>
                <p className="text-gray-700 mb-4">{seat.desc}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(seat.key)}
                    disabled={counts[seat.key] === 0}
                    className="bg-[#00285E] p-2 rounded disabled:opacity-40"
                  >
                    <FiMinus color="#fff" />
                  </button>
                  <span className="bg-white px-4 py-2 rounded font-semibold">
                    {counts[seat.key] || 0}
                  </span>
                  <button
                    onClick={() => increment(seat.key, seat.isTable)}
                    className="bg-[#CF3528] p-2 rounded"
                  >
                    <FiPlus color="#fff" />
                  </button>
                </div>
                <p className="mt-3 text-[#00285E]">
                  ${seat.price} per {seat.isTable ? "Table" : "Seat"}
                </p>
              </div>
            ))}
        </div>

        <div className="text-center mt-10">
          <span className="bg-white px-8 py-4 rounded shadow">
            Total Amount:{" "}
            <span className="text-red-700 text-2xl">${totalAmount}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;

// import { useEffect, useMemo, useState } from "react";
// import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const ReservationSection = ({ onChange }) => {
//   const navigate = useNavigate();

//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔹 booking mode
//   // none | seats | full_table
//   const [bookingMode, setBookingMode] = useState("none");

//   /* ======================
//      FETCH EVENT
//   ====================== */
//   useEffect(() => {
//     fetch("https://hquranacademy.com/api/donationBooking")
//       .then((r) => r.json())
//       .then((res) => {
//         if (res?.success) setEvent(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   /* ======================
//      SEAT TYPES FROM API
//   ====================== */
//   const seats = useMemo(() => {
//     if (!event) return [];

//     const list = (event.ticket_types || []).map((t) => ({
//       key: t.name,
//       label: t.name,
//       desc: "",
//       price: Number(t.price),
//       isTable: false,
//     }));

//     if (event.allow_full_table) {
//       list.push({
//         key: "FULL_TABLE",
//         label: "Table",
//         desc: `Reserve entire table of ${event.seats_per_table}`,
//         price: Number(event.full_table_price),
//         isTable: true,
//       });
//     }

//     return list;
//   }, [event]);

//   /* ======================
//      COUNTS
//   ====================== */
//   const [counts, setCounts] = useState({});

//   useEffect(() => {
//     const init = {};
//     seats.forEach((s) => (init[s.key] = 0));
//     setCounts(init);
//   }, [seats]);

//   /* ======================
//      INCREMENT / DECREMENT
//   ====================== */
//   const increment = (key, isTable) => {
//     setCounts((p) => ({ ...p, [key]: p[key] + 1 }));

//     //  mode set
//     setBookingMode(isTable ? "full_table" : "seats");
//   };

//   const decrement = (key) => {
//     setCounts((p) => {
//       const updated = { ...p, [key]: Math.max(0, p[key] - 1) };

//       //  agar sab zero ho gaye → reset mode
//       const hasAnySeat = Object.entries(updated).some(
//         ([k, v]) => k !== "FULL_TABLE" && v > 0
//       );
//       const hasTable = updated["FULL_TABLE"] > 0;

//       if (!hasAnySeat && !hasTable) {
//         setBookingMode("none");
//       }

//       return updated;
//     });
//   };

//   /* ======================
//      TOTAL
//   ====================== */
//   const totalAmount = seats.reduce(
//     (sum, s) => sum + s.price * (counts[s.key] || 0),
//     0
//   );

//   /* ======================
//      SEND DATA UP
//   ====================== */
//   useEffect(() => {
//     if (!event) return;

//     onChange({
//       seats: counts,
//       total: totalAmount,
//       event,
//       bookingType: bookingMode,
//     });
//   }, [counts, totalAmount, event, bookingMode]);

//   if (loading) return null;

//   return (
//     <div className="flex flex-col items-center font-serif px-4 sm:px-10 py-12">
//       {/* Back */}
//       <div className="w-full max-w-8xl mb-10">
//         <button
//           onClick={() => navigate("/donation")}
//           className="flex items-center gap-2 bg-white px-3 py-2 rounded-3xl shadow text-[#00285E]"
//         >
//           <FiArrowLeft /> Back to Event Details
//         </button>
//       </div>

//       <div className="text-center mb-12">
//         <h1 className="text-2xl italic text-[#00285E] mb-4">
//           Complete Your Reservation
//         </h1>
//         <p>Choose your booking preference</p>
//       </div>

//       <div className="bg-[#e8f1fb] rounded-2xl p-6 w-full max-w-8xl">
//         <h2 className="text-center text-2xl mb-12 text-[#00285E]">
//           How many seats do you need?
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
//           {seats
//             .filter((seat) => {
//               // ✅ hide logic
//               if (bookingMode === "seats" && seat.isTable) return false;
//               if (bookingMode === "full_table" && !seat.isTable) return false;
//               return true;
//             })
//             .map((seat) => (
//               <div key={seat.key} className="flex flex-col items-center">
//                 <h3 className="font-semibold text-[#00285E] mb-2">
//                   {seat.label}
//                 </h3>

//                 <p className="text-gray-700 mb-4">{seat.desc}</p>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => decrement(seat.key)}
//                     disabled={counts[seat.key] === 0}
//                     className="bg-[#00285E] p-2 rounded disabled:opacity-40"
//                   >
//                     <FiMinus color="#fff" />
//                   </button>

//                   <span className="bg-white px-4 py-2 rounded font-semibold">
//                     {counts[seat.key] || 0}
//                   </span>

//                   <button
//                     onClick={() => increment(seat.key, seat.isTable)}
//                     className="bg-[#CF3528] p-2 rounded"
//                   >
//                     <FiPlus color="#fff" />
//                   </button>
//                 </div>

//                 <p className="mt-3 text-[#00285E]">
//                   ${seat.price} per {seat.isTable ? "Table" : "Seat"}
//                 </p>
//               </div>
//             ))}
//         </div>

//         <div className="text-center mt-10">
//           <span className="bg-white px-8 py-4 rounded shadow">
//             Total Amount:{" "}
//             <span className="text-red-700 text-2xl">${totalAmount}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReservationSection;
