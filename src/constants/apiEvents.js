import dayjs from "dayjs";

/**
 * CATEGORY → COLOR MAP
 */
const CATEGORY_COLORS = {
  Childrens: "bg-pink-200",
  Adult: "bg-indigo-200",
  "Academic Events": "bg-green-600",
  "Admission Events": "bg-blue-600",
  "Alumni, Parents & Families": "bg-purple-600",
  Athletics: "bg-emerald-600",
  "College Counseling": "bg-yellow-600",
  "Student Life": "bg-rose-600",
  "School Administration": "bg-slate-600",
  Default: "bg-gray-600",
};

/**
 * Extract categories dynamically from API
 */
export const getCategoriesFromEvents = (events) => {
  const set = new Set();
  events.forEach((e) => {
    if (e.category) set.add(e.category.trim());
  });
  return Array.from(set);
};

/**
 * Convert API events → Calendar-ready events
 */
export const processEventsFromApi = (events) => {
  return events.flatMap((event) => {
    const startDate = dayjs(event.start_date);
    const endDate = dayjs(event.end_date);

    const days = [];
    let current = startDate;

    while (current.isSameOrBefore(endDate, "day")) {
      days.push({
        id: `${event.id}-${current.format("YYYY-MM-DD")}`,
        title: event.title,
        date: current.format("YYYY-MM-DD"),

        time:
          event.start_time && event.end_time
            ? `${dayjs(event.start_time, "HH:mm:ss").format("hh:mm A")} - ${dayjs(
                event.end_time,
                "HH:mm:ss",
              ).format("hh:mm A")}`
            : "All Day",

        location: event.location || "Not specified",
        details: event.description || "",
        category: event.category?.trim(),

        color: CATEGORY_COLORS[event.category] || CATEGORY_COLORS.Default,
      });

      current = current.add(1, "day");
    }

    return days;
  });
};

/**
 * Group events by YYYY-MM-DD
 */
export const processEventsForCalendar = (events) => {
  return events.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = [];
    acc[event.date].push(event);
    return acc;
  }, {});
};
