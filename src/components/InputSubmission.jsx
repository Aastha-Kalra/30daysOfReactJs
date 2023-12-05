import React, { useState } from "react";

const InputSubmission = () => {
  const [input, setInput] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [allInput, setAllInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const inp = {
        input: input,
      };
      setAllInput([...allInput, inp]);
      setInput("");
      alert("Submitted Successfully");
    }
  };
  return (
    <div className="text-5xl flex justify-center py-44 items-center flex-col gap-6">
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-400 p-4 focus:outline-none"
      />
      <input
        type="checkbox"
        name=""
        id=""
        className="w-14 h-14"
        onChange={() => setIsShow(!isShow)}
      />

      <button type="button" onClick={handleSubmit} className="bg-sky-500 px-4 py-4">
        Submit
      </button>

      {isShow ? (
        <div>
          {allInput.map((item, index) => (
            <div key={index}>{item.input}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default InputSubmission;
