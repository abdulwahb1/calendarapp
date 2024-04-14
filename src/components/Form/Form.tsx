import React from "react";
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

const Form = () => {
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
              <SelectItem value="light">1 hr</SelectItem>
              <SelectItem value="dark">2 hr</SelectItem>
              <SelectItem value="system">12 hr</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
};

export default Form;
