import React from "react";
import { Booking, SideNavbar } from "@/components";

const BookingPage = () => {
  return (
    <section className="flex">
      <div className="flex justify-center items-center">
        <SideNavbar />
      </div>
      <div className="flex flex-col justify-center mx-auto">
        <Booking />
      </div>
    </section>
  );
};

export default BookingPage;
