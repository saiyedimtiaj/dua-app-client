import { useState } from "react";

export const Modal = ({ openModal, setOpenModal,id }) => {
  const [colour, setColour] = useState('Blue');
  const [category, setCategory] = useState('Favorite')

  const handleBookmark = () => {
    const body = { colour, category, id };
    const bookmark = localStorage.getItem("bookmark") ? JSON.parse(localStorage.getItem("bookmark")) : [];
    const isDuplicate = bookmark.some(item => item.id === body.id);
  
    if (!isDuplicate) {
      localStorage.setItem("bookmark", JSON.stringify([...bookmark, body]));
    }
    setOpenModal(false);
  };
  


  return (
    <div>
      <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 backdrop-blur-sm duration-100 `}>
        <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md md:w-[400px] rounded-sm bg-white p-6 drop-shadow-lg text-black ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
          <h1 className="text-xl font-bold mb-3">Bookmark</h1>
          <p className="font-medium">Select</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full mb-3 border-black border-2 rounded-md p-2" name="" id="">
            <option value="favorite">Favorite</option>
            <option value="folder-1">Folder 1</option>
            <option value="folder-2">Folder 2</option>
          </select>
          <p className="font-medium">Colour</p>
          <div className="flex items-center gap-4 mb-8">
            <span onClick={() => setColour('Blue')} className={`p-5 rounded-md cursor-pointer ${colour === 'Blue' ? 'bg-blue-600 border-2 border-black' : 'bg-blue-600'}`}></span>
            <span onClick={() => setColour('Red')} className={`p-5 rounded-md cursor-pointer ${colour === 'Red' ? 'bg-red-600 border-2 border-black' : 'bg-red-600'}`}></span>
            <span onClick={() => setColour('Green')} className={`p-5 rounded-md cursor-pointer ${colour === 'Green' ? 'bg-green-600 border-2 border-black' : 'bg-green-600'}`}></span>
            <span onClick={() => setColour('Yellow')} className={`p-5 rounded-md cursor-pointer ${colour === 'Yellow' ? 'bg-yellow-500 border-2 border-black' : 'bg-yellow-500'}`}></span>
          </div>
          <div className="flex justify-center gap-5">
            <button onClick={handleBookmark} className="me-2 rounded-sm bg-green-700 px-6 py-[6px] text-white">Save</button>
            <button onClick={() => setOpenModal(false)} className="rounded-sm border bg-[#EDEDED] px-6 py-[6px] text-black duration-150">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
