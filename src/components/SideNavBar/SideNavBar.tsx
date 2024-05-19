import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const SideNavBar = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <section className="flex flex-col">
      <div className="bg-[#d7d8f7] max-w-[300px] min-h-screen flex">
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col">
            <div className="flex items-center justify-center mb-5">
              <Image
                src="/user.png"
                width={64}
                height={64}
                alt="user profile picture"
              />
            </div>
            <div className="font-bold">
              <p>Abdul Wahab</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-36 max-w-[280px] min-w-[220px]">
            <div className="flex flex-col">
              <div
                className={`flex items-center justify-center min-w-[220px] min-h-16 ${
                  isActive("/BookingPage")
                    ? "bg-[#f2f2ff] text-[#496bff] font-normal"
                    : "text-gray-500"
                }`}
              >
                <div>
                  <Image
                    src="/calendaricon.png"
                    width={16}
                    height={16}
                    alt="calendar"
                  />
                </div>
                <div className="ml-3">
                  <Link href="/">
                    <span className=" text-sm hover:text-[#5b77fc] hover:font-semibold hover:text-md">
                      Calendar
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className={`text-[#5b77fc] flex items-center justify-center min-w-[220px] min-h-16 ease-in ${
                  isActive("/") ? "bg-[#f2f2ff]" : "text-gray-500"
                }`}
              >
                <Link href="/">
                  <span className="text-sm hover:text-[#5b77fc] hover:font-semibold hover:text-md">
                    Holiday
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideNavBar;
