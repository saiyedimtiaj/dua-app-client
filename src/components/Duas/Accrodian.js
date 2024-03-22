"use client"
import Image from "next/image";
import Link from "next/link";
import { IoIosReturnRight } from "react-icons/io";

const Accordion = ({
  duas,
  setSubCategory,
  uniqueSubCategories,
  uniqueTitle,
  search,
}) => {
  return (
    <div className="collapse static mt-2 bg-base-200 rounded-none">
      <input
        type="radio"
        name="my-accordion-1"
        defaultChecked={search === duas?.category}
      />
      <div className="collapse-title static py-1 pl-1 pr-1 ">
        <Link href={`/duas?cat=${duas?.category}`} passHref>
          <div className="flex gap-1 items-center cursor-pointer">
            <Image src={duas?.logo} alt={duas?.category} width={50} height={50} />
            <h5 className="font-semibold">{duas?.category}</h5>
          </div>
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
  );
};

export default Accordion;
