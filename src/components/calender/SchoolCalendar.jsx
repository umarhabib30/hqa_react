import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  getCategoriesFromEvents,
  processEventsForCalendar,
  processEventsFromApi,
} from "../../../utility/apiEvents";
import { getWeekDays } from "../../constants/calenderEvent";
import { MonthView, SingleDayList, WeekView } from "../calender/CalendarViews";
import EventModal from "../calender/EventModal";
import EventFilter from "./EventFilter";

const API_URL = "https://hquranacademy.com/api/calendarEvents";

// Loader Component
function Loader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium text-gray-700">
        Loading calendar events...
      </p>
    </div>
  );
}

export default function SchoolCalendar() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("Week");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  // API states
  const [apiEvents, setApiEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Categories
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState(new Set());

  // Fetch API events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch events");
        const json = await res.json();

        if (json.status && json.data) {
          const events = json.data;
          setApiEvents(events);

          const categories = getCategoriesFromEvents(events);
          setAllCategories(categories);
          setActiveCategories(new Set(categories));
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching calendar events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filtered & processed events
  const filteredAndProcessedEvents = useMemo(() => {
    const filtered = apiEvents.filter((event) =>
      activeCategories.has(event.category?.trim()),
    );
    return processEventsFromApi(filtered);
  }, [apiEvents, activeCategories]);

  // Group events by date
  const eventsByDay = useMemo(() => {
    return processEventsForCalendar(filteredAndProcessedEvents);
  }, [filteredAndProcessedEvents]);

  // Weekdays
  const weekDays = useMemo(() => getWeekDays(date), [date]);

  const weeklyEventsByDay = useMemo(() => {
    return weekDays.reduce((acc, d) => {
      const dayKey = dayjs(d).format("YYYY-MM-DD");
      acc[dayKey] = eventsByDay[dayKey] || [];
      return acc;
    }, {});
  }, [weekDays, eventsByDay]);

  // Category handlers
  const toggleCategory = (category) => {
    setActiveCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) newSet.delete(category);
      else newSet.add(category);
      return newSet;
    });
  };

  const selectAllCategories = () => setActiveCategories(new Set(allCategories));
  const deselectAllCategories = () => setActiveCategories(new Set());

  // Calendar handlers
  const handleDayChange = (newDate) => {
    const dayKey = dayjs(newDate).format("YYYY-MM-DD");

    if (view === "Week") {
      setSelectedDay(selectedDay === dayKey ? null : dayKey);
    } else if (view === "Month") {
      setView("Day");
      setSelectedDay(dayKey);
      setDate(newDate);
    } else {
      setDate(newDate);
      setSelectedDay(dayKey);
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
    if (newView === "Day") setSelectedDay(dayjs(date).format("YYYY-MM-DD"));
  };

  const showEventDetails = (event) => setSelectedEvent(event);
  const closeEventDetails = () => setSelectedEvent(null);

  // Day/Week data for rendering
  const dayKeyToDisplay = selectedDay || dayjs(date).format("YYYY-MM-DD");
  const singleDayEvents =
    selectedDay || view === "Day" ? eventsByDay[dayKeyToDisplay] || [] : [];
  const selectedDayLabel = dayjs(dayKeyToDisplay).format("dddd, MMM D, YYYY");
  const isSingleDayList = selectedDay !== null || view === "Day";
  const showMobileSidebar = !(isSingleDayList && view === "Day");

  const currentMonthYear = dayjs(date).format("MMMM, YYYY");

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4 font-serif">
      <div className="mx-auto flex flex-col lg:flex-row max-w-9xl gap-4">
        {/* LEFT SIDEBAR */}
        <aside
          className={`${
            showMobileSidebar ? "block" : "hidden"
          } lg:block w-full lg:w-[28%] rounded-2xl bg-[#00285e] p-4 text-white shadow-lg flex-shrink-0`}
        >
          <div className="mb-6 rounded-xl bg-[#020617] p-3">
            <Calendar
              onChange={handleDayChange}
              value={date}
              className="dark-calendar"
            />
          </div>

          <EventFilter
            allCategories={allCategories}
            activeCategories={activeCategories}
            onToggle={toggleCategory}
            onSelectAll={selectAllCategories}
            onDeselectAll={deselectAllCategories}
          />
        </aside>

        {/* RIGHT SIDE - Main Calendar */}
        <main className="w-full lg:w-[72%] rounded-2xl bg-white p-4 md:p-6 shadow-[0_0_15px_rgba(0,0,0,0.4)] flex-1">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <h2 className="text-lg font-semibold">{currentMonthYear}</h2>
            <div className="flex gap-2 rounded-xl bg-gray-100 p-1 order-3 sm:order-none">
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
            <div className="flex items-center gap-2 order-2 sm:order-none">
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

          {/* Calendar Views */}
          {view === "Month" ? (
            <MonthView
              currentDate={date}
              eventsByDay={eventsByDay}
              onDayClick={handleDayChange}
              showEventDetails={showEventDetails}
            />
          ) : isSingleDayList ? (
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
        </main>
      </div>

      <EventModal event={selectedEvent} onClose={closeEventDetails} />

      {/* Custom calendar styles */}
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
          color: #fff;
          padding: 5px 0;
          border-radius: 8px;
        }
        .dark-calendar .react-calendar__tile:hover {
          background-color: rgba(60, 150, 255, 0.2) !important;
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
          color: #ffffff;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}
