import React from "react";
import Booking from "@/components/Booking/Booking";

const BookingPage = () => {
  return (
    <section className="flex">
      <div className=" w-2/12 bg-[#d7d8f7] min-h-screen"></div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <Booking />
      </div>
    </section>
  );
};

export default BookingPage;
