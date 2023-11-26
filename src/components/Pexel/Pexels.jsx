import React, {useState } from "react";
import Data from "./Data";
const Pexels = () => {
  const [images, setImages] = useState(Data);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filteredItem = Data.filter((item) =>
        item.text.toLowerCase().includes(search.toLowerCase())
      );
      setImages(filteredItem);
    }
  };

  return (
    <div className="text-white py-10 flex justify-center items-center flex-col gap-5 text-5xl ">
      <div>Pexels : Find any image</div>
      <div className="w-1/2">
        <input
          type="text"
          className="text-sky-900 px-4 py-4 text-3xl w-full bg-pink-100 focus:outline-none rounded-md"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleSearch}
          placeholder="Search here..."
        />
      </div>
      <div className="w-full px-44 ">
        <div className="grid grid-cols-3 justify-center items-center gap-10 bg-slate-800 w-full p-4">
          {images.map((item) => {
            return (
              <div>
                {<img src={item.img} className="h-64 w-64 bg-blend-multiply" alt="" />}
                <p className="text-2xl " > {item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Pexels;
