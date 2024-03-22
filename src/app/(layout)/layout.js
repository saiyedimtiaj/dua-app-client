import BottomNavbar from "@/components/shared/BottomNavbar";
import Header from "@/components/shared/Header";
import LeftSidebar from "@/components/shared/LeftSidebar";
import LgRightSidebar from "@/components/shared/LgRightSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex lg:px-3 gap-3 text-black">
      <div className="py-4 hidden lg:block">
        <LeftSidebar />
      </div>
      <div className="w-full">
        <div>
          <Header />
        </div>
        <div className="flex gap-3 ">
          <div className="w-full lg:mt-0 mt-[89px]">
            <div>{children}</div>
            <div className="lg:hidden">
              <BottomNavbar/>
            </div>
          </div>
          <div className="2xl:block hidden">
            <LgRightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
