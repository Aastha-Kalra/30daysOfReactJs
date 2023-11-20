import React, { useState } from "react";

const LetterCalculator = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="text-white py-10 flex justify-center items-center flex-col gap-5 text-5xl ">
      <div>Letter Calculator</div>
      <div className="w-full px-44 my-10 h-full">
        <textarea
          type="text"
          placeholder="Enter Your Phrase Here..."
          className="w-full  rounded focus:outline-none p-2 text-sky-500 bg-slate-200"
          value={input}
          onChange={handleChange}
        />
      </div>

      <div className="text-sky-300 mt-10">
        The above phrase has {input.length} characters!!
      </div>
    </div>
  );
};

export default LetterCalculator;
