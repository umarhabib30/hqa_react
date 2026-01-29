import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, CalendarCheck, List } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

import EventModal from "./components/EventModal";
import { MonthView, WeekView, SingleDayList } from "./components/CalendarViews";
import { DUMMY_EVENTS, processEvents, getWeekDays } from "./data/events";

export default function CalendarLayout() {
  const [date, setDate] = useState(new Date("2025-12-15"));
  const [view, setView] = useState("Week");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const currentMonthYear = dayjs(date).format("MMMM, YYYY");

  const eventsByDay = useMemo(() => processEvents(DUMMY_EVENTS), []);
  const weekDays = useMemo(() => getWeekDays(date), [date]);

  const weeklyEventsByDay = useMemo(() => {
    return weekDays.reduce((acc, d) => {
      const dayKey = dayjs(d).format("YYYY-MM-DD");
      acc[dayKey] = eventsByDay[dayKey] || [];
      return acc;
    }, {});
  }, [weekDays, eventsByDay]);

  // Handlers
  const handleDayChange = (newDate) => {
    const newDayKey = dayjs(newDate).format("YYYY-MM-DD");

    if (view === "Week") {
      if (selectedDay === newDayKey) {
        setSelectedDay(null);
      } else {
        setSelectedDay(newDayKey);
        setDate(newDate);
      }
    } else if (view === "Month") {
      setView("Day");
      setSelectedDay(newDayKey);
      setDate(newDate);
    } else {
      setDate(newDate);
    }
  };

  const handlePrevNext = (direction) => {
    const unit = view === "Month" ? "month" : "week";

    setSelectedDay(null);
    setDate(dayjs(date).add(direction, unit).toDate());
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setSelectedDay(null);

    if (newView === "Day") {
      setSelectedDay(dayjs(date).format("YYYY-MM-DD"));
    }
  };

  // Modal handlers
  const showEventDetails = (event) => setSelectedEvent(event);
  const closeEventDetails = () => setSelectedEvent(null);

  // Single Day List Data
  const dayKeyToDisplay = selectedDay || dayjs(date).format("YYYY-MM-DD");
  const singleDayEvents =
    selectedDay || view === "Day" ? eventsByDay[dayKeyToDisplay] || [] : [];
  const selectedDayLabel = dayjs(dayKeyToDisplay).format("dddd, MMM D, YYYY");
  const isSingleDayList = selectedDay !== null || view === "Day";

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-serif">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl gap-4">
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[30%] rounded-2xl bg-[#0f172a] p-4 text-white shadow-lg flex-shrink-0">
          {/* MINI CALENDAR */}
          <div className="mb-6 rounded-xl bg-[#020617] p-3">
            <Calendar
              onChange={(newDate) => {
                setDate(newDate);
                setSelectedDay(null);
              }}
              value={date}
              className="dark-calendar"
            />
          </div>
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold rounded-xl flex items-center justify-center gap-2">
            <CalendarCheck size={20} />
            New Event
          </button>
        </aside>

        {/* RIGHT SIDE */}
        <main className="w-full lg:w-[70%] rounded-2xl bg-white p-4 md:p-6 shadow-lg flex-1">
          {/* TOP BAR */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <h2 className="text-lg font-semibold">{currentMonthYear}</h2>

            <div className="flex gap-2 rounded-xl bg-gray-100 p-1">
              {["Month", "Week", "Day"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleViewChange(btn)}
                  className={`rounded-lg px-4 py-1 text-sm transition-colors duration-200 ${
                    view === btn
                      ? "bg-white shadow"
                      : "text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                className="rounded-lg border p-1 hover:bg-gray-100"
                onClick={() => handlePrevNext(-1)}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100"
                onClick={() => {
                  setDate(new Date());
                  setSelectedDay(null);
                  setView("Week");
                }}
              >
                Today
              </button>
              <button
                className="rounded-lg border p-1 hover:bg-gray-100"
                onClick={() => handlePrevNext(1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* SCHEDULER VIEWS */}
          <div className="flex flex-col">
            {view === "Month" ? (
              <MonthView
                currentDate={date}
                eventsByDay={eventsByDay}
                onDayClick={handleDayChange}
              />
            ) : (
              <>
                {/* DAY SELECTOR & HEADER (Hidden when viewing 'Day' list in Day view) */}
                <div
                  className={`mb-4 grid grid-cols-7 gap-1 sticky top-0 bg-white z-10 border-b pb-2 ${
                    isSingleDayList && view === "Day" ? "hidden" : ""
                  }`}
                >
                  {weekDays.map((d) => {
                    const dayKey = dayjs(d).format("YYYY-MM-DD");
                    const isCurrentDay =
                      view === "Week" && dayKey === selectedDay;
                    const isCurrentViewDay =
                      view === "Day" && dayjs(d).isSame(date, "day");

                    const isHighlighted = isCurrentDay || isCurrentViewDay;
                    const isToday = dayjs(d).isSame(dayjs(new Date()), "day");

                    return (
                      <div
                        key={dayKey}
                        onClick={() => handleDayChange(d)}
                        className={`rounded-xl px-2 py-3 text-center transition-colors duration-200 cursor-pointer ${
                          isHighlighted
                            ? "bg-indigo-600 text-white shadow-xl"
                            : isToday
                            ? "bg-gray-200 text-black hover:bg-gray-300"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        <p className="text-xs font-medium">
                          {dayjs(d).format("ddd")}
                        </p>
                        <p className="text-xl font-bold">
                          {dayjs(d).format("D")}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* WEEK or SINGLE DAY LIST */}
                {isSingleDayList ? (
                  <SingleDayList
                    singleDayEvents={singleDayEvents}
                    selectedDayLabel={selectedDayLabel}
                    showEventDetails={showEventDetails}
                    selectedDay={selectedDay}
                    view={view}
                    setSelectedDay={setSelectedDay}
                  />
                ) : (
                  <WeekView
                    weekDays={weekDays}
                    weeklyEventsByDay={weeklyEventsByDay}
                    showEventDetails={showEventDetails}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>

      {/* RENDER MODAL */}
      <EventModal event={selectedEvent} onClose={closeEventDetails} />

      {/* CUSTOM STYLES */}
      <style>{`
        .dark-calendar {
            background: transparent;
            border: none;
            color: white;
            width: 100%;
            font-family: inherit;
        }
        .dark-calendar .react-calendar__navigation__label,
        .dark-calendar .react-calendar__navigation__arrow {
            color: #fff;
        }
        .dark-calendar .react-calendar__tile {
            background: transparent;
            color: #cbd5f5;
            padding: 5px 0;
            border-radius: 8px;
        }
        .dark-calendar .react-calendar__tile--now {
            background-color: rgba(255, 255, 255, 0.1);
        }
        .dark-calendar .react-calendar__tile--active {
            background: #7c3aed !important;
            color: white;
            border-radius: 8px;
        }
        .dark-calendar .react-calendar__month-view__weekdays {
            color: #94a3b8;
            text-transform: uppercase;
            font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}
