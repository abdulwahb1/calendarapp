import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../Form/Form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && date.getDay() === 0) {
      return <p>*</p>;
    }
    return null;
  };

  return (
    <div>
      <Calendar
        tileContent={tileContent}
        value={value}
        onChange={handleDateChange}
      />
      {showModal && (
        <div className="modal">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Event</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Event</DialogTitle>
                <DialogDescription>
                  Add events to your calender here.
                </DialogDescription>
              </DialogHeader>
              <Form />
              <DialogFooter>
                <Button type="submit">Save</Button>
                <Button onClick={closeModal}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default Booking;
