import React, { useState } from "react";

const TextConvertor = () => {
  const [input, setInput] = useState("");
  const [conversionType, setConversionType] = useState("UpperCase");
  const [output, setOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const Case = () => {
    if (conversionType === "UpperCase") {
      setOutput(input.toUpperCase());
      setShowOutput(true);
    } else if (conversionType === "LowerCase") {
      setOutput(input.toLowerCase());
      setShowOutput(true);
    } else if (conversionType === "Encode Base64") {
      setOutput(btoa(input));
      setShowOutput(true);
    } else if (conversionType === "Decode Base64") {
      setOutput(atob(input));
      setShowOutput(true);
    }
    setInput("")
  };
  return (
    <div className="flex flex-col justify-start items-start gap-5 my-10 text-3xl px-10">
      <h1 className="text-center w-full font-bold text-yellow-400">
        TextConvertor
      </h1>

      {showOutput ? (
        <div className=" flex flex-col w-full justify-center items-center">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-yellow-50 focus:outline-none p-4 rounded-md font-semibold font-serif mt-10"
          >
            {output}
          </textarea>

          <div className="flex gap-4 mt-10">
            <button className="bg-green-800 px-10 py-3 text-yellow-400 rounded-xl hover:scale-95 transition-all duration-500 ease-in ">
              Edit
            </button>
            <button className="bg-green-800 px-10 py-3 text-yellow-400 rounded-xl hover:scale-95 transition-all duration-500 ease-in "
            onClick={()=>setShowOutput(false)}
            >
              Convert More
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="">Text to be converted</h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-yellow-50 focus:outline-none p-4 rounded-md font-semibold font-serif"
            placeholder="Type your input here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>

          <select
            name=""
            id=""
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
            className="bg-yellow-50 p-2 focus:outline-none"
          >
            <option value="UpperCase">UpperCase</option>
            <option value="LowerCase">LowerCase</option>
            <option value="Encode Base64">Encode Base64</option>
            <option value="Decode Base64">Decode Base64</option>
          </select>

          <button
            onClick={Case}
            className="bg-green-800 px-4 py-3 text-yellow-400 rounded-xl hover:scale-95 transition-all duration-500 ease-in w-full"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default TextConvertor;
