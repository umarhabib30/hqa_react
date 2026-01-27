import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/eventDetails/Details";
import EventTabs from "../components/eventDetails/EventTabs";

const EventDetailPage = () => {
  const { type, id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setEvent(null);

    if (!type || !id) {
      setLoading(false);
      setError(true);
      return;
    }

    const apiUrl =
      type === "alumni"
        ? `https://hquranacademy.com/api/alumniEvents/${id}`
        : `https://hquranacademy.com/api/ptoEvents/${id}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res.json();
      })
      .then((res) => {
        if (!res?.status || !res?.data) {
          setError(true);
          return;
        }

        const raw = res.data;

        if (!raw || !raw.id) {
          setError(true);
          return;
        }

        const startDate = new Date(raw.start_date);

        const eventObject = {
          id: raw.id,
          title: raw.title,
          subtitle: raw.description,
          description: raw.description,

          fullDate: startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          time: `${raw.start_time.slice(0, 5)} – ${raw.end_time.slice(0, 5)}`,

          startISO: `${raw.start_date.replace(
            /-/g,
            "",
          )}T${raw.start_time.replace(/:/g, "")}`,
          endISO: `${raw.end_date.replace(/-/g, "")}T${raw.end_time.replace(
            /:/g,
            "",
          )}`,

          location: raw.location,
          attendees: "0",

          mainImage: raw.event_image
            ? `https://hquranacademy.com/storage/${raw.event_image}`
            : "/event/event1.jpg",

          organizerName: raw.organizer_name,
          organizerImage: raw.organizer_logo
            ? `https://hquranacademy.com/storage/${raw.organizer_logo}`
            : "/logo.webp",

          paymentMethods: [],
          aboutContent: [raw.description],
          attendeesData: [],
        };

        setEvent(eventObject);
        setError(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type, id]);

  if (loading) {
    return <div className="p-20 text-center">Loading…</div>;
  }

  if (error || !event) {
    return (
      <div className="p-20 text-center text-red-600 text-xl">
        Event Not Found (FROM EventDetailPage)
      </div>
    );
  }

  return (
    <>
      <Details event={event} />
      <EventTabs
        aboutContent={event.aboutContent}
        attendeesData={event.attendeesData}
      />
    </>
  );
};

export default EventDetailPage;
