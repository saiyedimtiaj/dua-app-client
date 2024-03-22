"use client";

import { usePathname } from "next/navigation";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import profile from "@/assets/profile.svg";
import Image from "next/image";
import { FaHandHoldingHeart, FaCopyright, FaPrayingHands } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdPrivacyTip } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { ImDrawer } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="fixed top-0 left-0 lg:static h-[89px] bg-white lg:bg-inherit px-3 w-full">
        <div className="flex py-3 justify-between items-center gap-3 pt-4">
      <div>
        <div className="text-xl font-semibold lg:block hidden">
          {pathName.includes("/duas") ? <p>Duas Page</p> : <p>Home Page</p>}
        </div>
        <div className='flex items-center lg:hidden'>
            <Link href="/">
              <p className="w-[45px] py-2 text-center pl-1 rounded mx-auto cursor-pointer text-white bg-[#1fa45b]">
                <FaPrayingHands size={35} />
              </p>
            </Link>
              <h1 className="text-xl text-center">Dua & Ruqyah</h1>
          </div>
      </div>

      {/* search bar */}

      <div className="relative hidden lg:block">
        <input
          type="text"
          placeholder="Search by dua Name"
          className="px-4 bg-white max-w-80 py-2.5 rounded-sm shadow-sm border-2 bodrer-green-600"
        />
        <button className="absolute right-2 rounded top-2 p-2 bg-slate-300">
          <IoIosSearch />
        </button>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <Image alt="profile" src={profile} width={40} height={40} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex gap-3 py-2 items-center px-3 cursor-pointer">
                <FaHandHoldingHeart size={20} /> Support Us
              </div>
              <div className="flex gap-3 py-2 items-center px-3 cursor-pointer">
                <GoDownload size={20} /> Download Dua App
              </div>
              <div className="flex gap-3 py-2 items-center px-3 cursor-pointer">
                <MdPrivacyTip size={20} /> Privacy Policy
              </div>
              <div className="flex gap-3 py-2 items-center px-3 cursor-pointer">
                <FaCopyright size={20} /> Copyright Warning
              </div>
            </ul>
          </div>
          <div className="2xl:hidden">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button cursor-pointer text-[#1FA45B]"
                >
                  <IoMdSettings size={33} />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 rounded-l-2xl w-72 min-h-full bg-white text-base-content">
                  <h1 className="text-center text-xl font-semibold mt-3 mb-2">
                    Settings
                  </h1>
                  <div className="rounded border border-gray-300">
                    <div className="flex border-l-4 border-[#1FA45B] items-center mt-2 bg-[#F7F8FA] py-1 px-[2px]">
                      <p className="bg-[#E8F0F5] p-2 rounded-full text-[#1FA45B]">
                        <IoLanguageOutline size={18} />
                      </p>
                      <p className="text-[#1FA45B]">Language Settings</p>
                    </div>
                    <div className="flex items-center justify-center mt-3 gap-3 px-3 pb-3">
                      <button className="bg-[#1FA45B] text-white px-4 rounded py-2 text-xs">
                        English
                      </button>
                      <button className="text-[#1FA45B] border border-[#1FA45B] px-5 rounded py-2 text-xs">
                        বাংলা
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center rounded mt-2 bg-[#ebedf3] py-1 px-[2px]">
                      <p className="bg-[#E8F0F5] p-2 rounded-full text-[#1FA45B]">
                        <ImDrawer size={18} />
                      </p>
                      <p className="text-[#1FA45B]">General Settings</p>
                    </div>
                    <div className="flex items-center rounded mt-2 bg-[#ebedf3] py-1 px-[2px]">
                      <p className="bg-[#E8F0F5] p-2 rounded-full text-[#1FA45B]">
                        <RxDashboard size={18} />
                      </p>
                      <p className="text-[#1FA45B]">Font Settings</p>
                    </div>
                    <div className="flex items-center rounded mt-2 bg-[#ebedf3] py-1 px-[2px]">
                      <p className="bg-[#E8F0F5] p-2 rounded-full text-[#1FA45B]">
                        <RxDashboard size={18} />
                      </p>
                      <p className="text-[#1FA45B]">Affearance Settings</p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
