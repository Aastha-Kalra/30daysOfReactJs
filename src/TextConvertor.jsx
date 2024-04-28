import React, { useState } from "react";

const TextConvertor = () => {
  const [input, setInput] = useState("");
  const [conversionType, setConversionType] = useState("UpperCase");
  const [output, setOutput]=useState('')
  const Case = () => {
    if (conversionType === "UpperCase") {
      let text = input.toUpperCase();
      setOutput(text);
      setInput("")
    } else if (conversionType === "LowerCase") {
      let text = input.toLowerCase();
      setOutput(text);
    }
    else if(conversionType==="Encode Base64"){
        return setOutput(btoa(input))
    }
    return text;
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 my-10 text-3xl">
      <h1>TextConvertor</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        className="bg-slate-300 focus:outline-none p-4 rounded-md font-semibold font-serif"
        placeholder="Type your input here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <select
        name=""
        id=""
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
        className="bg-slate-300 p-2 focus:outline-none"
      >
        <option value="UpperCase">UpperCase</option>
        <option value="LowerCase">LowerCase</option>
        <option value="Encode Base64">Encode Base64</option>
      </select>

      <button onClick={Case} className="bg-green-800 px-4 py-3 text-yellow-400 rounded-xl hover:scale-75 transition-all duration-500 ease-in">Submit</button>

      <div>
        Output is : {output}
      </div>
    </div>
  );
};

export default TextConvertor;
