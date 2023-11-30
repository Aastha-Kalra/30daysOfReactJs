import React, { useState } from "react";

const Dictionary = () => {
  const [input, setInput] = useState("");
  return (
    <div className="text-white flex justify-center items-center flex-col gap-5">
      <div className="text-5xl font-extrabold my-6">Glossary</div>
      <div>
        <input
          type="text"
          name=""
          id=""
          className="text-sky-500 bg-sky-200 h-14 rounded w-96 focus:outline-none text-3xl px-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="w-full px-44">
        <div className="text-5xl text-yellow-400 px-4 bg-indigo-700 w-full h-96 rounded-lg">
          {input}
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
