import React, { useState } from "react";

const TextEditorApp = () => {
  const [text, setText] = useState("");
  const [modifiedText, setModifiedText] = useState("");

  const uppercase = () => {
    setModifiedText(text.toUpperCase());
  };

  const lowercase = () => {
    setModifiedText(text.toLowerCase());
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 my-4">
        <input
          type="text"
          className="bg-slate-200 px-2 py-2 rounded-lg focus:outline-none text-xl "
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-green-800 px-4 py-2 rounded-lg"
          onClick={uppercase}
        >
          Change to UpperCase
        </button>
        <button
          className="bg-yellow-500 text-green-800 px-4 py-2 rounded-lg"
          onClick={lowercase}
        >
          Change to LowerCase
        </button>

      <div className="text-5xl">
      {modifiedText}
      </div>
      </div>
    </>
  );
};

export default TextEditorApp;
