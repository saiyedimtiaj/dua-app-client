"use client";

import { MdMenu } from "react-icons/md";
import { IoIosReturnRight } from "react-icons/io";
import { useEffect, useState } from "react";
import UseAxios from "@/Hooks/UseAxios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CategorySidebar = () => {
  const serachParams = useSearchParams();
  const [search,setSearch] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [sebCategory, setSubCategory] = useState("");
  const [duas, setDuas] = useState();
  const axios = UseAxios();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 1020) {
      setIsDrawerOpen(false);
    }
  }, [isDrawerOpen, setIsDrawerOpen]);

  useEffect(() => {
    axios.get("/duas").then((res) => {
      setDuas(res.data);
    });
  }, []);

  useEffect(()=>{
    const searchQuery = serachParams.get("cat");
    setSearch(searchQuery)
  },[setSearch])

  const categoryLogosArray = [];
  duas?.forEach((item) => {
    const existingCategory = categoryLogosArray.find(
      (entry) => entry.category === item.category
    );
    if (!existingCategory) {
      categoryLogosArray.push({ category: item.category, logo: item.logo });
    }
  });

  const filterData = categoryLogosArray?.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.category.toLowerCase().includes(inputText);
    }
  });

  const uniqueSubCategories = duas
    ?.filter((item) => item?.category === search)
    .map((item) => item?.subCategory)
    .filter((subCategory, index, self) => self.indexOf(subCategory) === index);

  const uniqueTitle = duas
    ?.filter((item) => item?.subCategory === sebCategory)
    .map((item) => item?.name);

  return (
    <>
      <div className="w-72 hidden bg-white lg:block p-3 border-b">
        <div>
          <h1 className="text-center bg-[#1FA45B] py-3 text-lg font-medium text-white">
            Categories
          </h1>
        </div>
        <div className="mt-2">
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value.toLowerCase())}
            placeholder="Search Categories"
            className="border pl-5 pr-2 border-gray-500 w-full py-2 rounded-md"
          />
        </div>
      </div>
      <div className={`drawer static ${isDrawerOpen ? "lg:drawer-open" : ""}`}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center bg-white mt-3 lg:mt-0 gap-3 py-3 px-3 lg:px-0">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button cursor-pointer my-3 lg:hidden"
          >
            <MdMenu size={22} />
          </label>
          <span className="lg:hidden">Dua's importance</span>
        </div>
        <div
          className={`drawer-side lg:hidden h-screen mx-0 px-0 ${
            isDrawerOpen ? "" : "lg:hidden "
          }`}
        >
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleDrawer}
          ></label>
          <div className="menu w-72 min-h-screen bg-white mx-0 ">
            <div className="space-y-2 overflow-y-auto h-screen bg-white mx-0 ">
              {filterData?.map((duas, index) => (
                <div
                  key={index}
                  className="collapse static mt-2 bg-base-200 rounded-none"
                >
                  <input
                    type="radio"
                    name="my-accordion-1"
                    defaultChecked={search === duas?.category}
                  />
                  <div className="collapse-title static py-1 pl-1 pr-1 ">
                    <Link
                      href={`/duas?cat=${duas?.category}`}
                      className="flex gap-1 items-center"
                    >
                      <Image
                        src={duas?.logo}
                        alt={duas?.category}
                        width={50}
                        height={50}
                      />
                      <h5 className="font-semibold">{duas?.category}</h5>
                    </Link>
                  </div>
                  <div className="collapse-content space-y-2">
                    {uniqueSubCategories?.map((cat, index) => (
                      <div
                        onClick={() => setSubCategory(cat)}
                        key={index}
                        className="collapse static collapse-arrow bg-base-200"
                      >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title static pt-1 pb-0 px-0 font-medium text-[14px]">
                          {cat}
                        </div>
                        <div className="collapse-content space-y-3">
                          {uniqueTitle?.map((name, index) => (
                            <a
                              href={`#${name}`}
                              key={index}
                              className="flex cursor-pointer gap-1 items-center text-xs hover:text-blue-500"
                            >
                              <span>
                                <IoIosReturnRight />
                              </span>
                              <span>{name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* lg sidebar */}
        <div className="w-72 hidden lg:block px-2 space-y-2 overflow-y-auto h-[calc(100vh-225px)] bg-white mx-0 ">
          {filterData?.map((duas, index) => (
            <div
              key={index}
              className="collapse static mt-2 bg-base-200 rounded-none"
            >
              <input
                type="radio"
                name="my-accordion-1"
                defaultChecked={search === duas?.category}
              />
              <div className="collapse-title static py-1 pl-1 pr-1 ">
                <Link
                  href={`/duas?cat=${duas?.category}`}
                  className="flex gap-1 items-center"
                >
                  <Image
                    src={duas?.logo}
                    alt={duas?.category}
                    width={50}
                    height={50}
                  />
                  <h5 className="font-semibold">{duas?.category}</h5>
                </Link>
              </div>
              <div className="collapse-content space-y-2">
                {uniqueSubCategories?.map((cat, index) => (
                  <div
                    onClick={() => setSubCategory(cat)}
                    key={index}
                    className="collapse static collapse-arrow bg-base-200"
                  >
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title static pt-1 pb-0 px-0 font-medium text-[14px]">
                      {cat}
                    </div>
                    <div className="collapse-content space-y-3">
                      {uniqueTitle?.map((name, index) => (
                        <a
                          href={`#${name}`}
                          key={index}
                          className="flex cursor-pointer gap-1 items-center text-xs hover:text-blue-500"
                        >
                          <span>
                            <IoIosReturnRight />
                          </span>
                          <span>{name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* lg sidebar */}
      </div>
    </>
  );
};

export default CategorySidebar;
