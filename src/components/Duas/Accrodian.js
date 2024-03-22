import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosReturnRight } from "react-icons/io";

const Accordion = ({
  duas,
  setSubCategory,
  uniqueSubCategories,
  uniqueTitle,
  search,
}) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <>
      <div className="rounded-lg font-sans">
        {duas.map((duas, idx) => (
          <div
            key={idx}
            className="border-b border-gray-500 last-of-type:border-none"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full justify-between py-4 text-left font-medium text-black"
            >
              <Link href={`/duas/${duas?.category}`} passHref>
                <div className="flex gap-1 items-center cursor-pointer">
                  <Image
                    src={duas?.logo}
                    alt={duas?.category}
                    width={50}
                    height={50}
                  />
                  <h5 className="font-semibold">{duas?.category}</h5>
                </div>
              </Link>
              <span className="rounded-full p-2 ">
                <svg
                  className="ml-8 mr-7 shrink-0 fill-black"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-black transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? "grid-rows-[1fr] pb-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white pr-4">
                {uniqueSubCategories?.map((cat, index) => (
                  <div
                    onClick={() => setSubCategory(cat)}
                    key={index}
                    className="collapse bg-white static collapse-arrow"
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
                          className="flex cursor-pointer gap-1 items-center text-sm hover:text-green-600"
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
