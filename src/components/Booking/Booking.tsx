import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../Form/Form";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
function Booking() {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (value: Value) => {
    onChange(value);
    setSelectedDate(Array.isArray(value) ? value[0] : value);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Calendar value={value} onChange={handleDateChange} />
      {showModal && (
        <div className="modal">
          <h2>Selected Date: {selectedDate?.toString()}</h2>
          <Form />
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Booking;
