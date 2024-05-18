import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";
import Image from "next/image";

const SideNavBar = () => {
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
          <div className="flex justify-center items-center mt-36">
            <Sidebar backgroundColor="none" width="210px">
              <Menu>
                <MenuItem component={<Link href="/calendar" />}>
                  {" "}
                  Calendar
                </MenuItem>
                <MenuItem component={<Link href="/calendar" />}>
                  {" "}
                  Holiday
                </MenuItem>
                <MenuItem component={<Link href="/e-commerce" />}>
                  {" "}
                  Events
                </MenuItem>
              </Menu>
            </Sidebar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideNavBar;
