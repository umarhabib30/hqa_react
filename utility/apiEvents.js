// utility/apiEvents.js
import md5 from "crypto-js/md5"; // ← Add this dependency: npm install crypto-js
import dayjs from "dayjs";

// Soft color palette (15 different light colors)
const COLOR_PALETTE = [
  "bg-blue-100",
  "bg-green-100",
  "bg-purple-100",
  "bg-orange-100",
  "bg-pink-100",
  "bg-yellow-100",
  "bg-teal-100",
  "bg-indigo-100",
  "bg-red-100",
  "bg-cyan-100",
  "bg-lime-100",
  "bg-amber-100",
  "bg-violet-100",
  "bg-rose-100",
  "bg-emerald-100",
];

// Consistent hash → color index
const getColorIndex = (str) => {
  const hash = md5(str.toString()).toString();
  const hashInt = parseInt(hash.substr(0, 8), 16);
  return Math.abs(hashInt) % COLOR_PALETTE.length;
};

export const processEventsFromApi = (apiEvents) => {
  return apiEvents
    .map((apiEvent) => {
      const startDate = dayjs(apiEvent.start_date);
      const endDate = dayjs(apiEvent.end_date);

      // Generate all dates the event spans
      const dates = [];
      let current = startDate;
      while (current.isBefore(endDate) || current.isSame(endDate, "day")) {
        dates.push(current.format("YYYY-MM-DD"));
        current = current.add(1, "day");
      }

      const startTime = apiEvent.start_time.slice(0, 5);
      const endTime = apiEvent.end_time.slice(0, 5);
      const time =
        apiEvent.start_time === apiEvent.end_time
          ? startTime
          : `${startTime} - ${endTime}`;

      const category = apiEvent.category?.trim() || "Uncategorized";

      // Base event object (shared properties)
      const baseEvent = {
        id: apiEvent.id,
        title: apiEvent.title,
        details: apiEvent.description || "No additional details provided.",
        category,
        time,
        location: apiEvent.location || "Not specified",
        date: startDate.toDate(), // for modal
      };

      // Create one event object PER DATE with unique color
      return dates.map((dateKey) => ({
        ...baseEvent,
        dateKey, // the specific YYYY-MM-DD this instance is on
        color: COLOR_PALETTE[getColorIndex(`${apiEvent.id}-${dateKey}`)], // ← Unique per day!
      }));
    })
    .flat(); // flatten array of arrays → single array of event instances
};

export const processEventsForCalendar = (processedEvents) => {
  const eventsByDay = {};

  processedEvents.forEach((event) => {
    if (!eventsByDay[event.dateKey]) {
      eventsByDay[event.dateKey] = [];
    }
    eventsByDay[event.dateKey].push(event);
  });

  return eventsByDay;
};

export const getCategoriesFromEvents = (apiEvents) => {
  const categories = new Set();
  apiEvents.forEach((event) => {
    const cat = event.category?.trim();
    if (cat) categories.add(cat);
  });
  if (categories.size === 0) categories.add("Uncategorized");
  return Array.from(categories).sort();
};
