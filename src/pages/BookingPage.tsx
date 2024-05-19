import React from "react";
import { Booking, SideNavbar, Calendar } from "@/components";

const BookingPage = () => {
  return (
    <section className="flex">
      <div className="flex justify-center items-center">
        <SideNavbar />
      </div>
      <div className="flex">
        {/* <Booking /> */}
        <Calendar />
      </div>
    </section>
  );
};

export default BookingPage;
