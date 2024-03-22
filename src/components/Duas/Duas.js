"use client";

import UseAxios from "@/Hooks/UseAxios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaCopy, FaBookmark, FaRegLightbulb, FaShareAlt } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./style.css";
import { Modal } from "./Modal";

const Duas = () => {
  const serachParams = useSearchParams();
  const search = serachParams.get("cat");
  const axios = UseAxios();
  const [duas, setDuas] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [id, SetId] = useState("");

  useEffect(() => {
    axios.get(`/duas?category=${search}`).then((res) => {
      setDuas(res.data);
    });
  }, [search,axios]);

  const handelToast = () => {
    toast.success("Comming Soon In Sha Allah", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handelCopy = (dua) => {
    const body = `${dua?.category || ""}\n${dua?.subCategory || ""}\n${
      dua?.name || ""
    }\n${dua?.title || ""}\n${dua?.aribicDua || ""}\n${
      dua?.Transliteration || ""
    }\n${dua?.Translation || ""}\n${dua?.reference || ""}`;
    navigator.clipboard.writeText(body);
    toast.success("Copied", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleBookmark = (id) => {
    setOpenModal(true);
    SetId(id);
  };

  useEffect(() => {
    const bookmarkData = localStorage.getItem("bookmark");
    if (bookmarkData) {
      const bookmarkDataParsed = JSON.parse(bookmarkData);
      setBookMark(bookmarkDataParsed);
    }
  }, [setBookMark,bookMark]);

  return (
    <div className="w-full space-y-5 transition-all duration-300 ease-in-out mb-[70px] lg:mb-5">
      {duas?.map((dua, index) => (
        <section
          id={dua?.name}
          key={dua?._id}
          className="bg-white p-3 rounded-md"
        >
          <div className="flex gap-2 items-center">
            <Image
              src="https://i.ibb.co/m6nk7YL/Captur2e.png"
              alt="allah"
              width={25}
              height={25}
            />
            <h4 className="text-[#23A65E]">
              {index + 1}.{dua?.name}
            </h4>
          </div>
          <h6 className="mt-5">{dua?.title}</h6>
          <h2 className="text-right mt-4 text-3xl">{dua?.aribicDua}</h2>
          <p className={dua?.Transliteration ? "mt-3" : "hidden"}>
            <span className="font-medium">Transliteration: </span>
            {dua?.Transliteration}
          </p>
          <p className={dua?.Translation ? "mt-3" : "hidden"}>
            <span className="font-medium">Translation: </span>
            {dua?.Translation}
          </p>
          <div className="mt-3">
            <p className="text-[#23A65E]">Reference:</p>
            <p className="text-lg">{dua?.reference}</p>
          </div>
          <div className="flex static flex-col md:flex-row gap-y-6 justify-between gap-2 items-center mt-3">
            <div className="static top-0 left-0">
              <AudioPlayer
                src="https://server8.mp3quran.net/afs/112.mp3"
                showDownloadProgress={false}
                onPlay={(e) => console.log("onPlay")}
              />
            </div>
            <div className="flex gap-6 text-[#797373] items-center">
              <span onClick={() => handelCopy(dua)} className="cursor-pointer">
                <FaCopy size={25} />
              </span>
              {bookMark && bookMark.some((book) => book.id === dua?._id) ? (
                <span className="cursor-pointer text-[#23A65E]">
                  <FaBookmark size={25} />
                </span>
              ) : (
                <span
                  onClick={() => handleBookmark(dua?._id)}
                  className="cursor-pointer"
                >
                  <FaBookmark size={25} />
                </span>
              )}
              <span onClick={handelToast} className="cursor-pointer">
                <FaRegLightbulb size={25} />
              </span>
              <span onClick={handelToast} className="cursor-pointer">
                <FaShareAlt size={25} />
              </span>
              <span onClick={handelToast} className="cursor-pointer">
                <MdOutlineReport size={25} />
              </span>
            </div>
          </div>
          <Modal id={id} setOpenModal={setOpenModal} openModal={openModal} />
          <Toaster position="bottom-center" reverseOrder={false} />
        </section>
      ))}
    </div>
  );
};

export default Duas;
