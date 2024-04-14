// This is the main page of the app. It should render the Booking component.
import Booking from "@/components/Booking/Booking";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <div>
        <h1>My Calendar App</h1>
        <Booking /> {/* Use the Calendar component */}
      </div>
    </section>
  );
}
