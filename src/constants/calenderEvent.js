// calenderEvent.js
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

// --- CONSTANT: Event Categories ---
export const EVENT_CATEGORIES = [
  "Academic Events",
  "Admission Events",
  // "Admissions Fairs & Travel",
  "Alumni, Parents & Families",
  "Athletics",
  "College Counseling",
  // "D'Amour Center for Faith, Service & Justice",
  // "Social Justice Series",
  "Student Life",
  "School Administration",
];

// --- DUMMY EVENT DATA (WITH CATEGORY) ---
export const DUMMY_EVENTS = [
  // Sunday, December 14, 2025 (Regular School Day/Weekend Prep)
  {
    id: 1,
    date: "2025-12-14",
    title: "Hifdh Review & Testing Prep",
    time: "07:00 - 09:00",
    color: "bg-green-300",
    category: "Academic Events",
    details:
      "Advanced Hifdh students meet for final review session before MOY testing period begins. Focus on Surah Al-Baqarah.",
    location: "Online (Zoom link for group)",
    link: "https://hqa-hifdh.zoom.us/j/14122025",
    formLink: null,
  },
  {
    id: 2,
    date: "2025-12-14",
    title: "Parent-Teacher Sign-ups",
    time: "09:30 - 11:00",
    color: "bg-blue-300",
    category: "Alumni, Parents & Families",
    details:
      "Open window for parents to select slots for mid-term conferences (Jan 28). Slots are limited.",
    location: "Virtual (Admin Portal)",
    link: null,
    formLink: "https://hqa.edu/forms/ptc-signup",
  },
  {
    id: 3,
    date: "2025-12-14",
    title: "Islamic Studies Teachers Meet",
    time: "15:00 - 16:30",
    color: "bg-purple-300",
    category: "School Administration",
    details:
      "Department meeting to finalize curriculum progress reports and plan for the new year curriculum.",
    location: "Admin Office, Room 4",
    link: null,
    formLink: null,
  },

  // Monday, December 15, 2025 (MOY Testing Week Starts)
  {
    id: 4,
    date: "2025-12-15",
    title: "MOY IOWA Testing - Gr 3-5",
    time: "08:00 - 10:30",
    color: "bg-red-300",
    category: "Academic Events",
    details:
      "Morning session for Middle of Year IOWA testing. Students must arrive on time with two #2 pencils.",
    location: "School Gym (Testing Center)",
    link: null,
    formLink: null,
  },
  {
    id: 5,
    date: "2025-12-15",
    title: "Tajweed Workshop (Gr K-2)",
    time: "11:00 - 12:00",
    color: "bg-amber-300",
    category: "Academic Events",
    details:
      "Foundational Tajweed class focused on correct articulation of Madd letters.",
    location: "Classroom 1B",
    link: null,
    formLink: null,
  },
  {
    id: 6,
    date: "2025-12-15",
    title: "School Board Meeting (Q4)",
    time: "18:00 - 20:00",
    color: "bg-blue-400",
    category: "School Administration",
    details:
      "Quarterly School Board Meeting. Key agenda: 2026 Budget Approval and Accreditation Report.",
    location: "School Auditorium",
    link: null,
    formLink: null,
  },

  // Tuesday, December 16, 2025
  {
    id: 7,
    date: "2025-12-16",
    title: "MOY MAP Testing - Gr 6-8",
    time: "08:00 - 10:30",
    color: "bg-red-300",
    category: "Academic Events",
    details:
      "Middle of Year MAP testing session for Middle School students. Bring fully charged device.",
    location: "Computer Lab 3",
    link: null,
    formLink: null,
  },
  {
    id: 8,
    date: "2025-12-16",
    title: "Quran Club: Sura Kahf Recitation",
    time: "15:30 - 16:30",
    color: "bg-purple-300",
    category: "D'Amour Center for Faith, Service & Justice",
    details:
      "Weekly recitation and reflection on Sura Al-Kahf. All students and staff welcome.",
    location: "School Masjid",
    link: null,
    formLink: null,
  },
  {
    id: 9,
    date: "2025-12-16",
    title: "Athletics Practice: Basketball",
    time: "17:00 - 18:30",
    color: "bg-green-400",
    category: "Athletics",
    details: "Varsity team basketball practice and drills.",
    location: "School Gym",
    link: null,
    formLink: null,
  },
  // Dec 1st
  {
    id: 10,
    date: "2025-12-01",
    title: "Monthly Budget Review",
    time: "14:00 - 15:00",
    color: "bg-red-300",
    category: "School Administration",
    details: "Finance review for December expenditures.",
    location: "Office",
    link: null,
    formLink: null,
  },
  {
    id: 11,
    date: "2025-12-01",
    title: "Staff Check-in",
    time: "15:30 - 16:00",
    color: "bg-pink-400",
    attendees: 2,
    category: "School Administration",
    details: "Quick check-in with lead staff members.",
    location: "Office",
    link: null,
    formLink: null,
  },
  // Friday, December 19, 2025
  {
    id: 13,
    date: "2025-12-19",
    title: "Semester 1 Final Day",
    time: "08:00 - 11:00",
    color: "bg-red-400",
    category: "Academic Events",
    details:
      "Last day of the first semester. Early dismissal for all grades at 11:00 AM.",
    location: "School Wide",
    link: null,
    formLink: null,
  },
  {
    id: 14,
    date: "2025-12-19",
    title: "Jumu'ah Prayer",
    time: "12:30 - 13:30",
    color: "bg-white border border-gray-400 shadow-sm",
    category: "D'Amour Center for Faith, Service & Justice",
    details:
      "Weekly congregational prayer. Guest speaker on 'Preparing for Ramadan'.",
    location: "School Masjid",
    link: null,
    formLink: null,
  },
  // Sunday, December 21, 2025 (Start of a Holy Month/Break)
  {
    id: 15,
    date: "2025-12-21",
    title: "Beginning of Rajab (1447H)",
    time: "All Day",
    color: "bg-yellow-300",
    category: "D'Amour Center for Faith, Service & Justice",
    details:
      "Beginning of the Islamic month of Rajab. Recommended fasting for the day.",
    location: "Community Event",
    link: null,
    formLink: null,
  },
  // Tuesday, December 23, 2025
  {
    id: 16,
    date: "2025-12-23",
    title: "WINTER BREAK Begins",
    time: "All Day",
    color: "bg-pink-400",
    category: "Student Life",
    details:
      "School is closed for Winter Break. Classes resume on Monday, January 5, 2026.",
    location: "School Closed",
    link: null,
    formLink: null,
  },
];

// --- HELPER FUNCTIONS ---

/**
 * Processes a flat list of events into an object grouped by date (YYYY-MM-DD).
 * @param {Array} events - The array of events (already filtered).
 * @returns {Object} Events grouped by date.
 */
export const processEvents = (events) => {
  // Sort events by time before grouping
  const sortedEvents = events.sort((a, b) => {
    const timeA = dayjs(a.time.split(" - ")[0], "HH:mm");
    const timeB = dayjs(b.time.split(" - ")[0], "HH:mm");
    return timeA.valueOf() - timeB.valueOf();
  });

  return sortedEvents.reduce((acc, event) => {
    const dayKey = event.date; // event.date is already in 'YYYY-MM-DD' format
    if (!acc[dayKey]) {
      acc[dayKey] = [];
    }
    acc[dayKey].push(event);
    return acc;
  }, {});
};

/**
 * Gets the seven days of the week starting from the Sunday of the given date's week.
 * @param {Date} date - The reference date.
 * @returns {Array<Date>} An array of 7 Date objects.
 */
export const getWeekDays = (date) => {
  const startOfWeek = dayjs(date).startOf("week").weekday(0); // Ensure week starts on Sunday (weekday 0)
  return Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day").toDate()
  );
};
