import React, { useState } from "react";
import ReservationSection from "../components/reservation/ReservationSection";
import AllAvailableTables from "../components/reservation/AllAvailableTables";

const Reservation = () => {
  const [selectedSeats, setSelectedSeats] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [event, setEvent] = useState(null);

  return (
    <div>
      <ReservationSection
        onChange={({ seats, total, event }) => {
          setSelectedSeats(seats);
          setTotalAmount(total);
          setEvent(event);
        }}
      />

      <AllAvailableTables
        selectedSeats={selectedSeats}
        totalAmount={totalAmount}
        event={event}
      />
    </div>
  );
};

export default Reservation;
