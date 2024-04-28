import React, { useState } from "react";

const TextConvertor = () => {
  const [input, setInput] = useState("");
  const [conversionType, setConversionType] = useState("UpperCase");
  const Case = () => {
    if (conversionType === "UpperCase") {
      let text = input.toUpperCase();
      setInput(text);
    } else if (conversionType === "LowerCase") {
      let text = input.toLowerCase();
      setInput(text);
    }
    return text;
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 my-10 text-3xl">
      <h1>TextConvertor</h1>
      <textarea
        name="Type your input"
        id=""
        cols="30"
        rows="5"
        className="bg-slate-300 focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <select
        name=""
        id=""
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
      >
        <option value="UpperCase">UpperCase</option>
        <option value="LowerCase">LowerCase</option>
      </select>

      <button onClick={Case}>Submit</button>
    </div>
  );
};

export default TextConvertor;
