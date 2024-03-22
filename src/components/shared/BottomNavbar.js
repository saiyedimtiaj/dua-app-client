import { RxDashboard } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";

const BottomNavbar = () => {
  return (
    <div className="flex fixed bottom-0 left-0 justify-between w-full px-4 rounded-t-3xl shadow-2xl bg-[#d5d8de] py-4">
      <p className="cursor-pointer p-2 bg-white rounded-2xl"><RxDashboard /></p>
      <p className="cursor-pointer p-2 bg-white rounded-2xl"><FaHome /></p>
      <p className="cursor-pointer p-2 bg-white rounded-2xl"><HiOutlineLightBulb /></p>
      <p className="cursor-pointer p-2 bg-white rounded-2xl"><IoBookmarkOutline /></p>
      <p className="cursor-pointer p-2 bg-white rounded-2xl"><MdVideoCall /></p>
    </div>
  );
};

export default BottomNavbar;
