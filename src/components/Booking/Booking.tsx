import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "../../utils/supabase";
import { useEffect } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Booking() {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isEvent, setEvent] = useState<string>("");
  const [isRem, setRem] = useState<string>("");
  const [isEventDate, setEventDate] = useState([""] as string[]);

  const fetchDate = async () => {
    const { data, error } = await supabase.from("calendar").select("date");

    if (error) {
      alert(JSON.stringify(error));
    } else {
      const eventdate = data.map((item) => item.date);
      setEventDate(eventdate);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("calendar")
      .insert({ event_name: isEvent, reminder: isRem, date: selectedDate })
      .select();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      setEvent("");
    }
  };

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
      <h2>Selected Date: {selectedDate?.toString()}</h2>
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
              <form onSubmit={handleSubmission}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Event
                    </Label>
                    <Input
                      id="event"
                      placeholder="Event name"
                      className="col-span-3"
                      value={isEvent}
                      onChange={(e) => setEvent(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Reminder
                    </Label>
                    <Select value={isRem} onValueChange={setRem}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choose time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1hr">1 hr</SelectItem>
                        <SelectItem value="2hr">2 hr</SelectItem>
                        <SelectItem value="12hr">12 hr</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save</Button>
                  <Button onClick={closeModal}>Close</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
