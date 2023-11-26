import React, { useState } from "react";

const Pexels = () => {
  const [images, setImages] = useState("hi");
  const handleChange = (e) => {
    setImages(e.target.value);
  };
  return (
    <div className="text-white py-10 flex justify-center items-center flex-col gap-5 text-5xl ">
      <div>Pexels : Find any image</div>
      <div>
        <input
          type="text"
          className="text-sky-900 px-4 bg-pink-100 rounded-md"
          onChange={handleChange}
        />
      </div>

      <div className="w-full px-44 ">
        <div className="grid grid-cols-3 justify-center items-center gap-10 bg-slate-800 w-full h-96 p-4">
          {images}
        </div>
      </div>
    </div>
  );
};

export default Pexels;
