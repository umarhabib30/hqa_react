import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function PopupModal({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-[90%] text-center relative"
          >
            {/* Close Icon */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            {/* Popup Content */}
            <h2 className="h2 font-semibold text-[#1a376b] mb-3">
              Grand Annual Ramadan Fundraiser & Dinner
            </h2>
            <p className="text-gray-700 mb-4">
              February 21, 2026. Join us for a heartfelt evening of faith,
              unity, and generosity at our Grand Annual Ramadan Fundraiser and
              Dinner. Together, we’ll celebrate the spirit of Ramadan and
              support programs that uplift our community and nurture lasting
              change. Reserve your seat today and be part of something
              meaningful. Learn more &{" "}
              <a
                href="/donation"
                className="text-red-600 underline hover:text-red-700 transition-colors"
              >
                RSVP
              </a>
            </p>

            <Link
              to="/donation"
              onClick={onClose}
              className="inline-block bg-[#1a376b] cursor-pointer text-white px-6 py-2 rounded-md hover:bg-[#0B49BD] transition"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function PopupModal({ show, onClose }) {
//   const [loading, setLoading] = useState(false);
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     if (!show) return;

//     setLoading(true);

//     fetch("https://hquranacademy.com/api/homeModal")
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.status && json.data.length > 0) {
//           setModalData(json.data[0]);
//         }
//       })
//       .catch((err) => console.error("Modal API Error:", err))
//       .finally(() => setLoading(false));
//   }, [show]);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="bg-white rounded-2xl shadow-xl
//                        p-5 sm:p-8
//                        max-w-md sm:max-w-lg
//                        w-[92%]
//                        text-center relative"
//           >
//             {/* Close Icon */}
//             <button
//               onClick={onClose}
//               className="absolute top-3 right-3 cursor-pointer
//                          text-gray-600 hover:text-red-600 text-xl"
//             >
//               &times;
//             </button>

//             {/* CONTENT */}
//             {loading ? (
//               <p className="text-gray-500">Loading...</p>
//             ) : modalData ? (
//               <>
//                 {/* IMAGE (Responsive) */}
//                 {modalData.image && (
//                   <div className="mb-4 w-full">
//                     <img
//                       src={modalData.image}
//                       alt={modalData.title}
//                       className="
//                         w-full
//                         h-40 sm:h-48 md:h-52
//                         object-cover
//                         rounded-xl
//                       "
//                     />
//                   </div>
//                 )}

//                 <h2 className="h2 font-semibold text-[#1a376b] mb-3">
//                   {modalData.title}
//                 </h2>

//                 <p className="text-gray-700 mb-4 text-sm sm:text-base">
//                   {modalData.cdesc}{" "}
//                   <a
//                     href="/donation"
//                     className="text-red-600 underline hover:text-red-700 transition-colors"
//                   >
//                     RSVP
//                   </a>
//                 </p>
//               </>
//             ) : (
//               <p className="text-gray-500">No data available</p>
//             )}

//             <button
//               onClick={onClose}
//               className="bg-[#1a376b] cursor-pointer
//                          text-white px-6 py-2 rounded-md
//                          hover:bg-[#0B49BD] transition"
//             >
//               Close
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
