import React from "react";
import { ImDrawer } from "react-icons/im";
import { IoLanguageOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const LgRightSidebar = () => {
  return (
    <div className="menu p-4 rounded-2xl w-72 h-[calc(100vh-90px)] bg-white text-base-content">
      <h1 className="text-center text-xl font-semibold mt-3 mb-2">Settings</h1>
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
    </div>
  );
};

export default LgRightSidebar;
