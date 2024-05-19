import React from "react";

const Calendar = () => {
  return (
    <section className="flex">
      <div className="bg-[#d7d8f7] min-w-[400px] min-h-screen z-10"></div>
      <div className="flex">
        {/* <div className="relative w-64 min-h-screen overflow-hidden">
          <div className="bg-pink-500 w-64 h-full rounded-r-full absolute right-0"></div>
        </div> */}
        <div className="relative w-[300px] min-h-[500px] overflow-hidden -ml-[26rem]">
          <div className="bg-white w-[900px] h-[900px] rounded-l-full absolute left-0 z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
