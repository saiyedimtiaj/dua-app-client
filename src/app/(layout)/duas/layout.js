import CategorySidebar from "@/components/Duas/CategorySidebar";


const layout = ({children}) => {
    return (
        <div className="lg:flex block gap-3">
        <div><CategorySidebar/></div>
        <div className="mt-3 h-[calc(100vh-190px)] lg:mt-0 lg:h-[calc(100vh-100px)] overflow-y-auto">
           {children}
        </div>
    </div>
    );
};

export default layout;