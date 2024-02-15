import React from "react";
import { FaArrowDown } from "react-icons/fa";
const Body = () => {
  const colors = [
    "#2421b8",
    "#cdd61e",
    "#d6271e",
    "#d61e9f",
    "#262626",
    "#136b0e",
  ];
  return (
    <div className="flex justify-between items-center px-6 ">
      <div className="flex justify-start my-10 items-center gap-4">
        {colors.map((item) => {
          return (
            <div>
              <div
                key={item}
                style={{ background: item }}
                className="w-14 h-14 rounded-full cursor-pointer transform ease-in duration-300   scale-90 hover:scale-110"
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="bg-sky-600 px-7 py-3 flex justify-center items-center gap-3 text-white text-lg rounded-md">
          Download
          <span>
            <FaArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Body;
