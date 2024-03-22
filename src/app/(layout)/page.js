import UseAxios from "@/Hooks/UseAxios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const axios = UseAxios();
  const response = await axios.get("/duas");
  const duas = response.data;

  const categoryLogosArray = [];
  duas?.forEach((item) => {
    const existingCategory = categoryLogosArray.find(
      (entry) => entry.category === item.category
    );
    if (!existingCategory) {
      categoryLogosArray.push({ category: item.category, logo: item.logo });
    }
  });

  return (
    <div>
      <div>
        <Image
          className="w-full h-[250px] rounded-3xl object-cover static px-3"
          src="https://i.ibb.co/QmtN5T1/pngislamic-images-22783.png"
          alt="banner"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-xl font-semibold my-2">Categories Of Dua :</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-20 md:pb-0">
        {categoryLogosArray?.map((data, index) => (
          <Link
            href={`/duas/${data?.category}`}
            key={index}
            className="flex bg-white px-3 py-3 rounded-md items-center gap-2"
          >
            <Image
              className="rounded-md"
              src={data?.logo}
              alt={data?.category}
              width={40}
              height={40}
            />
            <h5 className="font-semibold">{data?.category}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
