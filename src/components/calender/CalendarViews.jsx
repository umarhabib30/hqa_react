import React, { useState } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { ChevronLeft, List, Clock, MapPin } from "lucide-react";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

import EventModal from "./EventModal";

// --- CARD COMPONENTS ---
export const EventCard = ({ event, onClick }) => {
  const { title, time, color, location } = event;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick(event);
      }}
      className={`w-full rounded-xl p-3 mb-4 text-sm cursor-pointer 
                   transition-all duration-200 
                   hover:shadow-xl hover:scale-[1.01] 
                   ${color} text-gray-800 shadow-md`}
    >
      {/* Title */}
      <div className="flex justify-between items-start mb-2">
        <p className="font-bold leading-snug break-words">{title}</p>
      </div>

      <div className="flex flex-col space-y-1 text-xs text-gray-700">
        {/* Time */}
        <div className="flex items-start gap-1">
          <Clock
            size={12}
            className="opacity-80 mt-[2px] text-gray-700 flex-shrink-0"
          />
          <p className="leading-tight font-medium break-words">{time}</p>
        </div>

        {/* Location */}
        <div className="flex items-start gap-1">
          <MapPin
            size={12}
            className="opacity-80 mt-[2px] text-gray-700 flex-shrink-0"
          />
          <p className="leading-tight break-words">{location}</p>
        </div>
      </div>
    </div>
  );
};

export const MiniEventCard = ({ event, onClick }) => {
  const { title, color } = event;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick(event);
      }}
      className={`truncate w-full rounded-md px-1 py-[3px] mb-[3px] text-[10px] 
                   ${color} text-gray-800 border border-opacity-50 border-white/50 
                   cursor-pointer transition-shadow hover:shadow-lg`}
      title={title}
    >
      {title}
    </div>
  );
};

// --- MONTH VIEW ---
export const MonthView = ({
  currentDate,
  eventsByDay,
  onDayClick,
  showEventDetails,
}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const startOfMonth = dayjs(currentDate).startOf("month");
  const startDay = dayjs(startOfMonth).startOf("week").weekday(0);

  const daysInMonth = Array.from({ length: 42 }, (_, i) =>
    startDay.add(i, "day")
  );

  // Responsive weekday
  const weekdays = Array.from({ length: 7 }, (_, i) => ({
    full: dayjs().weekday(i).format("ddd"),
    short: dayjs().weekday(i).format("dd"),
  }));

  const handleEventCardClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-1 sm:p-2">
      <EventModal
        event={selectedEvent}
        onClose={closeModal}
        showFullDay={showEventDetails}
      />

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-px text-center text-xs font-semibold text-gray-500 border-b pb-2">
        {weekdays.map((day) => (
          <div key={day.full} className="py-2 min-w-[30px] sm:min-w-0">
            <span className="sm:hidden">{day.short}</span>
            <span className="hidden sm:block">{day.full}</span>
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 border-t border-gray-200">
        {daysInMonth.map((d, index) => {
          const dayKey = d.format("YYYY-MM-DD");
          const isCurrentMonth = d.isSame(currentDate, "month");
          const isToday = d.isSame(dayjs(), "day");
          const dayEvents = eventsByDay[dayKey] || [];

          return (
            <div
              key={dayKey}
              onClick={() => onDayClick(d.toDate())}
              className={`min-h-[120px] sm:min-h-[150px] p-1 sm:p-2 cursor-pointer transition-colors duration-150 relative 
                           border-r border-b overflow-y-auto 
                           ${
                             isCurrentMonth
                               ? "bg-white hover:bg-gray-50"
                               : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                           } ${index % 7 === 6 ? "border-r-0" : ""}`}
            >
              {/* Day Number Position */}
              <span
                className={`text-sm font-medium h-6 w-6 rounded-full flex items-center justify-center mb-1 absolute top-1 right-1 sm:top-2 sm:right-2 z-10 
                                 ${
                                   isToday && isCurrentMonth
                                     ? "bg-indigo-600 text-white shadow-md"
                                     : isCurrentMonth
                                     ? "text-gray-800"
                                     : "text-gray-400"
                                 }`}
              >
                {d.format("D")}
              </span>

              {/* Event Cards Container */}
              <div className="mt-8 flex flex-col space-y-2">
                {isCurrentMonth &&
                  dayEvents.map((event) => (
                    <React.Fragment key={event.id}>
                      {/* Mobile: Use MiniEventCard */}
                      <div className="sm:hidden">
                        <MiniEventCard
                          event={{ ...event, date: d.toDate() }}
                          onClick={handleEventCardClick}
                        />
                      </div>
                      {/* Desktop: Use EventCard */}
                      <div className="hidden sm:block">
                        <EventCard
                          event={{ ...event, date: d.toDate() }}
                          onClick={handleEventCardClick}
                        />
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- WEEK VIEW ---
export const WeekView = ({ weekDays, weeklyEventsByDay, showEventDetails }) => (
  <>
    {/* ================= MOBILE VIEW  ================= */}
    <div className="sm:hidden space-y-4 pt-2">
      {weekDays.map((d) => {
        const dayKey = dayjs(d).format("YYYY-MM-DD");
        const dayEvents = weeklyEventsByDay[dayKey] || [];
        const isToday = dayjs(d).isSame(dayjs(), "day");

        return (
          <div
            key={dayKey}
            className={`p-3 border rounded-xl shadow-sm ${
              isToday ? "bg-indigo-50 border-indigo-200" : "bg-white"
            }`}
          >
            {/* Day Header */}
            <div className="pb-3 border-b mb-3 flex justify-between items-center">
              <h4
                className={`text-lg font-semibold ${
                  isToday ? "text-indigo-700" : "text-gray-800"
                }`}
              >
                {dayjs(d).format("dddd, MMM D")}
              </h4>
              {isToday && (
                <span className="text-xs font-bold text-white bg-indigo-600 px-2 py-1 rounded-full">
                  Today
                </span>
              )}
            </div>

            {/* Event Cards for the Day */}
            {dayEvents.length > 0 ? (
              <div className="space-y-3">
                {dayEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onClick={showEventDetails}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic py-2">No events.</p>
            )}
          </div>
        );
      })}
    </div>

    {/* ================= DESKTOP VIEW (GRID/COLUMN) ================= */}
    <div className="hidden sm:grid grid-cols-7 gap-1 sm:gap-2 h-[500px] sm:h-[600px] overflow-y-auto pt-2 px-1">
      {weekDays.map((d) => {
        const dayKey = dayjs(d).format("YYYY-MM-DD");
        const dayEvents = weeklyEventsByDay[dayKey] || [];

        return (
          <div key={dayKey} className="flex flex-col px-0.5 sm:px-1">
            {dayEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={showEventDetails}
              />
            ))}
          </div>
        );
      })}
    </div>
  </>
);

// --- SINGLE DAY LIST VIEW ---
export const SingleDayList = ({
  singleDayEvents,
  selectedDayLabel,
  showEventDetails,
  selectedDay,
  view,
  setSelectedDay,
}) => (
  <div className="p-4 sm:p-6 border rounded-2xl bg-white shadow-lg h-[500px] sm:h-[600px] overflow-y-auto">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 border-b pb-3">
      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 flex items-center gap-2 mb-2 sm:mb-0">
        <List size={28} className="text-indigo-600" />
        {selectedDayLabel} Events
      </h3>
      {selectedDay && view === "Week" && (
        <button
          onClick={() => setSelectedDay(null)}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 p-2 rounded-lg transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Week
        </button>
      )}
    </div>

    {singleDayEvents.length > 0 ? (
      <div className="space-y-4">
        {singleDayEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={showEventDetails} />
        ))}
      </div>
    ) : (
      <div className="text-center py-8 sm:py-10 text-gray-500 text-base sm:text-lg border-dashed border-2 border-gray-200 p-8 rounded-xl">
        All clear! No events scheduled for this day.
      </div>
    )}
  </div>
);













// import React, { useState } from "react";
// import dayjs from "dayjs";
// import weekday from "dayjs/plugin/weekday";
// import weekOfYear from "dayjs/plugin/weekOfYear";
// import { ChevronLeft, List, Clock, MapPin } from "lucide-react";

// dayjs.extend(weekday);
// dayjs.extend(weekOfYear);

// import EventModal from "./EventModal";

// // --- CARD COMPONENTS ---
// export const EventCard = ({ event, onClick }) => {
//   const { title, time, color, location } = event;

//   return (
//     <div
//       onClick={(e) => {
//         e.stopPropagation();
//         onClick(event);
//       }}
//       className={`w-full rounded-xl p-3 mb-4 text-sm cursor-pointer 
//                    transition-all duration-200 
//                    hover:shadow-xl hover:scale-[1.01] 
//                    ${color} text-gray-800 shadow-md`}
//     >
//       {/* Title */}
//       <div className="flex justify-between items-start mb-2">
//         <p className="font-bold leading-snug break-words">{title}</p>
//       </div>

//       <div className="flex flex-col space-y-1 text-xs text-gray-700">
//         {/* Time */}
//         <div className="flex items-start gap-1">
//           <Clock
//             size={12}
//             className="opacity-80 mt-[2px] text-gray-700 flex-shrink-0"
//           />
//           <p className="leading-tight font-medium break-words">{time}</p>
//         </div>

//         {/* Location */}
//         <div className="flex items-start gap-1">
//           <MapPin
//             size={12}
//             className="opacity-80 mt-[2px] text-gray-700 flex-shrink-0"
//           />
//           <p className="leading-tight break-words">{location}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const MiniEventCard = ({ event, onClick }) => {
//   const { title, color } = event;
//   return (
//     <div
//       onClick={(e) => {
//         e.stopPropagation();
//         onClick(event);
//       }}
//       className={`truncate w-full rounded-md px-1 py-[3px] mb-[3px] text-[10px] 
//                    ${color} text-gray-800 border border-opacity-50 border-white/50 
//                    cursor-pointer transition-shadow hover:shadow-lg`}
//       title={title}
//     >
//       {title}
//     </div>
//   );
// };

// // --- MONTH VIEW ---
// export const MonthView = ({
//   currentDate,
//   eventsByDay,
//   onDayClick,
//   showEventDetails,
// }) => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const startOfMonth = dayjs(currentDate).startOf("month");
//   const startDay = dayjs(startOfMonth).startOf("week").weekday(0);

//   const daysInMonth = Array.from({ length: 42 }, (_, i) =>
//     startDay.add(i, "day")
//   );

//   // Responsive weekday
//   const weekdays = Array.from({ length: 7 }, (_, i) => ({
//     full: dayjs().weekday(i).format("ddd"),
//     short: dayjs().weekday(i).format("dd"),
//   }));

//   const handleEventCardClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="p-1 sm:p-2">
//       <EventModal
//         event={selectedEvent}
//         onClose={closeModal}
//         showFullDay={showEventDetails}
//       />

//       {/* Weekday Headers */}
//       <div className="grid grid-cols-7 gap-px text-center text-xs font-semibold text-gray-500 border-b pb-2">
//         {weekdays.map((day) => (
//           <div key={day.full} className="py-2 min-w-[30px] sm:min-w-0">
//             <span className="sm:hidden">{day.short}</span>
//             <span className="hidden sm:block">{day.full}</span>
//           </div>
//         ))}
//       </div>

//       {/* Days Grid */}
//       <div className="grid grid-cols-7 border-t border-gray-200">
//         {daysInMonth.map((d, index) => {
//           const dayKey = d.format("YYYY-MM-DD");
//           const isCurrentMonth = d.isSame(currentDate, "month");
//           const isToday = d.isSame(dayjs(), "day");
//           const dayEvents = eventsByDay[dayKey] || [];

//           return (
//             <div
//               key={dayKey}
//               onClick={() => onDayClick(d.toDate())}
//               className={`min-h-[120px] sm:min-h-[150px] p-1 sm:p-2 cursor-pointer transition-colors duration-150 relative 
//                            border-r border-b overflow-y-auto 
//                            ${
//                              isCurrentMonth
//                                ? "bg-white hover:bg-gray-50"
//                                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
//                            } ${index % 7 === 6 ? "border-r-0" : ""}`}
//             >
//               {/* Day Number Position */}
//               <span
//                 className={`text-sm font-medium h-6 w-6 rounded-full flex items-center justify-center mb-1 absolute top-1 right-1 sm:top-2 sm:right-2 z-10 
//                                  ${
//                                    isToday && isCurrentMonth
//                                      ? "bg-indigo-600 text-white shadow-md"
//                                      : isCurrentMonth
//                                      ? "text-gray-800"
//                                      : "text-gray-400"
//                                  }`}
//               >
//                 {d.format("D")}
//               </span>

//               {/* Event Cards Container */}
//               <div className="mt-8 flex flex-col space-y-2">
//                 {isCurrentMonth &&
//                   dayEvents.map((event) => (
//                     <React.Fragment key={event.id}>
//                       {/* Mobile: Use MiniEventCard */}
//                       <div className="sm:hidden">
//                         <MiniEventCard
//                           event={{ ...event, date: d.toDate() }}
//                           onClick={handleEventCardClick}
//                         />
//                       </div>
//                       {/* Desktop: Use EventCard */}
//                       <div className="hidden sm:block">
//                         <EventCard
//                           event={{ ...event, date: d.toDate() }}
//                           onClick={handleEventCardClick}
//                         />
//                       </div>
//                     </React.Fragment>
//                   ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // --- WEEK VIEW ---
// export const WeekView = ({ weekDays, weeklyEventsByDay, showEventDetails }) => (
//   <>
//     {/* ================= MOBILE VIEW  ================= */}
//     <div className="sm:hidden space-y-4 pt-2">
//       {weekDays.map((d) => {
//         const dayKey = dayjs(d).format("YYYY-MM-DD");
//         const dayEvents = weeklyEventsByDay[dayKey] || [];
//         const isToday = dayjs(d).isSame(dayjs(), "day");

//         return (
//           <div
//             key={dayKey}
//             className={`p-3 border rounded-xl shadow-sm ${
//               isToday ? "bg-indigo-50 border-indigo-200" : "bg-white"
//             }`}
//           >
//             {/* Day Header */}
//             <div className="pb-3 border-b mb-3 flex justify-between items-center">
//               <h4
//                 className={`text-lg font-semibold ${
//                   isToday ? "text-indigo-700" : "text-gray-800"
//                 }`}
//               >
//                 {dayjs(d).format("dddd, MMM D")}
//               </h4>
//               {isToday && (
//                 <span className="text-xs font-bold text-white bg-indigo-600 px-2 py-1 rounded-full">
//                   Today
//                 </span>
//               )}
//             </div>

//             {/* Event Cards for the Day */}
//             {dayEvents.length > 0 ? (
//               <div className="space-y-3">
//                 {dayEvents.map((event) => (
//                   <EventCard
//                     key={event.id}
//                     event={event}
//                     onClick={showEventDetails}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p className="text-sm text-gray-500 italic py-2">No events.</p>
//             )}
//           </div>
//         );
//       })}
//     </div>

//     {/* ================= DESKTOP VIEW (GRID/COLUMN) ================= */}
//     <div className="hidden sm:grid grid-cols-7 gap-1 sm:gap-2 h-[500px] sm:h-[600px] overflow-y-auto pt-2 px-1">
//       {weekDays.map((d) => {
//         const dayKey = dayjs(d).format("YYYY-MM-DD");
//         const dayEvents = weeklyEventsByDay[dayKey] || [];

//         return (
//           <div key={dayKey} className="flex flex-col px-0.5 sm:px-1">
//             {dayEvents.map((event) => (
//               <EventCard
//                 key={event.id}
//                 event={event}
//                 onClick={showEventDetails}
//               />
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   </>
// );

// // --- SINGLE DAY LIST VIEW ---
// export const SingleDayList = ({
//   singleDayEvents,
//   selectedDayLabel,
//   showEventDetails,
//   selectedDay,
//   view,
//   setSelectedDay,
// }) => (
//   <div className="p-4 sm:p-6 border rounded-2xl bg-white shadow-lg h-[500px] sm:h-[600px] overflow-y-auto">
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 border-b pb-3">
//       <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 flex items-center gap-2 mb-2 sm:mb-0">
//         <List size={28} className="text-indigo-600" />
//         {selectedDayLabel} Events
//       </h3>
//       {selectedDay && view === "Week" && (
//         <button
//           onClick={() => setSelectedDay(null)}
//           className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 p-2 rounded-lg transition-colors"
//         >
//           <ChevronLeft size={16} />
//           Back to Week
//         </button>
//       )}
//     </div>

//     {singleDayEvents.length > 0 ? (
//       <div className="space-y-4">
//         {singleDayEvents.map((event) => (
//           <EventCard key={event.id} event={event} onClick={showEventDetails} />
//         ))}
//       </div>
//     ) : (
//       <div className="text-center py-8 sm:py-10 text-gray-500 text-base sm:text-lg border-dashed border-2 border-gray-200 p-8 rounded-xl">
//         All clear! No events scheduled for this day.
//       </div>
//     )}
//   </div>
// );
