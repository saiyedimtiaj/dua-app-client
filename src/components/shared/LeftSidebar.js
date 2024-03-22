"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { FaHandHoldingHeart, FaPrayingHands } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";

const LeftSidebar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const updateSidebarState = () => {
      if (pathName && !pathName.includes("/duas")) {
        setOpen(true);
      }
    };
    updateSidebarState(); 

    return () => {
      setOpen(false);
    };
  }, [pathName]); 

  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "All Duas", link: "/alldua", icon: MdOutlineDashboard },
  ];

  return (
    <>
      <div
        className={`bg-[#ffffff] ${
          open ? "w-72" : "w-16"
        } text-black rounded-md px-4 flex flex-col justify-between min-h-[calc(100vh-32px)]`}
      >
        <div className="mb-2 space-y-1 pt-2">
          <Link
            href="/"
            className={
              !pathName.includes("/duas")
                ? "hidden"
                : `group flex items-center text-sm gap-3.5 font-medium px-2 py-2 bg-[#1FA45B] text-white rounded-md`
            }
          >
            <div>
              <FaPrayingHands size={22} />
            </div>
          </Link>
          <div className={!pathName.includes("/duas") ? "block" : "hidden"}>
            <Link href="/">
              <p className="w-[55px] py-2 text-center pl-1 rounded mx-auto cursor-pointer text-white bg-[#1fa45b]">
                <FaPrayingHands size={45} />
              </p>
            </Link>
            <h1 className="text-xl text-center">Dua & Ruqyah</h1>
          </div>
        </div>
        <div>
          <div className="mt-4 flex flex-col gap-2 relative">
            {menus.map((menu, i) => (
              <Link
                href={menu?.link}
                key={i}
                className={`flex items-center text-sm gap-3.5 font-medium py-2 px-2 bg-[#E8F0F5] rounded-md`}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  className={`${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-2 space-y-1">
          <div
            className={`group flex items-center text-sm gap-3.5 font-medium px-2 py-2 bg-[#1FA45B] text-white rounded-md`}
          >
            <div>
              <FaHandHoldingHeart size={22} />
            </div>
            <h2
              className={`${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Support
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
