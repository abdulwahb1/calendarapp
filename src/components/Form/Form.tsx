import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactDOM from "react-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

const Form = () => {
  const [isEvent, setEvent] = useState<string[]>([]);

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEvent([...isEvent]);
  };

  return (
    <form>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Event
          </Label>
          <Input id="event" placeholder="Event name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Reminder
          </Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1 hr" />
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
      </DialogFooter>
    </form>
  );
};

export default Form;
