import CategorySidebar from "@/components/Duas/CategorySidebar";
import Duas from "@/components/Duas/Duas";


const page = () => {
    return (
        <div className="lg:flex block gap-3">
            <div><CategorySidebar/></div>
            <div className="mt-3 h-[calc(100vh-190px)] lg:mt-0 lg:h-[calc(100vh-100px)] overflow-y-auto">
               <Duas/>
            </div>
        </div>
    );
};

export default page;