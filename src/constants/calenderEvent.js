import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);


export const EVENT_CATEGORIES = [
  "Academic Events",
  "Admission Events",
  "Alumni, Parents & Families",
  "Athletics",
  "College Counseling",
  "Student Life",
  "School Administration",
];


export const getWeekDays = (date) => {
  const startOfWeek = dayjs(date).startOf("week").weekday(0);
  return Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day").toDate(),
  );
};
